import { MissionControl } from '../models/MissionControl';
import { Rocket } from '../models/Rocket';
import { LaunchStage } from '../models/LaunchStage';
import { Logger } from '../utils/Logger';
import { ErrorHandler } from '../utils/ErrorHandler';

export class RocketSimulator {
  private missionControl: MissionControl;
  private intervalId: NodeJS.Timeout | null = null;

  constructor(missionControl: MissionControl) {
    this.missionControl = missionControl;
  }

  startChecks(): void {
    Logger.log(this.missionControl.startChecks());
  }

  launch(): void {
    const launchResult = this.missionControl.launch();
    Logger.log(launchResult);

    if (launchResult === "Launch initiated.") {
      this.startSimulation();
    }
  }

  fastForward(seconds: number): void {
    if (seconds <= 0) {
      ErrorHandler.handleError("Invalid time step.");
      return;
    }

    const rocket = this.missionControl.getRocket();

    if (!rocket.isFuelSufficient()) {
      Logger.log("Mission Failed due to insufficient fuel.");
      return;
    }

    for (let i = 0; i < seconds; i++) {
      if (!rocket.isFuelSufficient()) {
        Logger.log("Mission Failed due to insufficient fuel.");
        return;
      }

      rocket.useFuel(1);
      rocket.accelerate();

      if (rocket.getAltitude() >= 100) {
        rocket.updateStage();
        Logger.log(LaunchStage.getStageDescription(rocket.getStage()));
        if (rocket.getStage() === LaunchStage.STAGE_2) {
          Logger.log("Orbit achieved! Mission Successful.");
          return;
        }
      }

      this.logStatus();
    }
  }

  private startSimulation(): void {
    this.intervalId = setInterval(() => {
      const rocket = this.missionControl.getRocket();

      if (!rocket.isFuelSufficient()) {
        Logger.log("Mission Failed due to insufficient fuel.");
        if (this.intervalId !== null) {
          clearInterval(this.intervalId);
        }
        return;
      }

      rocket.useFuel(1);
      rocket.accelerate();

      if (rocket.getAltitude() >= 100) {
        rocket.updateStage();
        Logger.log(LaunchStage.getStageDescription(rocket.getStage()));
        if (rocket.getStage() === LaunchStage.STAGE_2) {
          Logger.log("Orbit achieved! Mission Successful.");
          if (this.intervalId !== null) {
            clearInterval(this.intervalId);
          }
          return;
        }
      }

      this.logStatus();
    }, 1000);
  }

  private logStatus(): void {
    const rocket = this.missionControl.getRocket();
    Logger.log(`Stage: ${rocket.getStage()}, Fuel: ${rocket.getFuel()}%, Altitude: ${Math.round(rocket.getAltitude())} km, Speed: ${rocket.getSpeed()} km/h`);
  }
}

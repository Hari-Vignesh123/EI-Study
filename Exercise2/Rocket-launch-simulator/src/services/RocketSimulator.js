"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RocketSimulator = void 0;
const LaunchStage_1 = require("../models/LaunchStage");
const Logger_1 = require("../utils/Logger");
const ErrorHandler_1 = require("../utils/ErrorHandler");
class RocketSimulator {
    constructor(missionControl) {
        this.intervalId = null;
        this.missionControl = missionControl;
    }
    startChecks() {
        Logger_1.Logger.log(this.missionControl.startChecks());
    }
    launch() {
        const launchResult = this.missionControl.launch();
        Logger_1.Logger.log(launchResult);
        if (launchResult === "Launch initiated.") {
            this.startSimulation();
        }
    }
    fastForward(seconds) {
        if (seconds <= 0) {
            ErrorHandler_1.ErrorHandler.handleError("Invalid time step.");
            return;
        }
        const rocket = this.missionControl.getRocket();
        if (!rocket.isFuelSufficient()) {
            Logger_1.Logger.log("Mission Failed due to insufficient fuel.");
            return;
        }
        for (let i = 0; i < seconds; i++) {
            if (!rocket.isFuelSufficient()) {
                Logger_1.Logger.log("Mission Failed due to insufficient fuel.");
                return;
            }
            rocket.useFuel(1);
            rocket.accelerate();
            if (rocket.getAltitude() >= 100) {
                rocket.updateStage();
                Logger_1.Logger.log(LaunchStage_1.LaunchStage.getStageDescription(rocket.getStage()));
                if (rocket.getStage() === LaunchStage_1.LaunchStage.STAGE_2) {
                    Logger_1.Logger.log("Orbit achieved! Mission Successful.");
                    return;
                }
            }
            this.logStatus();
        }
    }
    startSimulation() {
        this.intervalId = setInterval(() => {
            const rocket = this.missionControl.getRocket();
            if (!rocket.isFuelSufficient()) {
                Logger_1.Logger.log("Mission Failed due to insufficient fuel.");
                if (this.intervalId !== null) {
                    clearInterval(this.intervalId);
                }
                return;
            }
            rocket.useFuel(1);
            rocket.accelerate();
            if (rocket.getAltitude() >= 100) {
                rocket.updateStage();
                Logger_1.Logger.log(LaunchStage_1.LaunchStage.getStageDescription(rocket.getStage()));
                if (rocket.getStage() === LaunchStage_1.LaunchStage.STAGE_2) {
                    Logger_1.Logger.log("Orbit achieved! Mission Successful.");
                    if (this.intervalId !== null) {
                        clearInterval(this.intervalId);
                    }
                    return;
                }
            }
            this.logStatus();
        }, 1000);
    }
    logStatus() {
        const rocket = this.missionControl.getRocket();
        Logger_1.Logger.log(`Stage: ${rocket.getStage()}, Fuel: ${rocket.getFuel()}%, Altitude: ${Math.round(rocket.getAltitude())} km, Speed: ${rocket.getSpeed()} km/h`);
    }
}
exports.RocketSimulator = RocketSimulator;

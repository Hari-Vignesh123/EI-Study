import { Rocket } from './Rocket';

export class MissionControl {
  private rocket: Rocket;
  private isLaunched: boolean = false;

  constructor(rocket: Rocket) {
    this.rocket = rocket;
  }

  startChecks(): string {
    return "All systems are 'Go' for launch.";
  }

  launch(): string {
    if (this.isLaunched) {
      return "Mission already launched.";
    }

    this.isLaunched = true;
    return "Launch initiated.";
  }

  getRocket(): Rocket {
    return this.rocket;
  }
}

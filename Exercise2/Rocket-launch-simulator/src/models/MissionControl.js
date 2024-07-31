"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissionControl = void 0;
class MissionControl {
    constructor(rocket) {
        this.isLaunched = false;
        this.rocket = rocket;
    }
    startChecks() {
        return "All systems are 'Go' for launch.";
    }
    launch() {
        if (this.isLaunched) {
            return "Mission already launched.";
        }
        this.isLaunched = true;
        return "Launch initiated.";
    }
    getRocket() {
        return this.rocket;
    }
}
exports.MissionControl = MissionControl;

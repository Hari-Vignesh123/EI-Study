"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchStage = void 0;
class LaunchStage {
    static getStageDescription(stage) {
        switch (stage) {
            case LaunchStage.STAGE_1:
                return "Stage 1 complete. Separating stage. Entering Stage 2.";
            case LaunchStage.STAGE_2:
                return "Orbit achieved! Mission Successful.";
            default:
                return "Unknown stage.";
        }
    }
}
exports.LaunchStage = LaunchStage;
LaunchStage.STAGE_1 = 1;
LaunchStage.STAGE_2 = 2;

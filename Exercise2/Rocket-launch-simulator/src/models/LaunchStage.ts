export class LaunchStage {
    static STAGE_1 = 1;
    static STAGE_2 = 2;
  
    static getStageDescription(stage: number): string {
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
  
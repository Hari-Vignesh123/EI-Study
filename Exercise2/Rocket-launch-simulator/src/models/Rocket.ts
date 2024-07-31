export class Rocket {
    private fuel: number = 100;
    private altitude: number = 0;
    private speed: number = 0;
    private stage: number = 0;
  
    constructor(private stages: number[]) {}
  
    getFuel(): number {
      return this.fuel;
    }
  
    getAltitude(): number {
      return this.altitude;
    }
  
    getSpeed(): number {
      return this.speed;
    }
  
    getStage(): number {
      return this.stage;
    }
  
    updateStage(): void {
      if (this.stage < this.stages.length) {
        this.stage++;
      }
    }
  
    useFuel(amount: number): void {
      this.fuel -= amount;
      if (this.fuel < 0) {
        this.fuel = 0;
      }
    }
  
    accelerate(): void {
      this.speed += 1000;
      this.altitude += this.speed / 3600;
    }
  
    isFuelSufficient(): boolean {
      return this.fuel > 0;
    }
  }
  
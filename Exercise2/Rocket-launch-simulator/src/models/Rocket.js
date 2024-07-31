"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rocket = void 0;
class Rocket {
    constructor(stages) {
        this.stages = stages;
        this.fuel = 100;
        this.altitude = 0;
        this.speed = 0;
        this.stage = 0;
    }
    getFuel() {
        return this.fuel;
    }
    getAltitude() {
        return this.altitude;
    }
    getSpeed() {
        return this.speed;
    }
    getStage() {
        return this.stage;
    }
    updateStage() {
        if (this.stage < this.stages.length) {
            this.stage++;
        }
    }
    useFuel(amount) {
        this.fuel -= amount;
        if (this.fuel < 0) {
            this.fuel = 0;
        }
    }
    accelerate() {
        this.speed += 1000;
        this.altitude += this.speed / 3600;
    }
    isFuelSufficient() {
        return this.fuel > 0;
    }
}
exports.Rocket = Rocket;

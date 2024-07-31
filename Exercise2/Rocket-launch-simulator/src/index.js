"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rocket_1 = require("./models/Rocket");
const MissionControl_1 = require("./models/MissionControl");
const RocketSimulator_1 = require("./services/RocketSimulator");
// Setup the Rocket with 2 stages
const rocket = new Rocket_1.Rocket([100, 50]); // Example stages with different fuel levels
const missionControl = new MissionControl_1.MissionControl(rocket);
const simulator = new RocketSimulator_1.RocketSimulator(missionControl);
// Simulate pre-launch checks
simulator.startChecks();
// Launch the rocket
simulator.launch();
// Fast forward simulation by 10 seconds
setTimeout(() => {
    simulator.fastForward(10);
}, 5000); // Start fast-forwarding after 5 seconds

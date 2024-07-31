import { Rocket } from './models/Rocket';
import { MissionControl } from './models/MissionControl';
import { RocketSimulator } from './services/RocketSimulator';

// Setup the Rocket with 2 stages
const rocket = new Rocket([100, 50]); // Example stages with different fuel levels
const missionControl = new MissionControl(rocket);
const simulator = new RocketSimulator(missionControl);

// Simulate pre-launch checks
simulator.startChecks();

// Launch the rocket
simulator.launch();

// Fast forward simulation by 10 seconds
setTimeout(() => {
  simulator.fastForward(10);
}, 5000); // Start fast-forwarding after 5 seconds

import { Observer } from "./observer";

export class ConcreteObserver implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(message: string): void {
    console.log(`${this.name} received message: ${message}`);
  }
}

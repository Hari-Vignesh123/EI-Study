import { Strategy } from './Strategy';

export class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  executeStrategy(data: string): string {
    return this.strategy.execute(data);
  }
}

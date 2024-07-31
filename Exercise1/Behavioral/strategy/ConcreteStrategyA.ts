import { Strategy } from './Strategy';

export class ConcreteStrategyA implements Strategy {
  execute(data: string): string {
    return `ConcreteStrategyA: ${data.toUpperCase()}`;
  }
}

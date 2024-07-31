import { Strategy } from './Strategy';

export class ConcreteStrategyB implements Strategy {
  execute(data: string): string {
    return `ConcreteStrategyB: ${data.toLowerCase()}`;
  }
}

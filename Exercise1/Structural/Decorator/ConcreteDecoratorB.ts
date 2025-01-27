import { Decorator } from './Decorator';

export class ConcreteDecoratorB extends Decorator {
  operation(): string {
    return `ConcreteDecoratorB(${this.component.operation()})`;
  }
}

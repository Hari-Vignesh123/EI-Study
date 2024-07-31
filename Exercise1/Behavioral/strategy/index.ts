import { Context } from './Context';
import { ConcreteStrategyA } from './ConcreteStrategyA';
import { ConcreteStrategyB } from './ConcreteStrategyB';

const context = new Context(new ConcreteStrategyA());
console.log(context.executeStrategy('Hello Strategy!'));

context.setStrategy(new ConcreteStrategyB());
console.log(context.executeStrategy('Hello Strategy!'));

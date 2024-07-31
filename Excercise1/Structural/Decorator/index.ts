import { ConcreteComponent } from './ConcreteComponent';
import { ConcreteDecoratorA } from './ConcreteDecoratorA';
import { ConcreteDecoratorB } from './ConcreteDecoratorB';

const component = new ConcreteComponent();
const decoratedA = new ConcreteDecoratorA(component);
const decoratedB = new ConcreteDecoratorB(decoratedA);

console.log(decoratedB.operation());

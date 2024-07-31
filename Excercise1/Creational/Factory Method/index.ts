import { ConcreteCreatorA } from './ConcreteCreatorA';
import { ConcreteCreatorB } from './ConcreteCreatorB';

const creatorA = new ConcreteCreatorA();
console.log(creatorA.operation());

const creatorB = new ConcreteCreatorB();
console.log(creatorB.operation());

import { Creator } from './Creator';
import { ConcreteProductA } from './ConcreteProductA';
import { Product } from './Product';

export class ConcreteCreatorA extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductA();
  }
}

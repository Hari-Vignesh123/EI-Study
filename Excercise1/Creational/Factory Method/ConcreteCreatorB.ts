import { Creator } from './Creator';
import { ConcreteProductB } from './ConcreteProductB';
import { Product } from './Product';

export class ConcreteCreatorB extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductB();
  }
}

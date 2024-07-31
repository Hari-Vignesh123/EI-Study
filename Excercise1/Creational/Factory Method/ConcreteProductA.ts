import { Product } from './Product';

export class ConcreteProductA implements Product {
  operation(): string {
    return 'ConcreteProductA';
  }
}

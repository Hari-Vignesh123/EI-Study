import { Product } from './Product';

export abstract class Creator {
  abstract factoryMethod(): Product;

  public operation(): string {
    const product = this.factoryMethod();
    return `Creator: The product says '${product.operation()}'`;
  }
}

import { Target } from './Target';
import { Adaptee } from './Adaptee';

export class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  request(): string {
    return `Adapter: ${this.adaptee.specificRequest()}`;
  }
}

import { Subject } from './Subject';
import { Observer } from './observer';

export class ConcreteSubject implements Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(message: string): void {
    this.observers.forEach(observer => observer.update(message));
  }
}

import { ConcreteSubject } from './ConcreteSubject';
import { ConcreteObserver } from './ConcreteObserver';

const subject = new ConcreteSubject();
const observer1 = new ConcreteObserver('Observer 1');
const observer2 = new ConcreteObserver('Observer 2');

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify('Hello Observers!');

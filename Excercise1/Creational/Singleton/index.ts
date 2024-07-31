import { Singleton } from './Singleton';

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

singleton1.doSomething();

console.log(singleton1 === singleton2); // true

import { Observer } from "./observer";

export interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(message: string): void;
  }
  
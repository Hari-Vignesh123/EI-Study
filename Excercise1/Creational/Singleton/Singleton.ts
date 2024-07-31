export class Singleton {
    private static instance: Singleton;
  
    private constructor() {}
  
    static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  
    public doSomething(): void {
      console.log('Singleton is doing something!');
    }
  }
  
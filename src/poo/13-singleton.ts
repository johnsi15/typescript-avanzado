export class MyService {
  // Singleton nos previene crear múltiples instancias de una clase.
  private static instance: MyService | null = null;

  private constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('Se va crear un servicio');
      MyService.instance = new MyService(name);
    }

    return MyService.instance;
  }
}

const myService1 = MyService.create('service 1');
const myService2 = MyService.create('service 2');

console.log(myService1.name);
console.log(myService2.name);

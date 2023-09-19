export abstract class Animal {
  // protected -> Básicamente, es la forma de heredar propiedades y métodos.
  // Es similar a como funciona una propiedad o método privado, pero nos permite realizar herencia.
  constructor(protected name: string) {}
  move() {
    console.log('moving animal');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('doo');
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log(`woof ${this.name}`);
    }

    this.doSomething();
  }

  move() {
    // move hija
    console.log('moving as a dog');
    super.move(); // move padre
  }
  // el método move() es polimorfismo, es reescribir el método que adopta otro comportamiento en la clase hija,
  // pero en este caso este otro comportamiento es un agregado de funcionalidad adicional antes de su ejecucíon por eso al final llama al move() del padre con super()
}

const michael = new Dog('Michael', 'John');

michael.move();
console.log(michael.greeting());
michael.woof(2);

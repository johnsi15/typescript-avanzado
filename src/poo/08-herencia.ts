export class Animal {
  constructor(public name: string) {}
  move() {
    console.log('moving');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('woof');
    }
  }
}

const tayson = new Animal('Tayson');
const michael = new Dog('Michael', 'John');

tayson.move();
console.log(tayson.greeting());

michael.move();
console.log(michael.greeting());
michael.woof(5);

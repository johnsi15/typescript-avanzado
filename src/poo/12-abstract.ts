import { Animal, Dog } from './09-protected';
// En conclusión, cada vez que implementamos una clase abstracta,
// no podemos crear instancias de esa clase, si no solo de las clases hijas.
const animal = new Animal('cat'); // No se puede crear una instancia de una clase abstracta.

animal.greeting();

const tayson = new Dog('tayson', 'andrey');
tayson.greeting();
tayson.woof(2);

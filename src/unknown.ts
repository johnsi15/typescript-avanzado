let anyVar: any;
anyVar = 'Andrey';
anyVar = 15;
anyVar = true;
anyVar = {};
anyVar = [];
anyVar = null;
anyVar = undefined;

let isNew: boolean = anyVar; // no se queja ni nada, evitar usar any en la medida de lo posible

anyVar.doSomething();
anyVar.toUpperCase();

let unknownVar: unknown;
unknownVar = 'Andrey';
unknownVar = 15;
unknownVar = true;
unknownVar = {};
unknownVar = [];
unknownVar = null;
unknownVar = undefined;

if (typeof unknownVar === 'string') { // debemos validar antes el tipo de dato para poder ejecutar una function en este caso
  unknownVar.toUpperCase();
  unknownVar.doSomething(); // si intento hacer la llamada a algo que no existe me marca error
}

// unknownVar.toUpperCase(); // Error

if (typeof unknownVar === 'boolean') { // validamos primero que el type realmente sea un booleano en este caso
  let isNew2: boolean = unknownVar;
  console.log(isNew2)
}

// let isNew2: boolean = unknownVar; // nos marca error

// Code snippet from unknown.ts example
const parse = (str: string): unknown => {
  return JSON.parse(str);
}

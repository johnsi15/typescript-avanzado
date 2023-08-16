// Sobre carga de functions

// Nico => [N,i,c,o] || Entrada: string => Salida: string[]
// [N,i,c,o] => Nico || Entrada: string[] => Salida: string

// Sobrecarga de funciones 👇
function parseStr(input: string): string[]; // 👀
function parseStr(input: string[]): string; // 👀
function parseStr(input: number): boolean; // 👀

function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  } else if (typeof input === 'number') {
    return true // boolean
  }

  return 'Nothing'
}

const rptaStr = parseStr(['N', 'I', 'C', 'O']); // Retorna un string
// Usaremos un método propio del tipo de dato "string"
rptaStr.toLowerCase(); // ✅ No necesitamos de la validación de datos para usar los métodos de este tipo de dato
console.log('rptaStr', "['N','i','c','o'] =>", rptaStr);

const rptaArray = parseStr('Nico'); // Retorna un string[] (un array de elementos de tipo string)
// Usaremos un método propio del tipo de dato "string[]"
rptaArray.reverse(); // ✅ No necesitamos de la validación de datos para usar los métodos de este tipo de dato
console.log('rptaArray', 'Nico =>', rptaArray);

/*
buenas practicas:
  // case 1
  declare function fn(x: HTMLDivElement): string;
  declare function fn(x: HTMLElement): number;
  declare function fn(x: unknown): unknown; // Si tenemos un unknown dejarlo de último
  var myElement: HTMLDivElement;
  var x = fn( myElement ); // x: string

  // case 2
  interface Example {
    diff(one: string): number;
    diff(one: string, two: string): number;
    diff(one: string,  two: string, three:boolean): number;
  }

  // Sol: Create one with option parameters
  interface Example {
    diff(one: string, two?: string, three?: string): number; // en vez de tener sobre cargas podemos usar parametros opcionales
  }

  // case 3
  interface Moment {
    utcOffset(): number;
    utcOffset(b: number): Moment;
    utcOffset(b: string): Moment;
  }

  // solution: just use 1 union type
  interface Moment {
    utcOffset(): number;
    utcOffset(b: number | string): Moment; // usar un union type y una sobre carga
  }
*/

// forma normal
// function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return input.split(''); // string[]
//   }
// }

// const rptaStr = parseStr(['N','I','C','O']); // Retorna un string
// // rptaStr.toLowerCase(); // ⛔ Error
// // Validación de tipos
// if (typeof rptaStr === 'string') { // 👈
//   rptaStr.toLowerCase(); // ✅ Ya podemos utilizar los métodos sin problemas
// }

// console.log('rptaStr', "['N','i','c','o'] =>", rptaStr);


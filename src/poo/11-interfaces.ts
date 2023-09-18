/**
  Interfaces en clases:
  Las interfaces en clases funcionan como contratos, nos permiten tipar tanto los atributos como los métodos.
  Aquí no podemos utilizar encapsulamiento, por defecto todos los atributos y métodos son públicos.

  Implements:
  Tiene la misma sintaxis cuando aplicamos herencias en las clases, pero implements no es una herencia, es un contrato que nos dice que nuestra clase tiene que cumplir con un estándar que es la interface.

  Este contrato es tanto como para los parámetros como para los métodos.
*/

export interface Driver {
  // todos son publicos no deben ir atributos o métodos private
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(): boolean;
}

// Una interfaces se implementan con la palabra reservada implements
// No es una herencia, es un estandar que se debe cumplir porque previamente ya fue definido

class PostgressDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    console.log('connecting to postgress');
  }

  disconnect(): void {
    console.log('disconnecting to postgress');
  }

  isConnected(): boolean {
    return true;
  }
}

class MongodbDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {}
  disconnect(): void {}
  isConnected(): boolean {
    return false;
  }
}

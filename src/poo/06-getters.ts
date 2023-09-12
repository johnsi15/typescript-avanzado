/**
  Utilizar el underscore ( _ ) es una convención para identificar variables privadas.
  Ponerle el hash (#) al inicio a una propiedad o metodo en JS es una nueva caracteristica de ES2022 para volver ese campo privado.
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields

  📄Con get podemos acceder a una propiedad con un alcance privado, podemos obtener los datos de esa propiedad pero no modificarlos o mutarlos.
  Lo podemos acceder como si fuese una propiedad más de la instancia.
  Por definición, todos los getters tienen que retornar algo.
*/

export class MyDate {
  // propiedades o atributos
  readonly dbName: string;
  #otherValue: string | null;

  // constructor
  constructor(
    public year: number = 2023,
    public month: number = 7,
    private _day: number = 15,
    newValue: string = 'Hello world'
  ) {
    this.dbName = 'hello';
    this.#otherValue = null;
    console.log(newValue); // It only has scope here
  }

  printFormat(): string {
    const day = this.addZero(this._day);
    const month = this.addZero(this.month);

    return `${day}/${month}/${this.year}`;
  }

  private addZero(value: number) {
    if (value < 10) {
      return `0${value}`;
    }

    return value.toString();
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    // methods can also be public by default
    if (type === 'days') {
      this._day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else {
      this.year += amount;
    }
  }

  get day() {
    console.log(this.#otherValue);
    this.#methodPrivate();
    return this._day;
  }

  get isLeapYear(): boolean {
    const { year } = this;
    // console.log(year);
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
  }

  #methodPrivate() {
    console.log('Other method private');
  }
}

const myDate = new MyDate(2020);
const myDate2 = new MyDate(2000);
const myDate3 = new MyDate(2001);
const myDate4 = new MyDate(2004);

myDate.day;
console.log('My Date: ', myDate.day, myDate.isLeapYear);
console.log('My Date 2: ', myDate2.day, myDate2.isLeapYear);
console.log('My Date 3: ', myDate3.day, myDate3.isLeapYear);
console.log('My Date 4: ', myDate4.day, myDate4.isLeapYear);

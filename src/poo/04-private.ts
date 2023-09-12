export class MyDate {
  // propiedades o atributos
  readonly dbName: string;
  public year: number; // for default is public
  month: number;
  private day: number;
  #otherValue: string | null;

  // constructor
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.dbName = 'hello';
    this.#otherValue = null;
  }

  printFormat(): string {
    const day = this.addZero(this.day);
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
      this.day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else {
      this.year += amount;
    }
  }

  getDay() {
    console.log(this.#otherValue);
    this.#methodPrivate();
    return this.day;
  }

  #methodPrivate() {
    console.log('Other method private');
  }
}

const myDate = new MyDate(1992, 9, 14);

console.log(myDate.printFormat());
console.log(myDate.getDay());

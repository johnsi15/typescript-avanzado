export class MyDate {
  // propiedades o atributos
  readonly dbName: string;
  public year: number; // for default is public
  month: number;
  day: number;

  // constructor
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.dbName = 'hello';
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
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
}

const myDate = new MyDate(1992, 9, 14);
console.log(myDate.printFormat());
myDate.add(1, 'days');
console.log(myDate.printFormat());

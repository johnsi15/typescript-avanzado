class MyDate {
  // propiedades o atributos
  dbName: string;
  year: number;
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

  add(amount: number, type: 'days' | 'months' | 'years') {
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

const date = new Date();

date.getFullYear();
date.getTime();

console.log(date);

export class MyDate {
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
}

const myDate = new MyDate(2022, 8, 15);
console.log(myDate);

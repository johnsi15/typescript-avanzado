export class MyDate {
  // propiedades o atributos
  readonly dbName: string;
  #otherValue: string | null;

  // constructor
  constructor(
    public year: number = 2023,
    public month: number = 7,
    private day: number = 10,
    newValue: string
  ) {
    this.dbName = 'hello';
    this.#otherValue = null;
    console.log(newValue); // It only has scope here
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

const myDate = new MyDate();

console.log(myDate.printFormat());

const myDate2 = new MyDate(1992, 9);

console.log(myDate2.printFormat());
console.log(myDate2.getDay());

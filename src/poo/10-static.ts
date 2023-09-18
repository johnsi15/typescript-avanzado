console.log('Math', Math.PI);
console.log('Math', Math.max(1, 2, 5, 6, 8, 23, 5, 6, 7, 8));

class MyMath {
  static readonly PI = 3.1416;

  static max(...numbers: number[]): number {
    // return numbers.reduce((prev, curr) => Math.max(prev, curr));
    return numbers.reduce((prev, curr) => (prev > curr ? prev : curr));
  }
}

console.log('MyMath', MyMath.PI);
console.log('MyMath', MyMath.max(1, 2, 5, 6, 8, 23, 5, 6, 7, 8));
console.log('MyMath 2', MyMath.max(1, 2, 5, 6, -8, 23, -5, -6, 7, 8));

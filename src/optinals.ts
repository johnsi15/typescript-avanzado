// const createProduct = (id: string | number, isNew: boolean = true, stock: number = 10) => {
//   return {
//     id,
//     stock,
//     isNew
//   }
// }

// const p1 = createProduct(1, false, 12)
// console.log(p1)

// const p2 = createProduct(2)
// console.log(p2)

// const p3 = createProduct(3, false, 0)
// console.log(p3)

// another way to do it
const createProduct = (id: string | number, stock: number, isNew?: boolean) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}

const p1 = createProduct(1, 12, false)
console.log(p1)

const p2 = createProduct(2, 30)
console.log(p2)

const p3 = createProduct(3, 0, false)
console.log(p3)

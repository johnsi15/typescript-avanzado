export const createProduct = (id: string | number, isNew: boolean = true, stock: number = 10) => {
  return {
    id,
    stock,
    isNew
  }
}

const p1 = createProduct(1, false, 12)
console.log(p1)

const p2 = createProduct(2)
console.log(p2)

const p3 = createProduct(3, false, 0)
console.log(p3)

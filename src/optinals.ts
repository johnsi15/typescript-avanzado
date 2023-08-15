// another way to do it
export const createProduct = (id: string | number, stock?: number, isNew?: boolean) => {
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

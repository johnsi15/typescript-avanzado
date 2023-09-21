type Sizes = 'S' | 'M' | 'L' | 'XL'
type userId = string | number

// type Product = {
//   id: string | number
//   title: string
//   createdAt: Date
//   stock: number
//   size?: Sizes
// }

export interface Product {
  id: number | string
  title: string
  createdAt: Date
  stock: number
  size?: Sizes
}

const products: Product[] = []

products.push({
  id: 1,
  title: 'P1',
  createdAt: new Date(),
  stock: 12,
})

const addProduct = (data: Product) => {
  products.push(data)
}

/*
  Nota: Utilizamos type para definir principalmente tipos primitivos o directos (declaraciones cortas y puntuales),
  mientras que con una interface definimos una estructura llave-valor de propiedades
  que describan lo que debe tener un objeto.

  Los interface se pueden fácilmente extender (realizar herencia),
  mientras que con los type no. Esto los hace más escalables.
*/

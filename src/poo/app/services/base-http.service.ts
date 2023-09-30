import axios from 'axios'
import { Category } from '../models/category.model'
import { Product } from '../models/product.model'

export class BaseHttpService<TypeClass> {
  constructor(private url: string) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url)

    return data
  }
}

;(async () => {
  const urlProducts = 'https://api.escuelajs.co/api/v1/products'
  const productService = new BaseHttpService<Product>(urlProducts)

  const resultProducts = await productService.getAll()
  console.log(resultProducts.length)

  // ----

  const urlCategories = 'https://api.escuelajs.co/api/v1/categories'
  const categoryService = new BaseHttpService<Category>(urlCategories)

  const resultCategories = await categoryService.getAll()
  console.log(resultCategories.length)
})()

// RESUMEN:
// Este es un servivio generico que podemos utilizar solamente pasando el tipo de dato
// que queremos utulizar o hacer request, eso nos ahorraria hacer un servicio para
// productos, categorias, usuarios etc…

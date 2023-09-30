import axios from 'axios'
import { Category } from '../models/category.model'
import { Product } from '../models/product.model'
import { UpdateProductDto } from '../dtos/product.dto'

export class BaseHttpService<TypeClass> {
  constructor(protected url: string) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url)

    return data
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes)

    return data
  }
}

;(async () => {
  const urlProducts = 'https://api.escuelajs.co/api/v1/products'
  const productService = new BaseHttpService<Product>(urlProducts)

  const resultProducts = await productService.getAll()
  console.log(resultProducts.length)
  productService.update<Product['id'], UpdateProductDto>('1', { title: 'New title' })

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

import { Product } from '../models/product.model'
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto'
import { ProductService } from '../models/produc-service.model'
import axios from 'axios'

export class ProductHttpService implements ProductService {
  private url = 'https://api.escuelajs.co/api/v1/products?limit=10&offset=0'

  async create(dto: CreateProductDto) {
    try {
      const { data } = await axios.post<Product>(this.url, dto)

      return data
    } catch (error) {
      return 'Algo salio mal'
    }
  }

  async update(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes)

    return data
  }

  async getById(id: Product['id']) {
    const { data } = await axios.get<Product>(`${this.url}/${id}`)

    return data
  }

  get all() {
    return (async () => {
      try {
        const { data } = await axios.get<Product[]>(this.url)

        return data
      } catch (error) {
        return 0
      }
    })()
  }

  async delete(id: Product['id']) {
    await axios.delete(`${this.url}/${id}`)
  }
}

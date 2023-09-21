import { faker } from '@faker-js/faker'
import { Product } from '../models/product.model'
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto'
import { ProductService } from '../models/produc-service.model'
import axios from 'axios'

export class ProductHttpService implements ProductService {
  private products: Product[] = []
  private url = 'https://api.escuelajs.co/api/v1/products?limit=10&offset=0'

  create(data: CreateProductDto): Product {
    // data.id = 'johufeuhfeuf'
    const { categoryId, ...newData } = {
      ...data,
      id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      imagen: [faker.image.url()],
      category: {
        id: faker.string.uuid(),
        name: faker.commerce.department(),
        image: faker.image.url(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
    }

    return this.add(newData)
  }

  private add(product: Product) {
    this.products.push(product)
    return product
  }

  update(id: Product['id'], changes: UpdateProductDto): Product {
    const index = this.products.findIndex((product) => product.id === id)
    if (index !== -1) {
      const prevData = this.products[index]
      this.products[index] = { ...prevData, ...changes }
    }

    return this.products[index]
  }

  getById(id: Product['id']) {
    return this.products.find((product) => product.id === id)
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

  delete(id: Product['id']) {
    const index = this.products.findIndex((product) => product.id === id)
    if (index !== -1) {
      this.products.splice(index, 1)
    }
  }
}

import { faker } from '@faker-js/faker'
import { Product } from '../models/product.model'
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto'

class ProductMemoryService {
  private products: Product[] = []

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

  add(product: Product) {
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
    return products.find((product) => product.id === id)
  }
}

export const getAllProducts = () => {
  return products
}

// Acceder al tipado por indice Product['id']

export const deleteProduct = (id: string) => {
  const index = products.findIndex((product) => product.id === id)
  if (index !== -1) {
    products.splice(index, 1)
  }
}

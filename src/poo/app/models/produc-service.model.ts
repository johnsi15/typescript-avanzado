import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto'
import { Product } from './product.model'

export interface ProductService {
  create(data: CreateProductDto): Product | Promise<Product | string>

  update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>

  getById(id: Product['id']): Product | undefined | Promise<Product | undefined>

  delete(id: Product['id']): void

  get all(): Product[] | Promise<Product[] | 0>
}

import { Product } from './product.model'

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string
}

// Es como el Omit pero acá solo le indicamos que campos son los que queremos
type example = Pick<Product, 'color' | 'description' | 'title'>

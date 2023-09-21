import { Product } from '../models/product.model'
import { Category } from '../models/category.model'

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: Category['id']
}

export type UpdateProductDto = Partial<CreateProductDto> // ✅

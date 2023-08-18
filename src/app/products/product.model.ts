import { Category } from '../categories/category.model';
import { BaseModel } from '../base.model'

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseModel {
  title: string
  description: string
  image: string
  color: string
  isNew: boolean
  price: number
  tags: string[]
  createdAt: Date
  stock: number
  size?: Sizes
  category: Category
}

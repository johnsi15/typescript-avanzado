import { Category } from './category.model'

export interface Product {
  id: string
  title: string
  price: number
  description: string
  images: string[]
  createdAt: Date
  updatedAt: Date
  category: Category
}

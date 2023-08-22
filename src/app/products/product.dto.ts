import { Product } from './product.model'

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string
}

// Es como el Omit pero acá solo le indicamos que campos son los que queremos
type example = Pick<Product, 'color' | 'description' | 'title'>

// Se puede usar como interface o como type aliases
// export interface UpdateProductDto extends Partial<CreateProductDto> { } // ✅
export type UpdateProductDto = Partial<CreateProductDto> // ✅

// El contrario de Partial es Required
type example2 = Required<Product> // Todos los datos son requeridos

// El partial también puede ir como una interface o type aliases
// export type FindProductDto = Readonly<Partial<Product>>
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>
}

type example3 = Readonly<Product>

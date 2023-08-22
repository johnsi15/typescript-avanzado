import { faker } from '@faker-js/faker';
import { Product } from './product.model';
import { CreateProductDto, FindProductDto, UpdateProductDto } from './product.dto'

export const products: Product[] = [];

export const getAllProducts = () => {
  return products;
}

export const getProductById = (id: string) => {
  return products.find(product => product.id === id)
}

export const addProduct = (data: CreateProductDto): Product => {
  // data.id = 'johufeuhfeuf'
  const { categoryId, ...newData } = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
    hola: 'hello world' // como curiosidad return una data de type Product pero me deja pasar una propiedad que no existe
  }
  products.push(newData);

  return newData
}
// Acceder al tipado por indice Product['id']
export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {

  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    const prevData = products[index]
    products[index] = { ...prevData, ...changes };
  }

  return products[index]
}

export const deleteProduct = (id: string) => {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
  }
};

export const findProducts = (dto: FindProductDto): Product[] => {
  // code filter with mysql, mongodb, etc...
  // dto.color = 'red' // gracias a Readonly solo podemos leer o nos advierte que solo podemos leer.
  // dto.tags = []
  // dto.tags?.push(2)
  return products
}

import { faker } from '@faker-js/faker';
import { Product } from './product.model';
import { CreateProductDto } from './product.dto'

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

export const updateProduct = (id: string, changes: Product) => {

  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...changes };
  }
}

export const deleteProduct = (id: string) => {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
  }
};

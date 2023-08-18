import { Product } from './product.model';

export const products: Product[] = [];

export const getAllProducts = () => {
  return products;
}

export const getProductById = (id: string) => {
  return products.find(product => product.id === id)
}

export const addProduct = (data: Product) => {
  // data.id = 'johufeuhfeuf'
  products.push(data);
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


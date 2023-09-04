import { faker } from '@faker-js/faker';
import {
  addProduct,
  products,
  updateProduct,
  findProducts,
} from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    color: faker.color.human(),
    price: +faker.commerce.price(), // simbolo + transforma de string a number
    isNew: faker.datatype.boolean(),
    image: faker.image.url(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    tags: faker.helpers.arrayElements(['new', 'white', 'tshirt', 'clothes']),
    stock: faker.number.int({ min: 0, max: 100 }),
    categoryId: faker.string.uuid(),
  });
}

// console.log(products)
console.log(products[0]);
const product = products[0];
const productUpdated = updateProduct(product.id, {
  title: 'New title product',
  stock: 20,
});

console.log(productUpdated);

findProducts({
  title: 'Hello world',
  stock: 10,
  tags: ['new'],
});

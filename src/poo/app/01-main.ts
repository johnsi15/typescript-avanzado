import axios from 'axios';

import { Product } from './models/product.model';

(async () => {
  async function getProducts() {
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );

    // Otra forma de tipar seria el fetch:
    // const res = await axios.get(
    //   'https://api.escuelajs.co/api/v1/products'
    // );
    // const data = res.data as Product[];

    data.forEach((product) => console.log(product.title));

    return data;
  }

  const products = await getProducts();
  // console.log(products);
  console.log(products.map((product) => `${product.id} - ${product.title}`));
})();

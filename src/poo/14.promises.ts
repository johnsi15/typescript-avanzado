import axios from 'axios';

(async () => {
  function delay(ms: number) {
    return new Promise<string>((resolve) =>
      setTimeout(() => resolve('string'), ms)
    );
  }

  async function getProducts() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  const res = await delay(500);
  console.log(res);

  const products = await getProducts();
  console.log(products);
})();

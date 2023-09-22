import { Product } from './models/product.model'
import { ProductHttpService } from './services/product-http.service'
;(async () => {
  const productService = ProductHttpService.getInstance()

  console.log('--'.repeat(10))
  let products: Product[] | number
  let productId: Product['id']
  try {
    products = await productService.all
    if (typeof products === 'number') {
      console.log('Algo salio mal')
      return
    }

    productId = products[0].id
    console.log({ productId })
    console.log(products ? products?.length : 0)

    console.log(products ? products.map((item) => item.title) : '')

    try {
      await productService.update(productId, {
        title: 'New title',
        price: 1000,
      })
    } catch (error) {
      console.log(error)
    }

    console.log('--'.repeat(10))

    try {
      const product = await productService.getById(productId)
      console.log(product)
    } catch (error) {
      console.log(error)
    }
  } catch (error) {
    console.log(error)
  }
})()

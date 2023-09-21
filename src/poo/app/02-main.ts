import { ProductMemoryService } from './services/product-memory.service'

const productService = new ProductMemoryService()

productService.create({
  title: 'Producto 1',
  description: 'bla bla bla',
  price: 100,
  images: [],
  categoryId: '123243',
})

const { id: productId } = productService.all[0]

productService.update(productId, {
  title: 'Change name product',
})

const rta = productService.getById(productId)
console.log(rta)

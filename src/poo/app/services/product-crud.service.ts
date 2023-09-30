import { UpdateProductDto } from '../dtos/product.dto'
import { Product } from '../models/product.model'
// import { BaseHttpService } from './base-http.service'
import { ProductHttpService } from './product-generic-http'

export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products'
  private http = new ProductHttpService(this.url)

  async update(id: Product['id'], dto: UpdateProductDto) {
    this.http.otherRequest()
    return this.http.update(id, dto)
  }
}

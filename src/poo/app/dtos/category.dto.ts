import { IsDate, IsEnum, IsNotEmpty, IsUrl, Length, validateOrReject } from 'class-validator'
import { AccessType, Category } from '../models/category.model'

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(3, 255)
  name!: string

  @IsUrl()
  @IsNotEmpty()
  image!: string

  @IsDate()
  createdAt!: Date

  @IsDate()
  updatedAt!: Date

  @IsEnum(AccessType)
  access?: AccessType | undefined
}

;(async () => {
  try {
    const dto = new CreateCategoryDto()
    dto.name = 'test'
    dto.image = 'https://test.com'
    await validateOrReject(dto)
  } catch (error) {
    console.log(error)
  }
})()

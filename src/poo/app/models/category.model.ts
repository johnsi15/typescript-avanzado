export enum AccessType {
  PRIVATE = 'private',
  PUBLIC = 'public',
}

export interface Category {
  id: string
  name: string
  image: string
  createdAt: Date
  updatedAt: Date
  access?: AccessType
}

export interface IProduct {
  name: string
  description: string
  shortDescription: string
  sku: string // stock product quantity
  price: number
  images: [string]
  categoryId: string
  brandId: string
  tagId: [string]
  preOrder: boolean
  additionalInformation: string
  offerId?: string
  modyfierId: string | [string]
}

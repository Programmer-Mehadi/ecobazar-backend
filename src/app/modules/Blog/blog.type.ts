export interface IBlog {
  title: string
  description: string
  shortDescription: string
  image: string
  categoryId: [string]
  tagId: [string]
  modifyerId: [string]
  published: boolean
  userId: string
  comments?: [string] | []
}

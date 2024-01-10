import Category from "@src/app/modules/Category/category.model"
import { ICategoryCreate } from "./category.type"

const createCategoryToDB = async (data: ICategoryCreate) => {
  const newCategory = new Category(data)
  const savedCategory = await newCategory.save()
  return savedCategory
}

const getAllCategoryFromDB = async () => {
  const categories = await Category.find()
  return categories
}

const updateCategoryToDB = async (id: string, data: ICategoryCreate) => {
  const category = await Category.findByIdAndUpdate(id, data, { new: false })
  return category
}

const categoryService = {
  createCategoryToDB,
  getAllCategoryFromDB,
  updateCategoryToDB,
}

export default categoryService

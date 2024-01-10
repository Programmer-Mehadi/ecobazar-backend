import Brand from "@src/app/modules/Brand/brand.model"
import { IBrand } from "@src/app/modules/Brand/brand.type"

const createBrandToDB = async (data: IBrand) => {
  const newBrand = new Brand(data)
  const savedBrand = await newBrand.save()
  return savedBrand
}

const getAllBrandFromDB = async () => {
  const brands = await Brand.find()
  return brands
}

const updateBrandToDB = async (id: string, data: IBrand) => {
  const brand = await Brand.findByIdAndUpdate(id, data, { new: false })
  return brand
}

const BrandService = {
  createBrandToDB,
  getAllBrandFromDB,
  updateBrandToDB,
}

export default BrandService

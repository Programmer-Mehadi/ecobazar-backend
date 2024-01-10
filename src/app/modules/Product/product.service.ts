import Product from "@src/app/modules/Product/product.model"
import { IProduct } from "@src/app/modules/Product/product.type"

const createProductToDB = (data: IProduct) => {
  const newProduct = new Product(data)
  const savedProduct = newProduct.save()
  return savedProduct
}

const getSingleProductfromDB = async (id: string) => {
  return await Product.findById(id)
    .populate("categoryId", "name _id image")
    .populate("brandId", "name _id image")
    .populate("tagId", "name _id")
    .populate("modyfierId", "firstName lastName image _id")
    .exec()
}

const getAllProductFromDB = async () => {
  return await Product.find()
    .populate("categoryId", "name _id image")
    .populate("brandId", "name _id image")
    .populate("tagId", "name _id")
    .populate("modyfierId", "firstName lastName image _id")
    .exec()
}

const updateProductToDB = async (id: string, data: IProduct) => {
  const product = await Product.findByIdAndUpdate(id, data, { new: false })
  return product
}

const ProductService = {
  createProductToDB,
  getAllProductFromDB,
  updateProductToDB,
  getSingleProductfromDB,
}

export default ProductService

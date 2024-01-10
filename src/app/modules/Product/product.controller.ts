import ProductService from "@src/app/modules/Product/product.service"
import catchAsync from "@src/shared/catchAsync"
import sendResponse from "@src/shared/sendResponse"

const createProduct = catchAsync(async (req, res, next) => {
  const data = req.body
  data.modyfierId = [data.modyfierId]
  const result = await ProductService.createProductToDB(data)
  return sendResponse({
    res,
    data: {
      data: result || null,
    },
    message: result
      ? "Product created successfully!"
      : "Product cann't be created!",
    success: true,
    code: 200,
  })
})

const getSingleProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await ProductService.getSingleProductfromDB(id)
  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result ? "Product fetched successfully!" : "Product not found!",
    success: true,
    code: 200,
  })
})

const getAllProduct = catchAsync(async (req, res, next) => {
  const result = await ProductService.getAllProductFromDB()
  return sendResponse({
    res,
    data: {
      data: result || [],
    },
    message: result ? "Products fetched successfully!" : "Products not found!",
    success: true,
    code: 200,
  })
})

const updateProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params
  // TODO : do something with modyfierId
  const result = await ProductService.updateProductToDB(id, req.body)
  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result ? "Product updated successfully!" : "Product not found!",
    success: true,
    code: 200,
  })
})

const ProductController = {
  createProduct,
  getAllProduct,
  updateProduct,
  getSingleProduct,
}

export default ProductController

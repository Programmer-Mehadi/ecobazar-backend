import BrandService from "@src/app/modules/Brand/brand.service"
import catchAsync from "@src/shared/catchAsync"
import sendResponse from "@src/shared/sendResponse"

const createBrand = catchAsync(async (req, res, next) => {
  const result = await BrandService.createBrandToDB(req.body)
  return sendResponse({
    res,
    data: {
      data: result || null,
    },
    message: result
      ? "Brand created successfully!"
      : "Brand cann't be created!",
    success: true,
    code: 200,
  })
})

const getAllBrand = catchAsync(async (req, res, next) => {
  const result = await BrandService.getAllBrandFromDB()
  return sendResponse({
    res,
    data: {
      data: result || [],
    },
    message: result ? "Brand fetched successfully!" : "Brand not found!",
    success: true,
    code: 200,
  })
})

const updateBrand = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await BrandService.updateBrandToDB(id, req.body)
  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result ? "Brand updated successfully!" : "Brand not found!",
    success: true,
    code: 200,
  })
})

const BrandController = { createBrand, getAllBrand, updateBrand }

export default BrandController

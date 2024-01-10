import categoryService from "@src/app/modules/Category/category.service"
import catchAsync from "@src/shared/catchAsync"
import sendResponse from "@src/shared/sendResponse"

const createCategory = catchAsync(async (req, res, next) => {
  try {
    const data = req.body
    data.modyfierId = ["659e3a68fb240b1aa0843dbd"]
    const result = await categoryService.createCategoryToDB(data)
    return sendResponse({
      res,
      data: {
        data: result || {},
      },
      message: result
        ? "Category created successfully!"
        : "Category cann't be created!",
      success: result ? true : false,
      code: 200,
    })
  } catch (err: any) {
    if (err.code === 11000) {
      return sendResponse({
        res,
        data: {
          data: {},
        },
        message: "Category already exists!",
        success: false,
        code: 400,
      })
    }
    return sendResponse({
      res,
      data: {
        data: {},
      },
      message: err.message,
      success: false,
      code: 400,
    })
  }
})

const getAllCategory = catchAsync(async (req, res, next) => {
  const result = await categoryService.getAllCategoryFromDB()
  return sendResponse({
    res,
    data: {
      data: result || [],
    },
    message: result.length
      ? "Category fetched successfully!"
      : "No Category found!",
    success: true,
    code: 200,
  })
})

const updateCategory = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await categoryService.updateCategoryToDB(id, req.body)
  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result ? "Category updated successfully!" : "Category not found!",
    success: true,
    code: 200,
  })
})

const CategoryController = { createCategory, getAllCategory, updateCategory }

export default CategoryController

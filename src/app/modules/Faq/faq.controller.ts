import FaqService from "@src/app/modules/Faq/faq.service"
import catchAsync from "@src/shared/catchAsync"
import sendResponse from "@src/shared/sendResponse"

const createFaq = catchAsync(async (req: any, res, next) => {
  const data = req.body
  const result = await FaqService.createFaqToDB(data)
  return sendResponse({
    res,
    data: {
      data: result || null,
    },
    message: result ? "FAQ created successfully!" : "FAQ cann't be created!",
    success: true,
    code: 200,
  })
})

const getAllFaqs = catchAsync(async (req, res, next) => {
  const result = await FaqService.getAllFaqs()
  return sendResponse({
    res,
    data: {
      data: result || null,
    },
    message: result ? "FAQ fetched successfully!" : "FAQ not found!",
    success: true,
    code: 200,
  })
})

const getVisibleFaqs = catchAsync(async (req, res, next) => {
  const result = await FaqService.getVisibleFaqs()
  return sendResponse({
    res,
    data: {
      data: result || null,
    },
    message: result ? "FAQ fetched successfully!" : "FAQ not found!",
    success: true,
    code: 200,
  })
})

const updateFaq = catchAsync(async (req: any, res, next) => {
  const { id } = req.params
  const data = req.body
  const result = await FaqService.updateFaqToDB(id, data)
  return sendResponse({
    res,
    data: {
      data: result || null || {},
    },
    message: result ? "FAQ updated successfully!" : "FAQ cann't be updated!",
    success: true,
    code: 200,
  })
})

const deleteFaq = catchAsync(async (req: any, res, next) => {
  const { id } = req.params
  const result = await FaqService.deleteFaqFromDB(id)
  return sendResponse({
    res,
    data: {
      data: result || null,
    },
    message: result
      ? "FAQ deleted successfully!"
      : "No FAQ found, can't be deleted!",
    success: true,
    code: 200,
  })
})

const FaqController = {
  createFaq,
  getAllFaqs,
  getVisibleFaqs,
  updateFaq,
  deleteFaq,
}

export default FaqController

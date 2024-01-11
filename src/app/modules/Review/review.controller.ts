import ReviewService from "@src/app/modules/Review/review.service"
import catchAsync from "@src/shared/catchAsync"
import sendResponse from "@src/shared/sendResponse"

const createReview = catchAsync(async (req: any, res, next) => {
  // TODO: remove static id
  const _id = req?.user?._id || "659e3a68fb240b1aa0843dbd"
  const result = await ReviewService.createReviewToDB({
    ...req.body,
    userId: _id,
  })
  return sendResponse({
    res,
    data: {
      data: result || null,
    },
    message: result
      ? "Review created successfully!"
      : "Review cann't be created!",
    success: true,
    code: 200,
  })
})

const getSingleReview = catchAsync(async (req: any, res, next) => {
  const { id } = req.params
  const result = await ReviewService.getSingleReviewFromDB(id)
  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result ? "Review fetched successfully!" : "Review not found!",
    success: true,
    code: 200,
  })
})

const getAllReviewByUser = catchAsync(async (req: any, res, next) => {
  // TODO: remove static id
  const _id = req?.user?._id || "659e3a68fb240b1aa0843dbd"

  const result = await ReviewService.getAllReviewByUserToDB(_id)
  return sendResponse({
    res,
    data: {
      data: result || [],
    },
    message: result ? "Review fetched successfully!" : "No Review found!",
    success: true,
    code: 200,
  })
})

const deleteReview = catchAsync(async (req: any, res, next) => {
  const { id } = req.params
  // TODO: remove static id
  const _id = req?.user?._id || "659e3a68fb240b1aa0843dbd"
  const result = await ReviewService.deleteReviewFromDB(id, _id)
  return sendResponse({
    res,
    data: {
      data: result || null || {},
    },
    message: result ? "Review deleted successfully!" : "Review not found!",
    success: true,
    code: 200,
  })
})

const updateReview = catchAsync(async (req: any, res, next) => {
  const { id } = req.params
  // TODO: remove static id
  const _id = req?.user?._id || "659e3a68fb240b1aa0843dbd"
  const result = await ReviewService.updateReviewToDB(id, _id, req.body)
  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result ? "Review updated successfully!" : "Review not found!",
    success: true,
    code: 200,
  })
})

const ReviewController = {
  createReview,
  getAllReviewByUser,
  deleteReview,
  updateReview,
  getSingleReview,
}

export default ReviewController

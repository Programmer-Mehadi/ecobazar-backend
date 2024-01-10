import WishListService from "@src/app/modules/WishList/wishlist.service"
import catchAsync from "@src/shared/catchAsync"
import sendResponse from "@src/shared/sendResponse"

const createWishList = catchAsync(async (req: any, res, next) => {
  const userId = req?.user?._id || "659e3a68fb240b1aa0843dbd"

  const result = await WishListService.createWishListToDB({
    ...req.body,
    userId,
  })
  return sendResponse({
    res,
    data: {
      data: result || null || {},
    },
    message: result
      ? "WishList added successfully!"
      : "WishList cann't be added!",
    success: true,
    code: 200,
  })
})

const getAllWishList = catchAsync(async (req: any, res, next) => {
  const userId = req?.user?._id || "659e3a68fb240b1aa0843dbd"
  const result = await WishListService.getAllWishListFromDB(userId)
  return sendResponse({
    res,
    data: {
      data: result || null || {},
    },
    message: result ? "WishList fetched successfully!" : "WishList not found!",
    success: true,
    code: 200,
  })
})

const removeWishList = catchAsync(async (req: any, res, next) => {
  const { id } = req.params
  const userId = req?.user?._id || "659e3a68fb240b1aa0843dbd"
  const result = await WishListService.removeWishListToDB(userId, id)
  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result ? "WishList removed successfully!" : "WishList not found!",
    success: true,
    code: 200,
  })
})

const WishListController = { createWishList, getAllWishList, removeWishList }

export default WishListController

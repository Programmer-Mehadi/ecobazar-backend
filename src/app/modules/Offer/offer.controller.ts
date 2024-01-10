import OfferService from "@src/app/modules/Offer/offer.service"
import catchAsync from "@src/shared/catchAsync"
import sendResponse from "@src/shared/sendResponse"

const createOffer = catchAsync(async (req, res, next) => {
  const result = await OfferService.createOfferToDB(req.body)
  return sendResponse({
    res,
    data: {
      data: result || null,
    },
    message: result
      ? "Offer created successfully!"
      : "Offer cann't be created!",
    success: true,
    code: 200,
  })
})

const getAllOffer = catchAsync(async (req, res, next) => {
  const result = await OfferService.getAllOfferFromDB()
  return sendResponse({
    res,
    data: {
      data: result || [],
    },
    message: result ? "Offer fetched successfully!" : "Offer not found!",
    success: true,
    code: 200,
  })
})

const updateOffer = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await OfferService.updateOfferToDB(id, req.body)
  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result ? "Offer updated successfully!" : "Offer not found!",
    success: true,
    code: 200,
  })
})

const OfferController = { createOffer, getAllOffer, updateOffer }

export default OfferController

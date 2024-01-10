import TagService from "@src/app/modules/Tag/tag.service"
import catchAsync from "@src/shared/catchAsync"
import sendResponse from "@src/shared/sendResponse"

const createTag = catchAsync(async (req, res, next) => {
  const result = await TagService.createTagToDB(req.body)
  return sendResponse({
    res,
    data: {
      data: result || null,
    },
    message: result ? "Tag created successfully!" : "Tag cann't be created!",
    success: true,
    code: 200,
  })
})

const getAllTag = catchAsync(async (req, res, next) => {
  const result = await TagService.getAllTagFromDB()
  return sendResponse({
    res,
    data: {
      data: result || [],
    },
    message: result ? "Tag fetched successfully!" : "Tag not found!",
    success: true,
    code: 200,
  })
})

const updateTag = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await TagService.updateTagToDB(id, req.body)
  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result ? "Tag updated successfully!" : "Tag not found!",
    success: true,
    code: 200,
  })
})

const TagController = { createTag, getAllTag, updateTag }

export default TagController

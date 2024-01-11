import CommentService from "@src/app/modules/Comment/comment.service"
import catchAsync from "@src/shared/catchAsync"
import sendResponse from "@src/shared/sendResponse"

const createComment = catchAsync(async (req: any, res: any, next) => {
  const data = req.body
  const result = await CommentService.createCommentToDB(data)
  return sendResponse({
    res,
    data: {
      data: result || null || {},
    },
    message: result
      ? "Comment created successfully!"
      : "Comment cann't be created!",
    success: true,
    code: 200,
  })
})

const getAllComment = catchAsync(async (req: any, res: any, next) => {
  const result = await CommentService.getAllCommentFromDB()
  return sendResponse({
    res,
    data: {
      data: result || [],
    },
    message: result
      ? "Comment fetched successfully!"
      : "Any Comment not found!",
    success: true,
    code: 200,
  })
})

const getSingleComment = catchAsync(async (req: any, res: any, next) => {
  const { id } = req.params
  const result = await CommentService.getSingleCommentFromDB(id)
  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result ? "Comment fetched successfully!" : "Comment not found!",
    success: true,
    code: 200,
  })
})

const updateComment = catchAsync(async (req: any, res: any, next) => {
  const { id } = req.params
  const result = await CommentService.updateCommentToDB(id, req.body)
  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result
      ? "Comment updated successfully!"
      : "Comment not found or cann't be updated!",
    success: true,
    code: 200,
  })
})

const deleteComment = catchAsync(async (req: any, res: any, next) => {
  const { id } = req.params
  const blogId = req.body.blogId
  const result = await CommentService.deleteCommentFromDB(id, blogId)
  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result
      ? "Comment deleted successfully!"
      : "Comment not found or cann't be deleted!",
    success: true,
    code: 200,
  })
})
const CommentController = {
  createComment,
  getAllComment,
  updateComment,
  deleteComment,
  getSingleComment,
}

export default CommentController

import BlogService from "@src/app/modules/Blog/blog.service"
import catchAsync from "@src/shared/catchAsync"
import sendResponse from "@src/shared/sendResponse"

const createBlog = catchAsync(async (req: any, res, next) => {
  const data = {
    ...req.body,
    // TODO: remove static id
    userId: req?.user?._id || "659e3a68fb240b1aa0843dbd",
    modifyerId: [req?.user?._id || "659e3a68fb240b1aa0843dbd"],
  }
  data.comments = []
  const result = await BlogService.createBlogToDB(data)
  return sendResponse({
    res,
    data: {
      data: result || null,
    },
    message: result ? "Blog created successfully!" : "Blog cann't be created!",
    success: true,
    code: 200,
  })
})

const getSingleBlog = catchAsync(async (req: any, res, next) => {
  const { id } = req.params
  const result = await BlogService.getSingleBlogDetailsFromDB(id)
  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result ? "Blog fetched successfully!" : "Blog not found!",
    success: true,
    code: 200,
  })
})

const getAllBlogs = catchAsync(async (req, res, next) => {
  const result = await BlogService.getAllBlogsFromDB()
  return sendResponse({
    res,
    data: {
      data: result || [],
    },
    message: result ? "Blog fetched successfully!" : "Blog not found!",
    success: true,
    code: 200,
  })
})

const updateBlog = catchAsync(async (req: any, res, next) => {
  const { id } = req.params
  const data = req.body
  data.userId = req?.user?._id || "659e3a68fb240b1aa0843dbb"
  const result = await BlogService.updateBlogToDB(id, data)
  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result ? "Blog updated successfully!" : "Blog not found!",
    success: true,
    code: 200,
  })
})

const deleteBlog = catchAsync(async (req: any, res, next) => {
  const { id } = req.params
  const result = await BlogService.deleteBlogFromDB(id)

  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result ? "Blog deleted successfully!" : "Blog not found!",
    success: true,
    code: 200,
  })
})

const BlogController = {
  createBlog,
  getSingleBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
}

export default BlogController

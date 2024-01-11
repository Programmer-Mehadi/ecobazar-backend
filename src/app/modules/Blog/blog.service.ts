import Blog from "@src/app/modules/Blog/blog.model"
import { IBlog } from "@src/app/modules/Blog/blog.type"

const createBlogToDB = (data: IBlog) => {
  const blog = new Blog(data)
  return blog.save()
}

const getSingleBlogDetailsFromDB = async (id: string) => {
  return Blog.findById(id)
    .populate("categoryId", "name _id image")
    .populate("tagId", "name _id")
    .populate("modifyerId", "firstName lastName image _id")
    .populate("userId", "firstName lastName image _id")
    .populate({
      path: "comments",
      populate: {
        path: "userId",
        model: "User",
        select: "firstName lastName image _id",
      },
    })
    .exec()
}

const getAllBlogsFromDB = async () => {
  return Blog.find()
    .populate("categoryId", "name _id image")
    .populate("tagId", "name _id")
    .populate("modifyerId", "firstName lastName image _id")
    .populate("userId", "firstName lastName image _id")
    .populate({
      path: "comments",
      populate: {
        path: "userId",
        model: "User",
        select: "firstName lastName image _id",
      },
    })
    .exec()
}

const updateBlogToDB = (id: string, data: IBlog) => {
  return Blog.findByIdAndUpdate(
    id,
    {
      $set: {
        title: data?.title,
        description: data?.description,
        shortDescription: data?.shortDescription,
        image: data?.image,
        categoryId: data?.categoryId,
        tagId: data?.tagId,
        published: data?.published,
      },
      $push: { modifyerId: data?.userId },
    },
    { new: true }
  )
}

const deleteBlogFromDB = async (id: string) => {
  const blog = await Blog.findByIdAndDelete(id)
  return blog
}

const BlogService = {
  createBlogToDB,
  getSingleBlogDetailsFromDB,
  getAllBlogsFromDB,
  updateBlogToDB,
  deleteBlogFromDB,
}

export default BlogService

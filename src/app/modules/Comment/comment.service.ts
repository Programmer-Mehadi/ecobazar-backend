import Comment from "@src/app/modules/Comment/comment.model"
import Blog from "@src/app/modules/Blog/blog.model"
import { IComment } from "@src/app/modules/Comment/comment.type"

const createCommentToDB = async (data: any) => {
  const comment = await Comment.create(data)
  if (comment) {
    const savedtoBlog = await Blog.findByIdAndUpdate(data.blogId, {
      $push: {
        comments: comment._id,
      },
    })
    if (savedtoBlog) return comment
  } else {
    return null
  }
}

const getSingleCommentFromDB = async (id: string) => {
  const comment = await Comment.findById(id)
  return comment
}

const getAllCommentFromDB = async () => {
  const comments = await Comment.find()
    .populate("userId", "firstName lastName image _id")
    .populate("blogId", "title _id image")

  return comments
}

const updateCommentToDB = async (id: string, data: IComment) => {
  const comment = await Comment.findByIdAndUpdate(id, data, { new: true })
  return comment
}

const deleteCommentFromDB = async (id: string, blogId: string) => {
  const savedtoBlog = await Blog.findByIdAndUpdate(blogId, {
    $pull: {
      comments: id,
    },
  })
  if (savedtoBlog) {
    const comment = await Comment.findByIdAndDelete(id)
    return comment
  } else {
    const comment = await Comment.findByIdAndDelete(id)
    return comment
  }
}

const CommentService = {
  createCommentToDB,
  getAllCommentFromDB,
  updateCommentToDB,
  deleteCommentFromDB,
  getSingleCommentFromDB,
}

export default CommentService

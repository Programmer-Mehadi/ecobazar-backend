import mongoose from "mongoose"

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    categoryId: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      trim: true,
      ref: "Category",
    },
    tagId: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      trim: true,
      ref: "Tag",
    },
    modifyerId: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      trim: true,
      ref: "User",
    },
    published: {
      type: Boolean,
      required: true,
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "User",
    },
    comments: {
      type: [mongoose.Schema.Types.ObjectId],
      required: false,
      trim: true,
      ref: "Comment",
    },
  },
  {
    timestamps: true,
  }
)

const Blog = mongoose.model("Blog", blogSchema)

export default Blog

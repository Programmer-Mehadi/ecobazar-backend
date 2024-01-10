import mongoose from "mongoose"

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  categoryId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    trim: true,
    ref: "Category",
  },
})

const Tag = mongoose.model("Tag", tagSchema)

export default Tag

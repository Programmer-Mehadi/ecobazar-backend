import mongoose from "mongoose"

const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
  answer: {
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
  invisible: {
    type: Boolean,
    required: true,
    trim: true,
  },
})

const Faq = mongoose.model("Faq", faqSchema)

export default Faq

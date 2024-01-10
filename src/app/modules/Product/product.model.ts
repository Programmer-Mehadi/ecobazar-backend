import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
  {
    name: {
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
    sku: {
      type: Number,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    images: {
      type: [String],
      required: true,
      trim: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "Category",
    },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "Brand",
    },
    tagId: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      trim: true,
      ref: "Tag",
    },
    preOrder: {
      type: Boolean,
      required: true,
      trim: true,
    },
    additionalInformation: {
      type: String,
      required: true,
      trim: true,
    },
    offerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      trim: true,
      ref: "Offer",
    },
    modyfierId: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      trim: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model("Product", productSchema)

export default Product

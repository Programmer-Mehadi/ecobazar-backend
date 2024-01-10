import mongoose from "mongoose"

const wishlistSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "User",
    },
    productList: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      trim: true,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
)

const WishList = mongoose.model("WishList", wishlistSchema)

export default WishList

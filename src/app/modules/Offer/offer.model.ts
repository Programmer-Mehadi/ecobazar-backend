import mongoose from "mongoose"

const offerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    percentage: {
      type: Number,
      required: true,
      trim: true,
    },
    money: {
      type: Number,
      required: true,
      trim: true,
    },
    startDate: {
      type: Date,
      required: true,
      trim: true,
    },
    endDate: {
      type: Date,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

const Offer = mongoose.model("Offer", offerSchema)

export default Offer

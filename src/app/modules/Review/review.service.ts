import Review from "@src/app/modules/Review/review.model"
import { IReview } from "@src/app/modules/Review/review.type"

const createReviewToDB = async (data: IReview) => {
  const review = await Review.findOne({
    productId: data.productId,
    userId: data.userId,
  })
  if (review) {
    throw new Error("Review already exists!")
  } else {
    const result = await Review.create(data)
    return result
  }
}

const getSingleReviewFromDB = async (id: string) => {
  // TODO: get user id and send data
  const result = await Review.findById(id)
  return result
}

const getAllReviewByUserToDB = (id: string) => {
  return Review.find({ userId: id })
}

const deleteReviewFromDB = async (id: string, userId: string) => {
  const result = await Review.findOneAndDelete({ _id: id, userId: userId })
  return result
}

const updateReviewToDB = async (id: string, userId: string, data: IReview) => {
  const result = await Review.findOneAndUpdate(
    { _id: id, userId: userId },
    data,
    { new: true }
  )
  return result
}
const ReviewService = {
  createReviewToDB,
  getAllReviewByUserToDB,
  deleteReviewFromDB,
  updateReviewToDB,
  getSingleReviewFromDB,
}

export default ReviewService

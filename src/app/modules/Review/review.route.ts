import validateRequest from "@src/app/middlewares/validateRequets"
import ReviewController from "@src/app/modules/Review/review.controller"
import ReviewValidation from "@src/app/modules/Review/review.validation"
import express from "express"

const router = express.Router()

router.post(
  "/",
  validateRequest(ReviewValidation.create),
  ReviewController.createReview
)

router.get("/get-all-by-user", ReviewController.getAllReviewByUser)

router.get("/:id", ReviewController.getSingleReview)

router.delete("/:id", ReviewController.deleteReview)

router.patch(
  "/:id",
  validateRequest(ReviewValidation.create),
  ReviewController.updateReview
)

const ReviewRoutes = router
export default ReviewRoutes

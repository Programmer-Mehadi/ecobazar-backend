import validateRequest from "@src/app/middlewares/validateRequets"
import CommentController from "@src/app/modules/Comment/comment.controller"
import CommentValidation from "@src/app/modules/Comment/comment.validation"
import express from "express"

const router = express.Router()

router.post(
  "/",
  validateRequest(CommentValidation.create),
  CommentController.createComment
)

router.get("/", CommentController.getAllComment)

router.get("/:id", CommentController.getSingleComment)

// update comment data
router.patch(
  "/:id",
  validateRequest(CommentValidation.create),
  CommentController.updateComment
)

router.delete("/:id", CommentController.deleteComment)

const CommentRoutes = router
export default CommentRoutes

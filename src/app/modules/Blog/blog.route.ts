import validateRequest from "@src/app/middlewares/validateRequets"
import BlogController from "@src/app/modules/Blog/blog.controller"
import BlogValidation from "@src/app/modules/Blog/blog.validation"
import express from "express"

const router = express.Router()

router.post(
  "/",
  validateRequest(BlogValidation.create),
  BlogController.createBlog
)

router.get("/:id", BlogController.getSingleBlog)

router.get("/", BlogController.getAllBlogs)

router.patch(
  "/:id",
  validateRequest(BlogValidation.update),
  BlogController.updateBlog
)

router.delete("/:id", BlogController.deleteBlog)

const BlogRoutes = router
export default BlogRoutes

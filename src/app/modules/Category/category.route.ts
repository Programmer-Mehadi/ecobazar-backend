import validateRequest from "@src/app/middlewares/validateRequets"
import CategoryController from "@src/app/modules/Category/category.controller"
import { CategoryValidation } from "@src/app/modules/Category/category.validation"
import express from "express"

const router = express.Router()

router.post(
  "/",
  validateRequest(CategoryValidation.create),
  CategoryController.createCategory
)

router.get("/", CategoryController.getAllCategory)

router.patch(
  "/:id",
  validateRequest(CategoryValidation.create),
  CategoryController.updateCategory
)

const CategoryRoutes = router

export default CategoryRoutes

import validateRequest from "@src/app/middlewares/validateRequets"
import BrandController from "@src/app/modules/Brand/brand.controller"
import BrandValidation from "@src/app/modules/Brand/brand.validation"

import express from "express"

const router = express.Router()

router.post(
  "/",
  validateRequest(BrandValidation.create),
  BrandController.createBrand
)
router.get("/", BrandController.getAllBrand)
router.patch(
  "/:id",
  validateRequest(BrandValidation.create),
  BrandController.updateBrand
)

const BrandRoutes = router
export default BrandRoutes

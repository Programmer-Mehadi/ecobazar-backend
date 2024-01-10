import validateRequest from "@src/app/middlewares/validateRequets"
import ProductController from "@src/app/modules/Product/product.controller"
import ProductValidation from "@src/app/modules/Product/product.validation"
import express from "express"

const router = express.Router()

router.post(
  "/",
  validateRequest(ProductValidation.create),
  ProductController.createProduct
)

router.get("/:id", ProductController.getSingleProduct)
router.get("/", ProductController.getAllProduct)

router.patch(
  "/:id",
  validateRequest(ProductValidation.update),
  ProductController.updateProduct
)
const ProductRoutes = router

export default ProductRoutes

import validateRequest from "@src/app/middlewares/validateRequets"
import WishListController from "@src/app/modules/WishList/wishlist.controller"
import WishListValidation from "@src/app/modules/WishList/wishlist.validation"

import express from "express"

const router = express.Router()

router.post(
  "/",
  validateRequest(WishListValidation.create),
  WishListController.createWishList
)
router.get("/", WishListController.getAllWishList)
router.delete("/:id", WishListController.removeWishList)

const WishListRoutes = router
export default WishListRoutes

import validateRequest from "@src/app/middlewares/validateRequets"
import OfferController from "@src/app/modules/Offer/offer.controller"
import OfferValidation from "@src/app/modules/Offer/offer.validation"

import express from "express"

const router = express.Router()

router.post(
  "/",
  validateRequest(OfferValidation.create),
  OfferController.createOffer
)
router.get("/", OfferController.getAllOffer)
router.patch(
  "/:id",
  validateRequest(OfferValidation.create),
  OfferController.updateOffer
)

const OfferRoutes = router
export default OfferRoutes

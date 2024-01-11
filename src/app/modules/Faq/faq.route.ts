import express from "express"
import FaqController from "./faq.controller"
import validateRequest from "@src/app/middlewares/validateRequets"
import FaqValidation from "@src/app/modules/Faq/faq.validation"

const router = express.Router()

router.post("/", validateRequest(FaqValidation.create), FaqController.createFaq)
router.get("/", FaqController.getAllFaqs)
router.get("/visible", FaqController.getVisibleFaqs)
router.patch(
  "/:id",
  validateRequest(FaqValidation.create),
  FaqController.updateFaq
)
router.delete("/:id", FaqController.deleteFaq)

const FaqRoutes = router
export default FaqRoutes

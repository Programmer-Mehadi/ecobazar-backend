import validateRequest from "@src/app/middlewares/validateRequets"
import TagController from "@src/app/modules/Tag/tag.controller"
import TagValidation from "@src/app/modules/Tag/tag.validation"
import express from "express"

const router = express.Router()

router.post("/", validateRequest(TagValidation.create), TagController.createTag)
router.get("/", TagController.getAllTag)
router.patch(
  "/:id",
  validateRequest(TagValidation.create),
  TagController.updateTag
)

const TagRoutes = router
export default TagRoutes

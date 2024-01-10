import express from "express"
import { UserValidation } from "./user.validation"
import validateRequest from "../../middlewares/validateRequets"
import UserController from "./user.controller"

const router = express.Router()

router.post(
  "/",
  validateRequest(UserValidation.create),
  UserController.insertUser
)

router.get("/", UserController.getAllUser)

router.get("/:id", UserController.getSingleUser)

router.patch("/:id", UserController.updateUser)

const UserRoutes = router

export default UserRoutes

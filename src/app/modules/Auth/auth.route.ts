import validateRequest from "@src/app/middlewares/validateRequets"
import { AuthController } from "@src/app/modules/Auth/auth.controller"
import { AuthValidate } from "@src/app/modules/Auth/auth.validation"
import express from "express"

const router = express.Router()

router.post(
  "/login",
  validateRequest(AuthValidate.login),
  AuthController.loginUser
)

router.get("/verify", AuthController.checkVerify)

const AuthRoutes = router
export default AuthRoutes

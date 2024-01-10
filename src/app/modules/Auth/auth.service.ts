import { ILogin } from "@src/app/modules/Auth/auth.type"
import User from "@src/app/modules/User/user.model"
import { jwtHelpers } from "@src/helpers/jwt"
import { comparePassword } from "@src/helpers/passwordbcrypt"
import config from "@src/config/index"
const loginToDB = async (payload: ILogin) => {
  const user = await User.findOne({ email: payload.email })

  if (!user) {
    return {
      user: null,
      message: "User not found!",
    }
  }
  const checkPassword = await comparePassword(payload.password, user.password)
  if (!checkPassword) {
    return {
      user,
      error: true,
      message: "Wrong password!",
    }
  }
  return {
    user,
    message: "User found successfully!",
  }
}

const checkVerifyToDB = async (token: string) => {
  const checkTokenValidate = await jwtHelpers.verifyToken(
    token,
    config.JWT_SECRET
  )
  return checkTokenValidate
}

export const AuthService = {
  loginToDB,
  checkVerifyToDB,
}

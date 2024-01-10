import { AuthService } from "@src/app/modules/Auth/auth.service"
import catchAsync from "@src/shared/catchAsync"
import sendResponse from "@src/shared/sendResponse"
import config from "@src/config/index"
import { jwtHelpers } from "@src/helpers/jwt"
import { ILoginUser } from "@src/app/modules/Auth/auth.type"
import CustomError from "@src/errors/CustomError"

const loginUser = catchAsync(async (req, res, next) => {
  const result = await AuthService.loginToDB(req.body)

  if (!result.user) {
    return sendResponse({
      res,
      data: {
        data: {},
      },
      message: "No user found!",
      success: false,
      code: 400,
    })
  } else {
    if (result.error) {
      return sendResponse({
        res,
        data: {
          data: {},
        },
        message: result.message,
        success: false,
        code: 400,
      })
    } else {
      const token = jwtHelpers.createToken(
        {
          firstName: result.user.firstName,
          lastName: result.user.lastName,
          email: result.user.email,
          _id: result.user._id,
          role: result.user.role,
        },
        config.JWT_SECRET,
        "30d"
      )
      const userData: ILoginUser = {
        firstName: result.user.firstName,
        lastName: result.user.lastName,
        email: result.user.email,
        phoneNumber: result.user.phoneNumber,
        image: result.user.image,
        role: result.user.role,
        _id: result.user._id ? result.user._id.toString() : "",
        token,
      }

      return sendResponse({
        res,
        data: {
          data: userData || {},
        },
        message: "User logged in successfully!",
        success: true,
        code: 200,
      })
    }
  }
})

const checkVerify = catchAsync(async (req, res, next) => {
  let { authorization: token }: any = req.headers
  token = token.split(" ")[1]
  if (!token) {
    const newError = new CustomError("Token not found!", 400, {})
    return next(newError)
  }
  const result = await AuthService.checkVerifyToDB(token)

  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result ? "User verified successfully!" : "User not found!",
    success: true,
    code: 200,
  })
})

export const AuthController = { loginUser, checkVerify }

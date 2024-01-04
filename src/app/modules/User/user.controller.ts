import CustomError from "../../../errors/CustomError"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import UserService from "./user.service"

const insertUser = catchAsync(async (req, res, next) => {
  try {
    const result = await UserService.createToDB(req.body)
    return sendResponse({
      res,
      data: {
        data: result,
      },
      message: "User created successfully!",
      success: true,
      code: 201,
    })
  } catch (error: any) {
    if (error.code === 11000) {
      const newError = new CustomError("Email already exists!", 400)
      next(newError)
    } else {
      next(error)
    }
  }
})

const UserController = {
  insertUser,
}

export default UserController

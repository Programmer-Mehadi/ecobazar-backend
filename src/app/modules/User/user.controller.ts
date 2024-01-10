import { hashPassword } from "@src/helpers/passwordbcrypt"
import CustomError from "../../../errors/CustomError"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import UserService from "./user.service"

const insertUser = catchAsync(async (req, res, next) => {
  try {
    const userData = req.body
    userData.password = await hashPassword(userData.password)
    const result = await UserService.createToDB(userData)

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
      // error key value loop
      for (const key in error.keyValue) {
        const newError = new CustomError(
          `${key} already exists!`,
          400,
          error.keyValue
        )
        next(newError)
      }
    } else {
      next(error)
    }
  }
})

const getAllUser = catchAsync(async (req, res, next) => {
  const result = await UserService.getAllUserToDB()
  return sendResponse({
    res,
    data: {
      data: result || [],
    },
    message: "User fetched successfully!",
    success: true,
    code: 200,
  })
})

const getSingleUser = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await UserService.getSingleUserToDB(id)
  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result ? "User fetched successfully!" : "User not found!",
    success: true,
    code: 200,
  })
})

const updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await UserService.updateUserToDB(id, req.body)
  return sendResponse({
    res,
    data: {
      data: result || {},
    },
    message: result ? "User updated successfully!" : "User not found!",
    success: true,
    code: 200,
  })
})

const UserController = {
  insertUser,
  getAllUser,
  getSingleUser,
  updateUser,
}

export default UserController

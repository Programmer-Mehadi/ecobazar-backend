// middleware/errorHandler.js

import CustomError from "../../errors/CustomError"
import { Request, Response, NextFunction } from "express"
import { Error } from "mongoose"
import { ZodError } from "zod"
import handleValidationError from "../../errors/handleValidationError"

const errorHandler = (
  err: Error | CustomError | ZodError | any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  next: NextFunction
) => {
  // custom error handling
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
      data: err.data,
    })
  }
  // custom error handling
  if (err instanceof ZodError) {
    return res.status(err.issues[0].code as unknown as number).json({
      success: false,
      error: err.message,
    })
  }

  // Mongoose validation error handling
  if (err?.name === "ValidationError") {
    const { errors, message } = handleValidationError(err)
    return res.status(400).json({ success: false, errors, message })
  }

  // Mongoose cast error handling
  if (err?.name === "CastError") {
    return res.status(400).json({
      success: false,
      error: "Invalid ID format",
    })
  }

  // duplicate error handle
  if (err?.code === 11000 || err?.codeName === "DuplicateKey") {
    return res.status(400).json({
      success: false,
      error: `Duplicate key value "${Object.values(
        err.keyValue
      )}" already exists`,
      data: err.keyValue,
    })
  }

  // General API error handling

  return res.status(500).json({
    success: false,
    message: err?.message || "Internal Server Error",
    error: err?.message || "Internal Server Error",
  })
}
export default errorHandler

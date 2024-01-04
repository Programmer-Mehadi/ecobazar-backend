// middleware/zodValidation.js

import { NextFunction, Request, Response } from "express"
import { ZodError } from "zod"

const zodValidationHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    const errors = err.errors.map((error) => ({
      message: error.message,
      field: error.path.join("."),
    }))
    return res.status(400).json({
      success: false,
      errors,
    })
  }
  next(err)
}

export default zodValidationHandler

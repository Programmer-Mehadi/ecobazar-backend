import { NextFunction, Response } from "express"
import httpStatus from "http-status"
import { Secret } from "jsonwebtoken"

import CustomError from "@src/errors/CustomError"

import config from "@src/config/index"
import { jwtHelpers } from "@src/helpers/jwt"

const auth =
  (...requiredRoles: string[]) =>
  async (req: any, res: Response, next: NextFunction) => {
    try {
      //get authorization token

      let token = req.headers.authorization
      token = token.split(" ")[1]
      if (!token) {
        const newError = new CustomError(
          "You are not authorized",
          httpStatus.UNAUTHORIZED,
          {}
        )
        return next(newError)
      }
      // verify token
      let verifiedUser = {
        role: "",
      }

      verifiedUser = jwtHelpers.verifyToken(
        token,
        config.JWT_SECRET as Secret
      ) as any

      if (!verifiedUser) {
        const newError = new CustomError(
          "You are not authorized",
          httpStatus.UNAUTHORIZED,
          {}
        )
        return next(newError)
      }

      req.user = verifiedUser

      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        const newError = new CustomError("Forbidden", httpStatus.FORBIDDEN, {})
        return next(newError)
      }
      next()
    } catch (error) {
      next(error)
    }
  }

export default auth

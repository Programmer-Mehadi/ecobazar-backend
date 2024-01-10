import { z } from "zod"

const login = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
      })
      .email(),
    password: z
      .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
      })
      .min(6, { message: "Password must be at least 6 characters" })
      .max(250, { message: "Password must be less than 250 characters" }),
  }),
})

export const AuthValidate = { login }

// zod validation

import { UserRoles } from "@src/enums/userRoles"
import { z } from "zod"

const create = z.object({
  body: z.object({
    firstName: z
      .string({
        required_error: "First name is required",
        invalid_type_error: "First name must be a string",
      })
      .min(3, { message: "First name must be at least 3 characters" })
      .max(250, { message: "First name must be less than 250 characters" }),
    lastName: z
      .string({
        required_error: "Last name is required",
        invalid_type_error: "Last name must be a string",
      })
      .min(3, { message: "First name must be at least 3 characters" })
      .max(250, { message: "First name must be less than 250 characters" }),
    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
      })
      .email(),
    phoneNumber: z.string({
      required_error: "Phone number is required",
      invalid_type_error: "Phone number must be a string",
    }),
    image: z.string({
      required_error: "Image is required",
      invalid_type_error: "Image must be a string",
    }),
    password: z
      .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
      })
      .min(6, { message: "Password must be at least 6 characters" })
      .max(150, { message: "Password must be less than 150 characters" }),
    role: z.enum(
      [
        UserRoles.ADMIN,
        UserRoles.EDITOR,
        UserRoles.AUTHOR,
        UserRoles.CONTRIBUTOR,
        UserRoles.CUSTOMER,
      ],
      {
        required_error: "Role is required",
        invalid_type_error:
          "Role must be a string and one of the following: admin, editor, author, contributor, customer",
      }
    ),
  }),
})

export const UserValidation = {
  create,
}

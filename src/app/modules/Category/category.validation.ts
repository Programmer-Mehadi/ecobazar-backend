import { z } from "zod"

const create = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .min(3, { message: "Name must be at least 3 characters" })
      .max(250, { message: "Name must be less than 250 characters" }),

    image: z
      .string({
        required_error: "Image is required",
        invalid_type_error: "Image must be a string",
      })
      .min(3, { message: "Image must be at least 3 characters" })
      .max(250, { message: "Image must be less than 250 characters" }),

    modyfierId: z.string({
      required_error: "modyfierId is required",
      invalid_type_error: "modyfierId must be a string",
    }),
  }),
})

export const CategoryValidation = {
  create,
}

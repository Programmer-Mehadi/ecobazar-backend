import { z } from "zod"

const create = z.object({
  body: z.object({
    productId: z.string({
      required_error: "productId is required",
      invalid_type_error: "productId must be a string",
    }),
    rating: z.number({
      required_error: "rating is required",
      invalid_type_error: "rating must be a number",
    }),
    message: z.string({
      required_error: "message is required",
      invalid_type_error: "message must be a string",
    }),
    userId: z
      .string({
        required_error: "userId is required",
        invalid_type_error: "userId must be a string",
      })
      .optional(),
  }),
})

const ReviewValidation = { create }

export default ReviewValidation

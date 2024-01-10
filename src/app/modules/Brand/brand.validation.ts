import { z } from "zod"

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    image: z.string({
      required_error: "Image is required",
      invalid_type_error: "Image must be a string",
    }),
  }),
})

const BrandValidation = { create }

export default BrandValidation

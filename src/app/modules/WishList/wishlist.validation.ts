import { z } from "zod"

const create = z.object({
  body: z.object({
    productList: z.string({
      required_error: "Product id is required",
      invalid_type_error: "Product id must be a string",
    }),
  }),
})

const WishListValidation = { create }

export default WishListValidation

import { z } from "zod"

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    categoryId: z.array(
      z.string({
        required_error: "categoryId is required",
        invalid_type_error: "categoryId must be an array of string",
      }),
      {
        required_error: "category Id is required",
        invalid_type_error: "category Id must be an array of string",
      }
    ),
  }),
})

const TagValidation = { create }

export default TagValidation

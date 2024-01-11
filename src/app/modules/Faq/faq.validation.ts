import { z } from "zod"

const create = z.object({
  body: z.object({
    question: z.string({
      required_error: "Question is required",
      invalid_type_error: "Question must be a string",
    }),
    answer: z.string({
      required_error: "Answer is required",
      invalid_type_error: "Answer must be a string",
    }),
    categoryId: z.array(
      z.string({
        required_error: "category Id is required",
        invalid_type_error: "category Id must be a string",
      }),
      {
        required_error: "category Id is required",
        invalid_type_error: "category Id must be an array of string",
      }
    ),
    invisible: z.boolean({
      required_error: "Invisible is required",
      invalid_type_error: "Invisible must be a boolean",
    }),
  }),
})

const FaqValidation = { create }

export default FaqValidation

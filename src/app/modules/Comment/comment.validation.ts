import { z } from "zod"

const create = z.object({
  body: z.object({
    userId: z.string({
      required_error: "userId is required",
      invalid_type_error: "userId must be a string",
    }),
    blogId: z.string({
      required_error: "blogId is required",
      invalid_type_error: "blogId must be a string",
    }),
    comment: z.string({
      required_error: "comment is required",
      invalid_type_error: "comment must be a string",
    }),
  }),
})

const CommentValidation = { create }

export default CommentValidation

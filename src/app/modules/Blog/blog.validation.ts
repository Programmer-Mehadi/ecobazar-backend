import { z } from "zod"

const create = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    }),
    description: z.string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    }),
    shortDescription: z.string({
      required_error: "Short description is required",
      invalid_type_error: "Short description must be a string",
    }),
    image: z.string({
      required_error: "Image is required",
      invalid_type_error: "Image must be a string",
    }),
    categoryId: z.array(
      z.string({
        required_error: "categoryId is required",
        invalid_type_error: "categoryId must be an array of string",
      }),
      {
        required_error: "categoryId is required",
        invalid_type_error: "categoryId must be an array of string",
      }
    ),
    tagId: z.array(
      z.string({
        required_error: "tagId is required",
        invalid_type_error: "tagId must be an array of string",
      }),
      {
        required_error: "tagId is required",
        invalid_type_error: "tagId must be an array of string",
      }
    ),
    published: z.boolean({
      required_error: "published is required",
      invalid_type_error: "published must be a boolean",
    }),
    userId: z
      .string({
        required_error: "userId is required",
        invalid_type_error: "userId must be a string",
      })
      .optional(),
  }),
})
const update = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    }),
    description: z.string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    }),
    shortDescription: z.string({
      required_error: "Short description is required",
      invalid_type_error: "Short description must be a string",
    }),
    image: z.string({
      required_error: "Image is required",
      invalid_type_error: "Image must be a string",
    }),
    categoryId: z.array(
      z.string({
        required_error: "categoryId is required",
        invalid_type_error: "categoryId must be an array of string",
      }),
      {
        required_error: "categoryId is required",
        invalid_type_error: "categoryId must be an array of string",
      }
    ),
    tagId: z.array(
      z.string({
        required_error: "tagId is required",
        invalid_type_error: "tagId must be an array of string",
      }),
      {
        required_error: "tagId is required",
        invalid_type_error: "tagId must be an array of string",
      }
    ),
    modifyerId: z
      .string({
        required_error: "modifyerId is required",
        invalid_type_error: "modifyerId must be a string",
      })
      .optional(),
    published: z.boolean({
      required_error: "published is required",
      invalid_type_error: "published must be a boolean",
    }),
    userId: z
      .string({
        required_error: "userId is required",
        invalid_type_error: "userId must be a string",
      })
      .optional(),
  }),
})

const BlogValidation = { create, update }

export default BlogValidation

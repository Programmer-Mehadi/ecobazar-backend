import { z } from "zod"

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    description: z.string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    }),
    shortDescription: z.string({
      required_error: "Short description is required",
      invalid_type_error: "Short description must be a string",
    }),
    sku: z.number({
      required_error: "Sku is required",
      invalid_type_error: "Sku must be a number",
    }),
    price: z.number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    }),
    images: z.array(
      z.string({
        required_error: "Images is required",
        invalid_type_error: "Images must be a string",
      }),
      {
        required_error: "Images is required",
        invalid_type_error: "Images must be an array of string",
      }
    ),
    categoryId: z.string({
      required_error: "categoryId is required",
      invalid_type_error: "categoryId must be a string",
    }),
    brandId: z.string({
      required_error: "brandId is required",
      invalid_type_error: "brandId must be a string",
    }),
    tagId: z.array(
      z.string({
        required_error: "tagId is required",
        invalid_type_error: "tagId must be a string",
      }),
      {
        required_error: "tagId is required",
        invalid_type_error: "tagId must be an array of string",
      }
    ),
    preOrder: z.boolean({
      required_error: "preOrder is required",
      invalid_type_error: "preOrder must be a boolean",
    }),
    additionalInformation: z.string({
      required_error: "additionalInformation is required",
      invalid_type_error: "additionalInformation must be a string",
    }),
    offerId: z
      .string({
        required_error: "offerId is required",
        invalid_type_error: "offerId must be a string",
      })
      .optional(),
    modyfierId: z.string({
      required_error: "modyfierId is required",
      invalid_type_error: "modyfierId must be a string",
    }),
  }),
})
const update = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    description: z.string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    }),
    shortDescription: z.string({
      required_error: "Short description is required",
      invalid_type_error: "Short description must be a string",
    }),
    sku: z.number({
      required_error: "Sku is required",
      invalid_type_error: "Sku must be a number",
    }),
    price: z.number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    }),
    images: z.array(
      z.string({
        required_error: "Images is required",
        invalid_type_error: "Images must be a string",
      }),
      {
        required_error: "Images is required",
        invalid_type_error: "Images must be an array of string",
      }
    ),
    categoryId: z.string({
      required_error: "categoryId is required",
      invalid_type_error: "categoryId must be a string",
    }),
    brandId: z.string({
      required_error: "brandId is required",
      invalid_type_error: "brandId must be a string",
    }),
    tagId: z.array(
      z.string({
        required_error: "tagId is required",
        invalid_type_error: "tagId must be a string",
      }),
      {
        required_error: "tagId is required",
        invalid_type_error: "tagId must be an array of string",
      }
    ),
    preOrder: z.boolean({
      required_error: "preOrder is required",
      invalid_type_error: "preOrder must be a boolean",
    }),
    additionalInformation: z.string({
      required_error: "additionalInformation is required",
      invalid_type_error: "additionalInformation must be a string",
    }),
    offerId: z
      .string({
        required_error: "offerId is required",
        invalid_type_error: "offerId must be a string",
      })
      .optional(),
    modyfierId: z.array(
      z.string({
        required_error: "modyfierId is required",
        invalid_type_error: "modyfierId must be a string",
      }),
      {
        required_error: "modyfierId is required",
        invalid_type_error: "modyfierId must be an array of string",
      }
    ),
  }),
})

const ProductValidation = { create, update }

export default ProductValidation

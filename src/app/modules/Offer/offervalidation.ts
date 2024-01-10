import { z } from "zod"

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    type: z.enum(["percentage", "money"], {
      required_error: "type is required",
      invalid_type_error: "type must be a string",
    }),
    percentage: z.number({
      required_error: "percentage is required",
      invalid_type_error: "percentage must be a number",
    }),
    money: z.number({
      required_error: "money is required",
      invalid_type_error: "money must be a number",
    }),
    startDate: z.string({
      required_error: "startDate is required",
      invalid_type_error: "startDate must be a date",
    }),
    endDate: z.string({
      required_error: "endDate is required",
      invalid_type_error: "endDate must be a date",
    }),
  }),
})

const OfferValidation = { create }

export default OfferValidation

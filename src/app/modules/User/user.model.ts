import { UserRoles } from "@src/enums/userRoles"
import mongoose from "mongoose"

const billingAddressSchema = new mongoose.Schema({
  streetAddress: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  postalCode: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
})

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 250,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 250,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 6,
      maxLength: 150,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      default: "user",
      enum: UserRoles,
    },
    billingAddress: {
      type: billingAddressSchema || null,
      required: false,
    },
  },
  { timestamps: true }
)

const User = mongoose.model("User", userSchema)

export default User

import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // minlength: 3,
    // maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
})

const User = mongoose.model("User", userSchema)

export default User

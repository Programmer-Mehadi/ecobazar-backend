import User from "@src/app/modules/User/user.model"
import { IUser } from "./user.type"

const createToDB = async (data: IUser) => {
  const newUser = new User(data)
  const savedUser = await newUser.save()
  return savedUser
}

const getAllUserToDB = async () => {
  const users = await User.find()
  return users
}

const getSingleUserToDB = async (id: string) => {
  const user = await User.findById(id)
  return user
}

const updateUserToDB = async (id: string, data: IUser) => {
  const user = await User.findByIdAndUpdate(id, data, { new: false })
  return user
}

const UserService = {
  createToDB,
  getAllUserToDB,
  getSingleUserToDB,
  updateUserToDB,
}

export default UserService

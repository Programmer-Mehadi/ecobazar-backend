import User from "./user.model"
import { IUser } from "./user.type"

const createToDB = async (data: IUser) => {
  const newUser = new User(data)
  const savedUser = await newUser.save()
  return savedUser
}

const UserService = { createToDB }

export default UserService

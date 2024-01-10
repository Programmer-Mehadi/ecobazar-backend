interface ILogin {
  email: string
  password: string
}

interface ILoginUser {
  _id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  image: string
  token: string
  role: string
}

export { ILogin, ILoginUser }

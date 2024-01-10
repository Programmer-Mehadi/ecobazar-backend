import { UserRoles } from "@src/enums/userRoles"

interface IUserBillingAddress {
  streetAddress: string
  country: string
  city: string
  postalCode: string
  email: string
  phoneNumber: string
}

interface IUser {
  firstName: string
  lastName: string
  email: string
  password: string
  image: string
  phoneNumber: string
  role: UserRoles
  billingAddress?: IUserBillingAddress | null | undefined | object
}

export { IUser }

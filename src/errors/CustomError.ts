interface ICustomError {
  name: string
  message: string
  statusCode: number
  isCustomError: boolean
}

class CustomError extends Error implements ICustomError {
  statusCode: number
  isCustomError: boolean
  constructor(message: string, statusCode: number) {
    super(message)
    this.name = "CustomError"
    this.statusCode = statusCode
    this.isCustomError = true
  }
}

export default CustomError

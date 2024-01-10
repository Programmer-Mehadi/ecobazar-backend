import exporess, { Application, Request, Response } from "express"
import cors from "cors"
import mongoose from "mongoose"
import config from "@src/config/index"
import routes from "@src/app/routes/routes"
import zodValidationHandler from "@src/app/middlewares/zodValidation"
import errorHandler from "@src/app/middlewares/errorHandler"

const app: Application = exporess()

// cors
app.use(cors())
// parse
app.use(exporess.json())
app.use(exporess.urlencoded({ extended: true }))

// connect to mongodb
mongoose.connect(config.database_url as string)
console.log("🌹 Connected to MongoDB 💋")
// Routes setup (add your routes here)

app.use("/api/v1", routes)

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "✔ Ecobazar Backend Server running 💖",
  })
})

app.use(zodValidationHandler)
app.use(errorHandler)

app.use("*", (req, res) => {
  return res.status(404).json({
    success: false,
    error: "Route not found! 🚫",
  })
})

// Error handling middleware
app.use((err: Error, req: Request, res: Response) => {
  return res.status(500).json({
    success: false,
    error: {
      message: err?.message,
    },
    stack: err?.stack,
  })
})

export default app

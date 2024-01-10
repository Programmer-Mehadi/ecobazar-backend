import dotenv from "dotenv"
import path from "path"
dotenv.config({
  path: path.join(process.cwd(), ".env"),
})

export default {
  port: process.env.PORT || 5500,
  database_url: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
}

// routes.js
import express from "express"
import UserRoutes from "../modules/User/user.route"
const routes = express.Router()

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
]

moduleRoutes.forEach((route) => routes.use(route.path, route.route))

export default routes

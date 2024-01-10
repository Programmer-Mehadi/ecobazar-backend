import express from "express"
import UserRoutes from "../modules/User/user.route"
import AuthRoutes from "@src/app/modules/Auth/auth.route"
import CategoryRoutes from "@src/app/modules/Category/category.route"
import TagRoutes from "@src/app/modules/Tag/tag.route"
const routes = express.Router()

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/category",
    route: CategoryRoutes,
  },
  {
    path: "/tag",
    route: TagRoutes,
  },
]

moduleRoutes.forEach((route) => routes.use(route.path, route.route))

export default routes

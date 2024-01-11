import express from "express"
import UserRoutes from "../modules/User/user.route"
import AuthRoutes from "@src/app/modules/Auth/auth.route"
import CategoryRoutes from "@src/app/modules/Category/category.route"
import TagRoutes from "@src/app/modules/Tag/tag.route"
import ProductRoutes from "@src/app/modules/Product/product.route"
import BrandRoutes from "@src/app/modules/Brand/brand.route"
import OfferRoutes from "@src/app/modules/Offer/offer.route"
import WishListRoutes from "@src/app/modules/WishList/wishlist.route"
import FaqRoutes from "@src/app/modules/Faq/faq.route"
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
  {
    path: "/brand",
    route: BrandRoutes,
  },
  {
    path: "/product",
    route: ProductRoutes,
  },
  {
    path: "/offer",
    route: OfferRoutes,
  },
  {
    path: "/wishlist",
    route: WishListRoutes,
  },
  {
    path: "/faq",
    route: FaqRoutes,
  },
]

moduleRoutes.forEach((route) => routes.use(route.path, route.route))

export default routes

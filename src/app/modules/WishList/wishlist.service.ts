import WishList from "@src/app/modules/WishList/wishlist.model"
import { IWishList } from "@src/app/modules/WishList/wishlist.type"
import mongoose from "mongoose"

const createWishListToDB = async (data: IWishList) => {
  const wishList = await WishList.findOne({ userId: data.userId })

  if (wishList) {
    if (
      wishList.productList.includes(
        new mongoose.Types.ObjectId(data.productList)
      )
    ) {
      throw new Error("Product is already in the wishlist")
    } else {
      const updatedWishList = await WishList.findByIdAndUpdate(
        wishList._id,
        { $push: { productList: data.productList } },
        { new: true }
      )
      return updatedWishList
    }
  } else {
    const newWishList = new WishList(data)
    const savedWishList = await newWishList.save()
    return savedWishList
  }
}

const getAllWishListFromDB = async (id: string) => {
  const wishlists = await WishList.findOne({ userId: id })
  return wishlists
}

const removeWishListToDB = async (userId: string, productId: string) => {
  const wishList = await WishList.findOneAndUpdate(
    { userId: userId },
    { $pull: { productList: new mongoose.Types.ObjectId(productId) } },
    { new: true }
  )
  return wishList
}

const WishListService = {
  createWishListToDB,
  getAllWishListFromDB,
  removeWishListToDB,
}

export default WishListService

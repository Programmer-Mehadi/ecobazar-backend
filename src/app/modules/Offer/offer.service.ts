import Offer from "@src/app/modules/Offer/offer.model"
import { IOffer } from "@src/app/modules/Offer/offer.type"

const createOfferToDB = async (data: IOffer) => {
  const newOffer = new Offer(data)
  const savedOffer = await newOffer.save()
  return savedOffer
}

const getAllOfferFromDB = async () => {
  const offers = await Offer.find()
  return offers
}

const updateOfferToDB = async (id: string, data: IOffer) => {
  const offer = await Offer.findByIdAndUpdate(id, data, { new: false })
  return offer
}

const OfferService = {
  createOfferToDB,
  getAllOfferFromDB,
  updateOfferToDB,
}

export default OfferService

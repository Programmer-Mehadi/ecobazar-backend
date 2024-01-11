import Faq from "@src/app/modules/Faq/faq.model"
import { IFaq } from "@src/app/modules/Faq/faq.type"

const createFaqToDB = async (data: IFaq) => {
  const newFaq = new Faq(data)
  const savedFaq = await newFaq.save()
  return savedFaq
}

const getAllFaqs = async () => {
  const faqs = await Faq.find({})
    .populate("categoryId", "name _id image")
    .exec()
  return faqs
}

const getVisibleFaqs = async () => {
  const faqs = await Faq.find({ invisible: false })
    .populate("categoryId", "name _id image")
    .exec()
  return faqs
}

const updateFaqToDB = async (id: string, data: IFaq) => {
  const faq = await Faq.findByIdAndUpdate(id, data, { new: false })
  return faq
}

const deleteFaqFromDB = async (id: string) => {
  const faq = await Faq.findByIdAndDelete(id)
  return faq
}

const FaqService = {
  createFaqToDB,
  getAllFaqs,
  getVisibleFaqs,
  updateFaqToDB,
  deleteFaqFromDB,
}

export default FaqService

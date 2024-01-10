import Tag from "@src/app/modules/Tag/tag.model"
import { ITag } from "@src/app/modules/Tag/tag.type"

const createTagToDB = async (data: ITag) => {
  const newTag = new Tag(data)
  const savedTag = await newTag.save()
  return savedTag
}

const getAllTagFromDB = async () => {
  const tags = await Tag.find()
    .populate({
      path: "categoryId",
      select: "name image _id",
    })
    .exec()
  return tags
}

const updateTagToDB = async (id: string, data: ITag) => {
  const tag = await Tag.findByIdAndUpdate(id, data, { new: false })
  console.log(tag)
  return tag
}

const TagService = {
  createTagToDB,
  getAllTagFromDB,
  updateTagToDB,
}

export default TagService

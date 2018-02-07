import Mongoose, { Schema } from 'mongoose'

// 定义归档Schema
const ArchiveSchema = new Schema(
  {
    archiveId: { type: String, required: true }, // 归档的唯一archiveId
    name: { type: String, required: true }, // 归档的名字
    articles: [{ type: Schema.ObjectId, ref: 'Article', required: true }] // 所包含的文章
  },
  { // 添加时间戳
    timestamps: {
      createdAt: 'createdAt',
      updateAt: 'updateAt'
    }
  }
)

const ArchiveModel = Mongoose.model('Archive', ArchiveSchema)

export { ArchiveModel }

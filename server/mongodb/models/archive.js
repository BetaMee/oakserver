import Mongoose, { Schema } from 'mongoose'

// 定义归档Schema
const ArchiveSchema = new Schema(
  {
    archiveId: String, // 归档的唯一archiveId
    name: String, // 归档的名字
    article: String // 所包含的文章
  },
  { // 添加时间戳
    timestamps: {
      createdAt: 'createdAt',
      updateAt: 'updateAt'
    }
  }
)

const ArchiveModel = Mongoose.model('Archive', ArchiveSchema)

export default ArchiveModel
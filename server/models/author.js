import Mongoose, { Schema } from 'mongoose'

// 定义作者Schema
const AuthorSchema = new Schema(
  {
    authorId: { type: String, required: true }, // 作者唯一ID
    name: { type: String, required: true, max: 50 }, // 姓名
    gender: { type: String, required: true, enum: ['G', 'F'], default: 'F' }, // 性别
    email: { type: String, required: [true, 'can not be blank'], match: [/\S+@\S+\.\S+/, 'is invalid'] }, // 邮箱
    social: [String], // 社交地址， 一个数组，比如github、twitter等
    avatar: { type: String, required: true }, // 头像地址
    article: [{ type: Schema.ObjectId, ref: 'Article', required: true }], // 该作者的文章
  },
  { // 添加时间戳
    timestamps: {
      createdAt: 'createdAt',
      updateAt: 'updateAt'
    }
  }
)

const AuthorModel = Mongoose.model('Author', AuthorSchema)

export default AuthorModel

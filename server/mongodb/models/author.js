import Mongoose, { Schema } from 'mongoose'

// 定义作者Schema
const AuthorSchema = new Schema(
  {
    authorId: String, // 作者唯一ID
    name: String, // 姓名
    gender: String, // 性别
    email: String, // 邮箱
    social: String, // 社交地址， 一个数组，比如github、twitter等
    avatar: String, // 头像地址
    // updateAt: String, // 更新日期
    // createAt: String, // 发表时间
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

import Mongoose, { Schema } from 'mongoose'

// 定义Schema
const AuthorSchema = new Schema({
  name: String, // 姓名
  gender: String, // 性别
  email: String, // 邮箱
  social: String, // 社交地址， 一个数组，比如github、twitter等
  avatar: String, // 头像地址
  updateAt: String, // 更新日期
  createAt: String, // 发表时间
})

const AuthorModel = Mongoose.model('Author', AuthorSchema)

export default AuthorModel

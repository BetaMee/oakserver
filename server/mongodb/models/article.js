import Mongoose, { Schema } from 'mongoose'

// 定义Schema
const ArticleSchema = new Schema({
  articleId: String, // 文章唯一ID
  title: String, // 文章title
  content: String, // markdown数据
  author: String, // 作者
  updateAt: String, // 更新日期
  createAt: String, // 发表时间
  category: String, // 类别
  // comments: [] // 评论，后续会连接到github上，生成唯一ID
})

const ArticleModel = Mongoose.model('Article', ArticleSchema)

export default ArticleModel

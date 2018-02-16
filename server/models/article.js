// 引入docClient操作数据库
import { docClient } from '../config/aws'

import {
  ARTICLE_TABLE
} from '../config/tables'


const ArticleModel = {
  // 获取所有文章信息
  getAll: () => {
    
  },
  // 通过articleId获取文章信息
  getByArticleId: (articleId) => {
    const params = {
      TableName: ARTICLE_TABLE,
      KeyConditionExpression: '#articleId = :articleId',
      ExpressionAttributeNames:{
        '#articleId' : 'articleId'
      },
      ExpressionAttributeValues: {
        ':articleId' : articleId
      }
    }
    return docClient.query(params).promise()
  },
  // 新建文章，只能返回空对象，辣鸡
  create: (article) => {
    const params = {
      TableName: ARTICLE_TABLE,
      Item: article,
      ReturnValues: 'ALL_OLD'
    }
    return docClient.put(params).promise()
  },
  // 更新文章
  updateByArticleId: () => {

  },
  // 删除文章
  deleteByArticleId: () => {

  }
}

export { ArticleModel }



// 定义文章Schema
// const ArticleSchema = new Schema(
//   {
//     articleId: { type: String, index: true }, // 文章唯一ID
//     title: { type: String, required: true }, // 文章title
//     content: { type: String, required: true }, // markdown数据
//     // summary: { type: String, required: true }, // 总结
//     // author: { type: Schema.ObjectId, ref: 'Author', required: true }, // 作者
//     isPublished: { type: Boolean, required: true }, // 是否发表
//     // archive: { type: Schema.ObjectId, ref: 'Archive', required: true }, // 归档
//     // keywords: Array, // 关键字，一篇文章所包含的关键字
//     // category: String, // 类别，一篇文章所属于的类别
//     // comments: [] // 评论，后续会连接到github上，生成唯一ID
//   },
//   { // 添加时间戳
//     timestamps: {
//       createdAt: 'createdAt',
//       updateAt: 'updateAt'
//     }
//   }
// )
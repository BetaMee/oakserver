import Mongoose from 'mongoose'
import ArticleModel from '../mongodb'


/**
 * 添加文章
 * @param {*} articleObj 
 */
const getArticles = async (ctx, next) => {
  // 业务逻辑
  ctx.body = 'hello fuck'
}



export {
  getArticles,
}

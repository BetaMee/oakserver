import Mongoose from 'mongoose'
import ArticleModel from '../models'


/**
 * 获取文章
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchArticles = async (ctx, next) => {
  // 业务逻辑
  ctx.body = 'hello fuck'
}


/**
 * 创建文章
 * @param {*} ctx 
 * @param {*} next 
 */
const createArticle = async (ctx, next)  => {
  ctx.body = 'fuck hello'
}


/**
 * 更新文章
 * @param {*} ctx 
 * @param {*} next 
 */
const updateArticle = async (ctx, next) => {

}

/**
 * 删除文章
 * @param {*} ctx 
 * @param {*} next 
 */
const deleteArticle = async (ctx, next) => {

}

export {
  fetchArticles, // 获取文章
  createArticle, // 生成文章
  updateArticle, // 更新文章
  deleteArticle, // 删除文章
}

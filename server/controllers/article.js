import {
  ArticleModel
} from '../models'

import * as utils from '../utils'
import Code from '../config/code'

/**
 * 获取所有文章
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchArticles = async (ctx, next) => {

}

/**
 * 通过ID获取文章
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchArticleById = async (ctx, next) => {
  const articleId = ctx.params.articleId
  try {
    const article = await ArticleModel.getByArticleId(articleId)
    // 返回的结果
    let Item = null
    if(article.Item) {
      Item = article.Item
    }
    const result = {
      action: 'GET',
      message: Code.ARTICLE_GET_SUCCESS,
      code: Code.ARTICLE_GET_SUCCESS_CODE,
      success: true,
      item: Item
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: Code.ARTICLE_GET_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

/**
 * 某归档类下有多少文章
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchArticlesByArchive = async (ctx, next) => {
  // 获取归档ID
  const articleId = ctx.params.archiveId
}


/**
 * 某作者下有多少文章
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchArticlesByAuthor = async (ctx, next) => {
  // 获取作者ID
  const authorId = ctx.params.authorId
}

/**
 * 生成一篇新文章
 * @param {*} ctx 
 * @param {*} next 
 */
const createArticle = async (ctx, next)  => {
  // 获取body中的数据
  const {
    title,
    content,
    author,
    archive
  } = ctx.request.body
  // 生成文章唯一id
  const articleId = utils.generateUniqueID()
  // 生成创建时间
  const currentDate = utils.getCurrentDate(new Date())
  const createdAt = currentDate
  const updatedAt = currentDate
  // 确定是否需要发布，默认不需要
  const isPublished =false
  // 写入数据库
  const newArticle = {
    articleId, title, content, author, archive, isPublished, createdAt, updatedAt
  }
  try {
    await ArticleModel.create(newArticle) //  返回空对象
    const result = {
      action: 'CREATE',
      message: Code.ARTICLE_CREATE_SUCCESS,
      code: Code.ARTICLE_CREATE_SUCCESS_CODE,
      success: true,
      item: newArticle
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: Code.ARTICLE_CREATE_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}


/**
 * 更新一篇文章
 * @param {*} ctx 
 * @param {*} next 
 */
const updateArticleById = async (ctx, next) => {
  // 获取文章ID
  const articleId = ctx.params.articleId
  // 更新updateAt
  const updatedAt = utils.getCurrentDate(new Date())
  // 获取可以更新的字段
  const {
    title,
    content,
    archive
  } = ctx.request.body
  // 更新的对象
  const toUpdateArticle = {
    title,
    content,
    archive,
    updatedAt
  }
  try {
    const updatedArticle = await ArticleModel.updateByArticleId(articleId, toUpdateArticle)
    const result = {
      action: 'UPDATE',
      message: Code.ARTICLE_UPDATE_SUCCESS,
      code: Code.ARTICLE_UPDATE_SUCCESS_CODE,
      success: true,
      item: updatedArticle.Attributes
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: Code.ARTICLE_UPDATE_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

/**
 * 删除一篇文章
 * @param {*} ctx 
 * @param {*} next 
 */
const deleteArticleById = async (ctx, next) => {
  // 获取文章ID
  const articleId = ctx.params.articleId
  try {
    await ArticleModel.deleteByArticleId(articleId)
    const result = {
      action: 'DELETE',
      message: Code.ARTICLE_DELETE_SUCCESS,
      code: Code.ARTICLE_DELETE_SUCCESS_CODE,
      success: true
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: Code.ARTICLE_DELETE_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

export {
  fetchArticles, // 获取所有文章
  fetchArticleById, // 通过ID获取文章
  fetchArticlesByArchive, // 某归档类下有多少文章
  fetchArticlesByAuthor, // 某作者下有多少文章
  createArticle, // 生成一篇新文章
  updateArticleById, // 更新一篇文章
  deleteArticleById, // 删除一篇文章
}

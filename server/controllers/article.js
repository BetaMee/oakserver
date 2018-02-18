import uuidv4 from 'uuid/v4'
import { ArticleModel } from '../models'
import { getNowTimeStr } from '../utils'

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
    const result = {
      action: 'GET',
      message: 'get article successfully',
      success: true,
      item: article.Item
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: e.code,
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
  const articleId = uuidv4()
  // 生成创建时间
  const nowTime = getNowTimeStr(new Date())
  const createdAt = nowTime
  const updatedAt = nowTime
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
      message: 'article created successfully',
      success: true,
      item: newArticle
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: e.code,
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
  const updatedAt = getNowTimeStr(new Date())
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
      message: 'article updated successfully',
      success: true,
      item: updatedArticle.Attributes
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: e.code,
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
      message: 'article deleted successfully',
      success: true
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: e.code,
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

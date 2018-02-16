import { ArticleModel } from '../models'

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
    const result = await ArticleModel.getByArticleId(articleId)
    ctx.body = result.Items
  } catch(e) {
    ctx.body = e
  }
}

/**
 * 某归档类下有多少文章
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchArticlesByArchive = async (ctx, next) => {

}


/**
 * 某作者下有多少文章
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchArticlesByAuthor = async (ctx, next) => {

}

/**
 * 生成一篇新文章
 * @param {*} ctx 
 * @param {*} next 
 */
const createArticle = async (ctx, next)  => {
  // 获取body中的数据
  const { body } = ctx.request
  // 写入数据库
  try {
    await ArticleModel.create(body) //  result是空对象
    ctx.body = body
  } catch(e) {
    ctx.body = e
  }
}


/**
 * 更新一篇文章
 * @param {*} ctx 
 * @param {*} next 
 */
const updateArticleById = async (ctx, next) => {

}

/**
 * 删除一篇文章
 * @param {*} ctx 
 * @param {*} next 
 */
const deleteArticleById = async (ctx, next) => {

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

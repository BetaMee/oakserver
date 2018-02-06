import Router from 'koa-router'

// 业务逻辑在Controller中
import {
  fetchArticles, // 获取文章
  createArticle, // 生成文章
  updateArticle, // 更新文章
  deleteArticle, // 删除文章

  fectchAuthors, // 获取用户信息
  createAuthor, // 创建用户

  fetchArchives, // 获取归档
  createArchive, // 创建归档
} from '../controllers'

const RestRouter = Router()

RestRouter
  .get('/fetchArticles', fetchArticles)
  .get('/createArticle', createArticle)

export default RestRouter

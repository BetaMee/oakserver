import Router from 'koa-router'

// 业务逻辑在Controller中
import {
  fetchArticles, // 获取文章
  createArticle, // 生成文章
  updateArticle, // 更新文章
  deleteArticle, // 删除文章

  fectchAuthors, // 获取用户信息
  createAuthor, // 创建用户
  updateAuthor, // 更新作者
  deleteAuthor, // 删除用户

  fetchArchives, // 获取归档信息
  createArchive, // 创建归档信息
  updateArchive, // 更新归档信息
  deleteArchive // 删除归档信息
} from '../controllers'

const RestRouter = Router()

RestRouter
  .get('/article', fetchArticles) // 获取文章
  .post('/', createArticle) // 生成文章
  .put('/', updateArticle) // 更新文章
  .del('/', deleteArticle) // 删除文章
  .get('/author/:id', fectchAuthors) // 获取用户信息
  .post('/', createAuthor) // 创建用户
  .put('/', updateAuthor) // 更新作者
  .del('/', deleteAuthor) // 删除用户
  .get('/', fetchArchives) // 获取归档信息
  .post('/', createArchive) // 创建归档信息
  .put('/', updateArchive) // 更新归档信息
  .del('/', deleteArchive) // 删除归档信息

export default RestRouter

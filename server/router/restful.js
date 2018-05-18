import Router from 'koa-router'

// 业务逻辑在Controller中
import {
  // Article
  fetchArticles, // 获取所有文章
  fetchArticleById, // 通过ID获取文章
  fetchArticlesByArchiveId, // 某归档类下有多少文章
  fetchArticlesByAuthorId, // 某作者下有多少文章
  createArticle, // 生成一篇新文章
  updateArticleTitleById, // 更新一篇文章标题
  updateArticleContentById, // 更新文章内容
  deleteArticleById, // 删除一篇文章
  // Author
  fetchAuthors, // 获取所有作者
  fetchAuthorById, // 获取某一个作者
  updateAuthorById, // 更新一个作者
  // Archive
  fetchArchivesByAttachId, // 获取某一个作者下的所有归档类
  fetchArchiveById, // 获取某一个归档
  createArchive, // 创建一个归档信息
  updateArchiveById, // 更新一个归档信息
  deleteArchiveById // 删除一个归档信息
} from '../controllers'

const RestRouter = Router()

RestRouter
  // Article
  .get('/article', fetchArticles) // 获取所有文章
  .get('/article/:articleId', fetchArticleById) // 通过ID获取文章
  // .get('/article/:articleId', fetchArticleById) // 通过文章标题获取文章，关键字
  .get('/article/archive/:archiveId', fetchArticlesByArchiveId) // 某归档类下有多少文章
  .get('/article/author/:authorId', fetchArticlesByAuthorId) // 某作者下有多少文章
  .post('/article/create', createArticle) // 生成一篇新文章
  .put('/article/update/title/:articleId', updateArticleTitleById) // 更新一篇文章标题
  .put('/article/update/content/:articleId', updateArticleContentById) // 更新一篇文章内容
  .del('/article/delete/:articleId', deleteArticleById) // 删除一篇文章
  // Author
  .get('/author', fetchAuthors) // 获取所有作者
  .get('/author/:authorId', fetchAuthorById) // 获取某一个作者profile
  .put('/author/update/:authorId', updateAuthorById) // 更新一个作者profile
  // Archive
  .get('/archive/attach/:attachId', fetchArchivesByAttachId) // 获取某一个作者下的所有归档类
  .get('/archive/:archiveId', fetchArchiveById) // 获取某一个归档
  .post('/archive/create', createArchive) // 创建一个归档信息
  .put('/archive/update/:archiveId', updateArchiveById) // 更新一个归档信息
  .del('/archive/delete/:archiveId', deleteArchiveById) // 删除一个归档信息

export default RestRouter

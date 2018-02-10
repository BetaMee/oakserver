'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _controllers = require('../controllers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RestRouter = (0, _koaRouter2.default)();

// 业务逻辑在Controller中


RestRouter
// Article
.get('/article', _controllers.fetchArticles) // 获取所有文章
.get('/article/:articleId', _controllers.fetchArticleById) // 通过ID获取文章
.get('/article/archive/:archiveId', _controllers.fetchArticlesByArchive) // 某归档类下有多少文章
.get('/article/author/:authorId', _controllers.fetchArticlesByAuthor) // 某作者下有多少文章
.post('/article/create', _controllers.createArticle) // 生成一篇新文章
.put('/article/update/:articleId', _controllers.updateArticleById) // 更新一篇文章
.del('/article/delete/:articleId', _controllers.deleteArticleById) // 删除一篇文章
// Author
.get('/author', _controllers.fetchAuthors) // 获取所有作者
.get('/author/:authorId', _controllers.fetchAuthorById) // 获取某一个作者
.post('/author/create', _controllers.createAuthor) // 添加一个作者
.put('/author/update/:authorId', _controllers.updateAuthorById) // 更新一个作者
.del('/author/delete/:authorId', _controllers.deleteAuthorById) // 删除一个作者
// Archive
.get('/archive', _controllers.fetchArchives) // 获取所有归档类
.get('/archive/:archiveId', _controllers.fetchArchiveById) // 获取某一个归档
.post('/archive/create', _controllers.createArchive) // 创建一个归档信息
.put('/archive/update/:archiveId', _controllers.updateArchiveById) // 更新一个归档信息
.del('/archive/delete/:archiveId', _controllers.deleteArchiveById); // 删除一个归档信息


exports.default = RestRouter;
//# sourceMappingURL=restful.js.map
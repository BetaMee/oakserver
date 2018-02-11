'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteArticleById = exports.updateArticleById = exports.createArticle = exports.fetchArticlesByAuthor = exports.fetchArticlesByArchive = exports.fetchArticleById = exports.fetchArticles = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _models = require('../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取所有文章
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchArticles = async (ctx, next) => {
  ctx.body = '<h1>FUCK AWS</h1>';
};

/**
 * 通过ID获取文章
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchArticleById = async (ctx, next) => {};

/**
 * 某归档类下有多少文章
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchArticlesByArchive = async (ctx, next) => {};

/**
 * 某作者下有多少文章
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchArticlesByAuthor = async (ctx, next) => {};

/**
 * 生成一篇新文章
 * @param {*} ctx 
 * @param {*} next 
 */
const createArticle = async (ctx, next) => {
  // // 获取body中的数据
  // const { body } = ctx.request
  // // 写入数据库
  // const article = new ArticleModel(body)
  // const a = await article.save()
  // console.log(a)
  ctx.body = 'fuck world';
};

/**
 * 更新一篇文章
 * @param {*} ctx 
 * @param {*} next 
 */
const updateArticleById = async (ctx, next) => {};

/**
 * 删除一篇文章
 * @param {*} ctx 
 * @param {*} next 
 */
const deleteArticleById = async (ctx, next) => {};

exports.fetchArticles = fetchArticles;
exports.fetchArticleById = fetchArticleById;
exports.fetchArticlesByArchive = fetchArticlesByArchive;
exports.fetchArticlesByAuthor = fetchArticlesByAuthor;
exports.createArticle = createArticle;
exports.updateArticleById = updateArticleById;
exports.deleteArticleById = deleteArticleById;
//# sourceMappingURL=article.js.map
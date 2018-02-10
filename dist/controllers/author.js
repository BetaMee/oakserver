'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAuthorById = exports.updateAuthorById = exports.createAuthor = exports.fetchAuthorById = exports.fetchAuthors = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取所有作者
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchAuthors = async (ctx, next) => {};

/**
 * 获取某一个作者
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchAuthorById = async (ctx, next) => {};

/**
 * 添加一个作者
 * @param {*} ctx 
 * @param {*} next 
 */
const createAuthor = async (ctx, next) => {};

/**
 * 更新一个作者
 * @param {*} ctx 
 * @param {*} next 
 */
const updateAuthorById = async (ctx, next) => {};

/**
 * 删除一个作者
 * @param {*} ctx 
 * @param {*} next 
 */
const deleteAuthorById = async (ctx, next) => {};

exports.fetchAuthors = fetchAuthors;
exports.fetchAuthorById = fetchAuthorById;
exports.createAuthor = createAuthor;
exports.updateAuthorById = updateAuthorById;
exports.deleteAuthorById = deleteAuthorById;
//# sourceMappingURL=author.js.map
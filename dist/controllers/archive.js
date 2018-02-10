'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteArchiveById = exports.updateArchiveById = exports.createArchive = exports.fetchArchiveById = exports.fetchArchives = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取所有归档类
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchArchives = async (ctx, next) => {};

/**
 * 获取某一个归档
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchArchiveById = async (ctx, next) => {};

/**
 * 创建一个归档信息
 * @param {*} ctx 
 * @param {*} next 
 */
const createArchive = async (ctx, next) => {};

/**
 * 更新一个归档信息
 * @param {*} ctx 
 * @param {*} next 
 */
const updateArchiveById = async (ctx, next) => {};

/**
 * 删除一个归档信息
 * @param {*} ctx 
 * @param {*} next 
 */
const deleteArchiveById = async (ctx, next) => {};

exports.fetchArchives = fetchArchives;
exports.fetchArchiveById = fetchArchiveById;
exports.createArchive = createArchive;
exports.updateArchiveById = updateArchiveById;
exports.deleteArchiveById = deleteArchiveById;
//# sourceMappingURL=archive.js.map
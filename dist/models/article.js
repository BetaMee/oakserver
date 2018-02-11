'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleModel = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { Schema } = _mongoose2.default;

// 定义文章Schema
const ArticleSchema = new Schema({
  articleId: { type: String, index: true }, // 文章唯一ID
  title: { type: String, required: true }, // 文章title
  content: { type: String, required: true }, // markdown数据
  // summary: { type: String, required: true }, // 总结
  // author: { type: Schema.ObjectId, ref: 'Author', required: true }, // 作者
  isPublished: { type: Boolean, required: true } // 是否发表
  // archive: { type: Schema.ObjectId, ref: 'Archive', required: true }, // 归档
  // keywords: Array, // 关键字，一篇文章所包含的关键字
  // category: String, // 类别，一篇文章所属于的类别
  // comments: [] // 评论，后续会连接到github上，生成唯一ID
}, { // 添加时间戳
  timestamps: {
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  }
});

const ArticleModel = _mongoose2.default.model('Article', ArticleSchema);

exports.ArticleModel = ArticleModel;
//# sourceMappingURL=article.js.map
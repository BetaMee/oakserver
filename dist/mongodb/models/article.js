'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 定义文章Schema
const ArticleSchema = new _mongoose.Schema({
  articleId: String, // 文章唯一ID
  title: String, // 文章title
  content: String, // markdown数据
  summary: String, // 总结
  author: { type: _mongoose.Schema.Types.ObjectId, ref: 'Person' }, // 作者
  isPublished: Boolean, // 是否发表
  archive: String // 归档
  // updateAt: String, // 更新日期
  // createAt: String, // 发表时间
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

exports.default = ArticleModel;
//# sourceMappingURL=article.js.map
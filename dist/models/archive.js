'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArchiveModel = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 定义归档Schema
const ArchiveSchema = new _mongoose.Schema({
  archiveId: { type: String, required: true }, // 归档的唯一archiveId
  name: { type: String, required: true }, // 归档的名字
  articles: [{ type: _mongoose.Schema.ObjectId, ref: 'Article', required: true }] // 所包含的文章
}, { // 添加时间戳
  timestamps: {
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  }
});

const ArchiveModel = _mongoose2.default.model('Archive', ArchiveSchema);

exports.ArchiveModel = ArchiveModel;
//# sourceMappingURL=archive.js.map
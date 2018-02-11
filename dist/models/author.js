'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthorModel = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 定义作者Schema
const AuthorSchema = new _mongoose.Schema({
  authorId: { type: String, required: true }, // 作者唯一ID
  name: { type: String, required: true, max: 50 }, // 姓名
  gender: { type: String, required: true, enum: ['G', 'F'], default: 'F' }, // 性别
  email: { type: String, required: [true, 'can not be blank'], match: [/\S+@\S+\.\S+/, 'is invalid'] }, // 邮箱
  social: [String], // 社交地址， 一个数组，比如github、twitter等
  avatar: { type: String, required: true }, // 头像地址
  article: [{ type: _mongoose.Schema.ObjectId, ref: 'Article', required: true }] // 该作者的文章
}, { // 添加时间戳
  timestamps: {
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  }
});

const AuthorModel = _mongoose2.default.model('Author', AuthorSchema);

exports.AuthorModel = AuthorModel;
//# sourceMappingURL=author.js.map
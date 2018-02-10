'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 定义作者Schema
const AuthorSchema = new _mongoose.Schema({
  authorId: String, // 作者唯一ID
  name: String, // 姓名
  gender: String, // 性别
  email: String, // 邮箱
  social: String, // 社交地址， 一个数组，比如github、twitter等
  avatar: String // 头像地址
  // updateAt: String, // 更新日期
  // createAt: String, // 发表时间
}, { // 添加时间戳
  timestamps: {
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  }
});

const AuthorModel = _mongoose2.default.model('Author', AuthorSchema);

exports.default = AuthorModel;
//# sourceMappingURL=author.js.map
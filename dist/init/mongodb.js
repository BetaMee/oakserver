'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Mongoose使用全局Promise
_mongoose2.default.Promise = global.Promise;

// 连接mongodb

exports.default = () => {
  // Mongoose.set('debug', true)

  _mongoose2.default.connect(_config2.default.dbpath);

  _mongoose2.default.connection.once('open', () => {
    console.log('we have connected mongodb');
  });

  _mongoose2.default.connection.on('disconnected', () => {
    _mongoose2.default.connect(_config2.default.dbPath);
  });
  _mongoose2.default.connection.on('error', err => {
    console.error(err);
  });
};
//# sourceMappingURL=mongodb.js.map
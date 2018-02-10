'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.database = undefined;

var _article = require('./models/article');

Object.keys(_article).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _article[key];
    }
  });
});

var _author = require('./models/author');

Object.keys(_author).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _author[key];
    }
  });
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Mongoose使用全局Promise
_mongoose2.default.Promise = global.Promise;

// 导出Models


// 连接mongodb
const database = exports.database = () => {
  _mongoose2.default.set('debug', true);

  _mongoose2.default.connect(_config2.default.dbPath);

  _mongoose2.default.once('open', () => {
    console.log('we have connected mongodb');
  });

  _mongoose2.default.connection.on('disconnected', () => {
    _mongoose2.default.connect(_config2.default.dbPath);
  });
  _mongoose2.default.connection.on('error', err => {
    console.error(err);
  });

  _mongoose2.default.connection.on('open', async () => {
    console.log('Connected to MongoDB ', _config2.default.dbPath);
  });
};
//# sourceMappingURL=index.js.map
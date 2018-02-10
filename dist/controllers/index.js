'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _article = require('./article');

Object.keys(_article).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _article[key];
    }
  });
});

var _author = require('./author');

Object.keys(_author).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _author[key];
    }
  });
});

var _archive = require('./archive');

Object.keys(_archive).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _archive[key];
    }
  });
});
//# sourceMappingURL=index.js.map
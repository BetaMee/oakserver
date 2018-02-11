'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _router = require('./router/');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 定义端口
const port = process.env.PORT || 8080;

// 引入路由映射函数

// 启动数据库
// import database from './init/mongodb'
// database()

// koa应用
const app = new _koa2.default();
const router = new _koaRouter2.default();

// 使用 bodyParser 和 KoaStatic 中间件
app.use((0, _koaBodyparser2.default)());
app.use((0, _koaStatic2.default)(_path2.default.resolve(__dirname, '../public/')));

// 生成Router Mapping
(0, _router2.default)(router);

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log('Oak Server listen port: ' + 4000);
  console.log('http://localhost:4000');
});
//# sourceMappingURL=server.js.map
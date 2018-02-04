'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _router = require('../router/');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();

// 引入路由映射函数

const router = new _koaRouter2.default();

// 使用 bodyParser 和 KoaStatic 中间件
app.use((0, _koaBodyparser2.default)());
app.use((0, _koaStatic2.default)(__dirname + '/public'));

// 路由设置test
router.get('/test', (ctx, next) => {
  ctx.body = 'test page';
});

// 生成Router Mapping
(0, _router2.default)(app);

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('GraphQL Server listen port: ' + 4000);
  console.log('http://localhost:4000');
});
//# sourceMappingURL=server.js.map
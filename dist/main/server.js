'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();
const router = new _koaRouter2.default();

// 使用 bodyParser 和 KoaStatic 中间件
app.use((0, _koaBodyparser2.default)());
app.use((0, _koaStatic2.default)(__dirname + '/public'));

// 路由设置test
router.get('/test', (ctx, next) => {
  ctx.body = "test page";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000);

console.log('graphQL server listen port: ' + 4000);
//# sourceMappingURL=server.js.map
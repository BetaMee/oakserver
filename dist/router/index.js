'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('./graphql');

var _graphql2 = _interopRequireDefault(_graphql);

var _restful = require('./restful');

var _restful2 = _interopRequireDefault(_restful);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取RouteMapping
 * @param {*} app (koa app引用)
 */
const GetRouteMapping = router => {
  // router.use('/graphql', GraphqlRoute.routes())
  router.use('/rest', _restful2.default.routes(), _restful2.default.allowedMethods());
};

exports.default = GetRouteMapping;
//# sourceMappingURL=index.js.map
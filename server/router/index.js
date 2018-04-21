import UserRoute from './user'
import RestRoute from './restful'
import GraphqlRoute from './graphql'
import AssetsRuter from './assets'


/**
 * 获取RouteMapping
 * @param {*} app (koa app引用)
 */
const GetRouteMapping = router => {
  // 处理用户态路由
  router.use('/user',UserRoute.routes(), UserRoute.allowedMethods())
  // 处理rest接口路由
  router.use('/rest', RestRoute.routes(), RestRoute.allowedMethods())
  // 处理GraphQL接口路由
  router.use('/graphql', GraphqlRoute.routes(), GraphqlRoute.allowedMethods())
  // 处理文件上传接口
  router.use('/assets', AssetsRuter.routes(), AssetsRuter.allowedMethods())
}

export default GetRouteMapping

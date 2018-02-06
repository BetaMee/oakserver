import GraphqlRoute from './graphql'
import RestRoute from './restful'


/**
 * 获取RouteMapping
 * @param {*} app (koa app引用)
 */
const GetRouteMapping = router => {
  // router.use('/graphql', GraphqlRoute.routes())
  router.use('/rest', RestRoute.routes(), RestRoute.allowedMethods())
}

export default GetRouteMapping

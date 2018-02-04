// import GraphqlRoute from './graphql'
import RestRoute from './restful'


/**
 * 获取RouteMapping
 * @param {*} app (koa app引用)
 */
const GetRouteMapping = app => {
  // app.use(GraphqlRoute)
  app.use(RestRoute.routes())
}

export default GetRouteMapping

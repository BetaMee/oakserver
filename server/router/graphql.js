import Router from 'koa-router'
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa'
import graphQLConfig from '../graphql'

const GraphQLRouter = new Router()

// 查询数据入口
GraphQLRouter.get('/entry', graphqlKoa(graphQLConfig))
GraphQLRouter.post('/entry', graphqlKoa(graphQLConfig))
// graphiql调试模式
GraphQLRouter.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql/entry' }))

export default GraphQLRouter

import { makeExecutableSchema } from 'graphql-tools'
// 引入typeDefs
import rootTypeDefs from './schemas'
// 引入resolver
import rootResolvers from './resolvers'
// 引入Models
import * as DBModel from '../models'
// 引入工具函数
import * as utils from '../utils'

const graphQLSchema =  makeExecutableSchema({
  typeDefs: rootTypeDefs,
  resolvers: rootResolvers,
})

const graphQLConfig = {
  schema: graphQLSchema,
  context: {
    DBModel,
    utils
  },
}

export default graphQLConfig

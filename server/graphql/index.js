import { makeExecutableSchema } from 'graphql-tools'
// 引入typeDefs
import rootTypeDefs from './schemas'
// 引入resolver
import rootResolvers from './resolvers'
// 引入数据库操作对象
import { docClient } from '../config/aws'

const graphQLSchema =  makeExecutableSchema({
  typeDefs: rootTypeDefs,
  resolvers: rootResolvers,
})

const graphQLConfig = {
  schema: graphQLSchema,
  context: {
    docClient,
  },
}

export default graphQLConfig

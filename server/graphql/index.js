import { makeExecutableSchema } from 'graphql-tools'
// 引入typeDefs
import rootTypeDefs from './schemas'
// 引入resolver
import rootResolvers from './resolvers'
// 引入Models
import * as DBModel from '../models'

const graphQLSchema =  makeExecutableSchema({
  typeDefs: rootTypeDefs,
  resolvers: rootResolvers,
})

const graphQLConfig = {
  schema: graphQLSchema,
  context: {
    DBModel,
  },
}

export default graphQLConfig

// 引入各个子schema
import Article from './article'
import Author from './author'
import Archive from './archive'
// 查询
const RootQuery = `
  type Query {
    article(articleId: String): Article
    archive: Archive
  }
`
// getAllArticle: [Article]
// author(authorId: String!): Author
// archive(archiveId: String!): Archive

// 变更
const RootMutation = `

`
// 最终的顶层查询描述接口
const SchemaDefinition = `
  schema {
    query: Query
  }
`

const rootTypeDefs = [
  SchemaDefinition,
  RootQuery,
  Article,
  Author,
  Archive
]

export default rootTypeDefs

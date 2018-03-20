// 引入各个子schema
import Article from './article'
import Author from './author'
import Archive from './archive'
// 查询
const RootQuery = `
  type Query {
    # 获取某个Author下的信息
    author(authorId: String!): Author
    # 获取某个Archive下的数据
    archive(archiveId: String!): Archive
    # 获取某个Article下的数据
    article(articleId: String!): Article
    # 获取所有Articles，具有分页功能
    articles(limit: Int, offset: Int, sort: String): [Article]
    # 获取所有Authors
    authors: [Author]
    # 获取所有Archives
    archives: [Archive]
  }
`

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

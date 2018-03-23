// 引入各个子schema
import Article, { ArticleInput } from './article'
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
  type Mutation {
    # 创建一个新的文章
    createArticle(article: ArticleInput!): Article
    # 创建一个新作者
    # 创建一个新归档
  }
`
// 最终的顶层查询描述接口
const SchemaDefinition = `
  schema {
    query: Query,
    mutation: Mutation
  }
`

const rootTypeDefs = [
  SchemaDefinition,
  // 查询
  RootQuery,
  Article,
  Author,
  Archive,
  // 变更
  RootMutation,
  ArticleInput
]

export default rootTypeDefs

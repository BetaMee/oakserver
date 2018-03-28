// 引入各个子query schema
import Article from './article'
import Author from './author'
import Archive from './archive'
// 引入InputType
import InputTypes from './InputTypes'

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
    createAuthor(author: AuthorInput!): Author
    # 创建一个新归档
    createArchive(archive: ArchiveInput!): Archive
    # 更新一个文章
    updateArticle(articleId: String!, toUpdateArticle: ArticleInput!): Article
    # 更新一个作者
    updateAuthor(authorId: String!, toUpdateAuthor: AuthorInput!): Author
    # 更新一个归档
    updateArchive(archiveId: String!, toUpdateArchive: ArchiveInput!): Archive
    # 删除一个文章
    deleteArticle(articleId: String!): Article
    # 删除一个作者
    deleteAuthor(authorId: String!): Author
    # 删除一个归档
    deleteArchive(archiveId: String!): Archive
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
  InputTypes
]

export default rootTypeDefs

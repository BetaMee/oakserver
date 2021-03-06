import Archive from './archive'
import Author from './author'

/**
 * ArticleSchema
 */
const Article = `
  type Article {
    articleId: String!
    title: String
    content: String
    updatedAt: String
    createdAt: String
    isPublished: Boolean
    archive: Archive
    author: Author
  }
`

export default () => [Article, Archive, Author]
import Article from './article'
import Archive from './archive'

/**
 * AuthorSchema
 */
const Author = `
  type Author {
    authorId: String!
    createdAt: String
    updatedAt: String
    name: String
    gender: String
    avatar: String
    email: String
    social: String
    articles: [Article]!
    archives: [Archive]!
  }
`

export default () => [Author, Article, Archive]

import Article from './article'

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
    article: [Article]
  }
`

export default () => [Author, Article]

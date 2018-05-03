import Article from './article'
import Author from './author'

/**
 * ArchiveSchema
 */
const Archive = `
  type Archive {
    archiveId: String!
    attach: Author
    name: String
    updatedAt: String
    createdAt: String
    articles: [Article]!
  }
`

export default () => [Archive, Article, Author]

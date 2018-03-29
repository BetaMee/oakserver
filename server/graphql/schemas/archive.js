import Article from './article'

/**
 * ArchiveSchema
 */
const Archive = `
  type Archive {
    archiveId: String!
    name: String
    updatedAt: String
    createdAt: String
    articles: [Article]!
  }
`

export default () => [Archive, Article]

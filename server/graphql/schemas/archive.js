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
    article: [Article]
  }
`

export default () => [Archive, Article]

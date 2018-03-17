/**
 * ArchiveSchema
 */
const Archive = `
  type archive {
    archiveId: String!
    name: String
    updatedAt: String
    createdAt: String
    article: [Article]
  }
`

export default Archive

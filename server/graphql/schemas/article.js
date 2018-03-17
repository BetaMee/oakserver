/**
 * ArticleSchema
 */
const Article = `
  type article {
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

export default Article

const articleResolverMap = {
  Article: {
    // 解析archive字段
    archive: async (article, args, context) => {
      const { ArchiveModel } = context.DBModel
      const archiveId = article.archive
      const archive = await ArchiveModel.getByArchiveId(archiveId)
      return archive.Item
    },
    // 解析author字段
    author: async (article, args, context) => {
      const { AuthorModel } = context.DBModel
      const authorId = article.author
      const author = await AuthorModel.getByAuthorId(authorId)
      return author.Item
    }
  }
}

export default articleResolverMap

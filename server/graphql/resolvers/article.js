const articleResolverMap = {
  Article: {
    // 解析archive字段
    archive: async (article, args, context) => {
      const { ArchiveModel } = context.DBModel
      const archiveId = article.archive
      try {
        const archive = await ArchiveModel.getByArchiveId(archiveId)
        let Item = null
        if (archive.Item) {
          Item = archive.Item
        }
        return Item
      } catch(e) {
        console.log(e)
        return null
      }
    },
    // 解析author字段
    author: async (article, args, context) => {
      const { AuthorModel } = context.DBModel
      const authorId = article.author
      try {
        const author = await AuthorModel.getByAuthorId(authorId)
        let Item = null
        if (author.Item) {
          Item = author.Item
        }
        return Item
      } catch(e) {
        console.log(e)
        return null
      }
    }
  }
}

export default articleResolverMap

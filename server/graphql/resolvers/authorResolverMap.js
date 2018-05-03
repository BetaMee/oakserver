const authorResolverMap = {
  Author: {
    articles: async (author, args, context) => {
      const { ArticleModel } = context.DBModel
      const { authorId } = author
      // 通过authorId来查询对应文章
      try {
        const articles = await ArticleModel.queryByAuthorId(authorId)
        if (articles.Count === 0) {
          return []
        } else {
          return articles.Items
        }
      } catch(e) {
        console.log(e)
        return []
      }
    },
    archives: async (author, args, context) => {
      const { ArchiveModel } = context.DBModel
      const { authorId } = author
      // 通过authorId来查询对应文章
      try {
        const archives = await ArchiveModel.queryAllByAttachId(authorId)
        if (archives.Count === 0) {
          return []
        } else {
          return archives.Items
        }
      } catch(e) {
        console.log(e)
        return []
      }
    },
  }
}

export default authorResolverMap
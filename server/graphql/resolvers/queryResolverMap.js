const queryResolverMap = {
  // 根字段查询
  Query: {
    author: async (obj, args, context, info) => {
      const { AuthorModel } = context.DBModel
      const { authorId } = args
      try {
        const author = await AuthorModel.getByAuthorId(authorId)
        let Item = null
        if(author.Item) {
          Item = {
            name: author.Item.username,
            ...author.Item.profile,
          }
        }
        return Item
      } catch(e) {
        return null
      }
    },

    archive: async (obj, args, context, info) => {
      const { ArchiveModel } = context.DBModel
      const { archiveId } = args
      try {
        const archive = await ArchiveModel.getByArchiveId(archiveId)
        let Item = null
        if (archive.Item) {
          Item = archive.Item
        }
        return Item
      } catch(e) {
        return null
      }
    },

    article: async (obj, args, context, info) => {
      const { ArticleModel } = context.DBModel
      const { articleId } = args
      try {
        const article = await ArticleModel.getByArticleId(articleId)
        let Item = null
        if (article.Item) {
          Item = article.Item
        }
        return Item
      } catch(e) {
        return null
      }
    },

    articles: async (obj, args, context, info) => {

    },

    authors:  async (obj, args, context, info) => {

    },

    archives:  async (obj, args, context, info) => {

    },
  }
}

export default queryResolverMap

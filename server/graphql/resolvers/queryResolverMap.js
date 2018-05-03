const queryResolverMap = {
  // 根字段查询
  Query: {
    // 获取某个Archive下的数据
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
    // 通过attachId获取对应所有的archives
    attachedArchives:  async (obj, args, context, info) => {
      const { ArchiveModel } = context.DBModel
      const { attachId } = args
      try {
        const archives = await ArchiveModel.queryAllByAttachId(attachId)
        let Items
        if (archives.Count === 0) {
          Items = []
        } else {
          Items = archives.Items
        }
        return Items
      } catch(e) {
        return null
      }
    },

    // 获取某个Author下的信息
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
            authorId
          }
        }
        return Item
      } catch(e) {
        return null
      }
    },
    // 获取所有Authors
    allAuthors:  async (obj, args, context, info) => {
      const { AuthorModel } = context.DBModel
      try {
        const authors = await AuthorModel.getAll()
        let Items
        if (authors.Count === 0) {
          Items = []
        } else {
          Items = authors.Items.map(item => ({
            name: item.username,
            ...item.profile,
            authorId: item.userId
          }))
        }
        return Items
      } catch(e) {
        return []
      }
    },

    // 获取某个Article下的数据
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
    // 获取所有Articles，具有分页功能(TODO)
    allArticles: async (obj, args, context, info) => {
      const { ArticleModel } = context.DBModel
      try {
        const articles = await ArticleModel.getAll()
        let Items
        if (articles.Count === 0) {
          Items = []
        } else {
          Items = articles.Items
        }
        return Items
      } catch(e) {
        return []
      }
    },
    // 某归档类下有多少文章 
    articlesByArchiveId: async (obj, args, context, info) => {
      const { ArticleModel } = context.DBModel
      const { archiveId } = args      
      try {
        const articles = await ArticleModel.queryByArchiveId(archiveId)
        let Items
        if (articles.Count === 0) {
          Items = []
        } else {
          Items = articles.Items
        }
        return Items
      } catch(e) {
        return []
      }
    },
    // 某作者下有多少文章
    articlesByAuthorId: async (obj, args, context, info) => {
      const { ArticleModel } = context.DBModel
      const { authorId } = args      
      try {
        const articles = await ArticleModel.queryByAuthorId(authorId)
        let Items
        if (articles.Count === 0) {
          Items = []
        } else {
          Items = articles.Items
        }
        return Items
      } catch(e) {
        return []
      }
    }
  }
}

export default queryResolverMap

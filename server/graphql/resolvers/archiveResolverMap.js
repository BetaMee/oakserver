const archiveResolverMap = {
  Archive: {
    articles: async (archive, args, context) => {
      const { ArticleModel } = context.DBModel
      const { archiveId } = archive
      // 通过archiveId来查询对应文章
      try {
        const articles = await ArticleModel.queryByArchiveId(archiveId)
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
    attach: async (archive, args, context) => {
      const { AuthorModel } = context.DBModel
      const { attachId } = archive
      // 通过attachId来查询对应作者信息
      try {
        const author = await AuthorModel.getByAuthorId(attachId)
        // 返回的结果
        let Item = null
        if(author.Item) {
          Item = {
            name: author.Item.username,
            ...author.Item.profile,
          }
        }
        return Item
      } catch(e) {
        console.log(e)
        return null
      }
    }
  }
}

export default archiveResolverMap
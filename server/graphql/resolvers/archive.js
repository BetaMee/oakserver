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
    }
  }
}

export default archiveResolverMap
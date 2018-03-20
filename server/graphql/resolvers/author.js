const authorResolverMap = {
  Author: {
    articles: async (author, args, context) => {
      const { ArticleModel } = context.DBModel
      const { authorId } = author
      // 通过authorId来查询对应文章
      try {
        const result = await ArticleModel.queryByAuthorId(authorId)
        if (result.Count === 0) {
          return []
        } else {
          return result.Items
        }
      } catch(e) {
        console.log(e)
        return []
      }
    }
  }
}

export default authorResolverMap
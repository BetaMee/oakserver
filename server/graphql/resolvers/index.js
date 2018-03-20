import articleResolverMap from './article'
import archiveResolverMap from './archive'
import authorResolverMap from './author'

const rootResolverMap = {
  // 根字段查询
  Query: {
    author: async (obj, args, context, info) => {
      const { AuthorModel } = context.DBModel
      const { authorId } = args
      try {
        const author = await AuthorModel.getByAuthorId(authorId)
        let Item = null
        if (author.Item) {
          Item = author.Item
        }
        return Item
      } catch(e) {
        return null
      }
    },

    archive: async (obj, args, context, info) => {
      const { ArchiveModel } = context.DBModel
      const { archiveId } = args
      const archive = await ArchiveModel.getByArchiveId(archiveId)
      return archive.Item
    },

    article: async (obj, args, context, info) => {
      const { ArticleModel } = context.DBModel
      const { articleId } = args
      const article = await ArticleModel.getByArticleId(articleId)
      return article.Item
    },

    articles: async (obj, args, context, info) => {

    },

    authors:  async (obj, args, context, info) => {

    },

    archives:  async (obj, args, context, info) => {

    },
  }
}

export default Object.assign(
  rootResolverMap,
  articleResolverMap,
  archiveResolverMap,
  authorResolverMap
)

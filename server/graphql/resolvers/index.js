import articleResolverMap from './article'
import archiveResolverMap from './archive'
import authorResolverMap from './author'

const rootResolverMap = {
  // 根字段查询
  Query: {
    article: async (obj, args, context, info) => {
      const { ArticleModel } = context.DBModel
      const { articleId } = args
      const article = await ArticleModel.getByArticleId(articleId)
      return article.Item
    },

    archive: async (obj, args, context, info) => {
      const { ArchiveModel } = context.DBModel
      const { archiveId } = args
      const archive = await ArchiveModel.getByArchiveId(archiveId)
      return archive.Item
    },

    author: async (obj, args, context, info) => {
      const { AuthorModel } = context.DBModel
      const { authorId } = args
      const author = await AuthorModel.getByAuthorId(authorId)
      return author.Item
    }
  }
}

export default Object.assign(
  rootResolverMap,
  articleResolverMap,
  archiveResolverMap,
  authorResolverMap
)

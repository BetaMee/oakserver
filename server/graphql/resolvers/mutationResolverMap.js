const mutationResolverMap = {
  // Mutation
  Mutation: {
    // 创建操作
    createArticle: async (obj, args, context, info) => {
      const { utils } = context
      const { ArticleModel } = context.DBModel
      const { 
        title,
        content,
        author,
        archive
      } = args.article
      // 生成文章唯一id
      const articleId = utils.generateUniqueID()
      // 生成创建时间
      const currentDate = utils.getCurrentDate(new Date())
      const createdAt = currentDate
      const updatedAt = currentDate
      // 确定是否需要发布，默认不需要
      const isPublished =false
      // 写入数据库
      const newArticle = {
        articleId, title, content, author, archive, isPublished, createdAt, updatedAt
      }
      try {
        await ArticleModel.create(newArticle) //  返回空对象
        return newArticle
      } catch(e) {
        return null
      }
    },
    createAuthor: async (obj, args, context, info) => {
      const { utils } = context
      const { AuthorModel } = context.DBModel
      const { 
        name,
        gender,
        email,
        social,
        avatar
      } = args.author
      // 生成作者唯一ID
      const authorId = utils.generateUniqueID()
      // 生成时间戳
      const currentDate = utils.getCurrentDate(new Date())
      const createdAt = currentDate
      const updatedAt = currentDate
      // 写入数据库
      const newAuthor = {
        authorId, name, gender, email, social, avatar, createdAt, updatedAt
      }
      try {
        await AuthorModel.create(newAuthor)
        return newAuthor
      } catch(e) {
        return null
      }
    },
    createArchive: async (obj, args, context, info) => {
      const { utils } = context
      const { ArchiveModel } = context.DBModel
      const { 
        name,
      } = args.archive

      // 生成archive唯一ID
      const archiveId = utils.generateUniqueID()
      // 生成时间戳
      const currentDate = utils.getCurrentDate(new Date())
      const createdAt = currentDate
      const updatedAt = currentDate
      // 写入数据库
      const newArchive = {
        archiveId, name, createdAt, updatedAt
      }
      try {
        await ArchiveModel.create(newArchive)
        return newArchive
      } catch(e) {
        return null
      }
    },
    // 更新操作
    updateArticle: async (obj, args, context, info) => {
      const { utils } = context
      const { ArticleModel } = context.DBModel
      const { articleId } = args
      // 获取可以更新的字段
      const { 
        title,
        content,
        author,
        archive
      } = args.toUpdateParam
      // 更新updateAt
      const updatedAt = utils.getCurrentDate(new Date())
      // 更新的对象
      const toUpdateArticle = {
        title,
        content,
        archive,
        updatedAt
      }
      try {
        const updatedArticle = await ArticleModel.updateByArticleId(articleId, toUpdateArticle)
        return updatedArticle.Attributes
      } catch(e) {
        return null
      }
    },
    updateAuthor: async (obj, args, context, info) => {
      const { utils } = context
      const { AuthorModel } = context.DBModel
      const { authorId } = args
      // 获取可以更新的字段
      const { 
        name,
        gender,
        email,
        social,
        avatar
      } = args.toUpdateParam
      // 更新updateAt
      const updatedAt = utils.getCurrentDate(new Date())
      // 更新的对象
      const toUpdateAuthor = {
        name,
        gender,
        email,
        social,
        avatar,
        updatedAt
      }
      try {
        const updatedAuthor = await AuthorModel.updateByAuthorId(authorId, toUpdateAuthor)
        return updatedAuthor.Attributes
      } catch(e) {
        return null
      }
    },
    updateArchive: async (obj, args, context, info) => {
      const { utils } = context
      const { ArchiveModel } = context.DBModel
      const { archiveId } = args
      // 获取可以更新的字段
      const { 
        name,
      } = args.toUpdateParam
      // 更新updateAt
      const updatedAt = utils.getCurrentDate(new Date())
      // 更新的对象
      const toUpdateArchive = {
        name,
        updatedAt
      }
      try {
        const updatedArchive = await ArchiveModel.updateByArchiveId(archiveId, toUpdateArchive)
        return updatedArchive.Attributes
      } catch(e) {
        return null
      }
    },
    // 删除操作
    deleteArticle: async (obj, args, context, info) => {

    },
    deleteAuthor: async (obj, args, context, info) => {

    },
    deleteArchive: async (obj, args, context, info) => {

    }
  }
}

export default mutationResolverMap

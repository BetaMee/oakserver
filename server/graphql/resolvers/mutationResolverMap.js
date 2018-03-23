const mutationResolverMap = {
  // Mutation
  Mutation: {
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
    }
  }
}

export default mutationResolverMap

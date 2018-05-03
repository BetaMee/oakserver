const mutationResolverMap = {
  // Mutation
  Mutation: {
    // Article
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
    updateArticle: async (obj, args, context, info) => {
      const { utils } = context
      const { ArticleModel } = context.DBModel
      const { articleId } = args
      // 获取可以更新的字段
      const { 
        title,
        content,
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
    deleteArticle: async (obj, args, context, info) => {
      const { ArticleModel } = context.DBModel
      const { articleId } = args
      try {
        await ArticleModel.deleteByArticleId(articleId)
        return 'article has been deleted'
      } catch(e) {
        return e.message
      }
    },
    // Archive
    createArchive: async (obj, args, context, info) => {
      const { ArchiveModel } = context.DBModel
      const { utils } = context
      const { 
        name,
        attachId
      } = args.archive
      try {
        // 检查命名是否唯一
        const queriedArchive = await ArchiveModel.queryByArchiveName(name, attachId)
        if (queriedArchive.Count === 0) {
          // 生成archive唯一ID
          const archiveId = utils.generateUniqueID()
          // 生成时间戳
          const currentDate = utils.getCurrentDate(new Date())
          const createdAt = currentDate
          const updatedAt = currentDate
          // 写入数据库
          const newArchive = {
            archiveId, name, attachId, createdAt, updatedAt
          }
          await ArchiveModel.create(newArchive)
          return newArchive
        } else {
          throw new Error('archive name has been used')
        }
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
        attachId
      } = args.toUpdateParam
      // 更新updateAt
      const updatedAt = utils.getCurrentDate(new Date())
      // 更新的对象
      const toUpdateArchive = {
        name,
        updatedAt
      }
      try {
        // 判断是否是旧的名字
        const queriedArchive = await ArchiveModel.queryByArchiveName(name, attachId)
        if (queriedArchive.Count === 0) {
          const updatedArchive = await ArchiveModel.updateByArchiveId(archiveId, toUpdateArchive)
          return updatedArchive.Attributes
        } else {
          throw new Error('archive name has been used')
        }
      } catch(e) {
        return null
      }
    },
    deleteArchive: async (obj, args, context, info) => {
      const { ArchiveModel } = context.DBModel
      // 获取archiveId
      const { archiveId } = args
      try {
        await ArchiveModel.deleteByArchiveId(archiveId)
        return 'archive has been deleted'
      } catch(e) {
        return e.message
      }
    },
  
    // Author
    updateAuthor: async (obj, args, context, info) => {
      const { AuthorModel, UserModel } = context.DBModel
      const { utils } = context
      const { authorId } = args
      // 获取可以更新的字段
      const { 
        name,
        gender,
        email,
        social,
        avatar
      } = args.toUpdateParam
      try {
        const queriedUser = await UserModel.queryByUsername(name)
        if (queriedUser.Count === 0) {
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
          const updatedAuthor = await AuthorModel.updateByAuthorId(authorId, toUpdateAuthor)
          // 返回的结果
          let Item = null
          if(updatedAuthor.Attributes) {
            Item = {
              name: updatedAuthor.Attributes.username,
              ...updatedAuthor.Attributes.profile,
            }
          }
          return Item
        } else {
          throw new Error('author name has been used')
        }
      } catch(e) {
        return null
      }
    }
  }
}

export default mutationResolverMap

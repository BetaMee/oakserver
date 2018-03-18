const authorResolverMap = {
  Author: {
    article: (author, args, context) => {
      const { authorId } = author
      // 通过authorId来查询对应文章
    }
  }
}

export default authorResolverMap
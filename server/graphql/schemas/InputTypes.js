
const InputTypes = `
  # 创建文章的输入类型
  input ArticleInput {
    title: String!
    content: String!
    author: String!
    archive: String!
  }
  # 创建归档的输入类型
  input ArchiveInput {
    name: String!
    attachId: String!
  }

  # 更新文章
  input UpdateArticleInput {
    title: String
    content: String
    archive: String
  }
  # 更新作者
  input UpdateAuthorInput {
    name: String
    gender: String
    email: String
    social: String
    avatar: String
  }
  # 更新归档
  input UpdateArchiveInput {
    name: String    
  }
`

export default InputTypes
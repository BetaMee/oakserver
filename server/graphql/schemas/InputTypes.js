
const InputTypes = `
  # 创建文章的输入类型
  input ArticleInput {
    title: String!
    content: String!
    author: String
    archive: String!
  }
  # 创建作者的输入类型
  input AuthorInput {
    name: String!
    gender: String!
    email: String!
    social: String!
    avatar: String!
  }
  # 创建归档的输入类型
  input ArchiveInput {
    name: String!
    attachId: String!
  }
`

export default InputTypes
// 引入docClient操作数据库
import { docClient } from '../config/aws'

import { AUTHOR_TABLE } from '../config/tables'

const AuthorModel = {
  // 获取所有作者
  getAll: () => {

  },
  // 获取某一个作者
  getByAuthorId: (authorId) => {
    const params = {
      TableName: AUTHOR_TABLE,
      Key:{
        'authorId': authorId
      }
    }
    return docClient.get(params).promise()
  },
  // 添加一个作者
  create: (author) => {
    const params = {
      TableName: AUTHOR_TABLE,
      Item: author,
      ReturnValues: 'ALL_OLD'
    }
    return docClient.put(params).promise()
  },
  // 更新一个作者
  updateByAuthorId: (authorId, toUpdateAuthor) => {
    const {
      name,
      gender,
      email,
      social,
      avatar,
      updatedAt
    } = toUpdateAuthor
    // 更新参数
    const params = {
      TableName: AUTHOR_TABLE,
      Key:{
        'authorId' : authorId
      },
      ConditionExpression: '#id = :id',
      UpdateExpression: 'set #n = :n, #g = :g, #e = :e, #s = :s, #a = :a, #u = :u',
      ExpressionAttributeNames: {
        '#id': 'authorId',
        '#n': 'name',
        '#g': 'gender',
        '#e': 'email',
        '#s': 'social',
        '#a': 'avatar',
        '#u': 'updatedAt'
      },
      ExpressionAttributeValues:{
        ':id': authorId,
        ':n': name,
        ':g': gender,
        ':e': email,
        ':s': social,
        ':a': avatar,
        ':u': updatedAt
      },
      ReturnValues: 'ALL_NEW'
    }
    return docClient.update(params).promise()

  },
  // 删除一个作者
  deleteByAuthorId: (authorId) => {
    const params = {
      TableName: AUTHOR_TABLE,
      Key:{
        'authorId' : authorId
      },
    }
    return docClient.delete(params).promise()
  }
}

export { AuthorModel }
// 定义作者Schema
// const AuthorSchema = new Schema(
//   {
//     authorId: { type: String, required: true }, // 作者唯一ID
//     name: { type: String, required: true, max: 50 }, // 姓名
//     gender: { type: String, required: true, enum: ['G', 'F'], default: 'F' }, // 性别
//     email: { type: String, required: [true, 'can not be blank'], match: [/\S+@\S+\.\S+/, 'is invalid'] }, // 邮箱
//     social: [String], // 社交地址， 一个数组，比如github、twitter等
//     avatar: { type: String, required: true }, // 头像地址
//     article: [{ type: Schema.ObjectId, ref: 'Article', required: true }], // 该作者的文章
//   },
//   { // 添加时间戳
//     timestamps: {
//       createdAt: 'createdAt',
//       updateAt: 'updateAt'
//     }
//   }
// )

// const AuthorModel = Mongoose.model('Author', AuthorSchema)

// export { AuthorModel }

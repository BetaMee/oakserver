// 引入docClient操作数据库
import { docClient } from '../config/aws'

import { USER_TABLE } from '../config/tables'

const AuthorModel = {
  // 获取所有作者
  getAll: () => {
    const params = {
      TableName: USER_TABLE,
    }
    return docClient.scan(params).promise()  
  },
  // 获取某一个作者
  getByAuthorId: (authorId) => {
    const params = {
      TableName: USER_TABLE,
      Key:{
        'userId': authorId
      }
    }
    return docClient.get(params).promise()
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
      TableName: USER_TABLE,
      Key:{
        'userId' : authorId
      },
      ConditionExpression: '#id = :id',
      UpdateExpression: 'set #n = :n, #p.gender = :g, #p.email = :e, #p.social = :s, #p.avatar = :a, #p.updatedAt = :u',
      ExpressionAttributeNames: {
        '#id': 'userId',
        '#n': 'username',
        '#p': 'profile',
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

  }
}

export { AuthorModel }


import { docClient } from '../config/aws'

import { USER_TABLE } from '../config/tables'

const UserModel = {
  // 获取所有用户
  getAll: () => {

  },
  // 获取某一个用户
  getByUserId: (userId) => {
    const params = {
      TableName: USER_TABLE,
      Key:{
        'userId': userId
      }
    }
    return docClient.get(params).promise()
  },
  // 通过username插叙一个用户
  queryByUsername: (username) => {
    const params = {
      TableName : USER_TABLE,
      KeyConditionExpression: '#u = :u',
      ExpressionAttributeNames:{
        '#u': 'username'
      },
      ExpressionAttributeValues: {
        ':u': username
      }
    }
    return docClient.query(params).promise()
  },
  // 添加一个用户
  create: (user) => {
    const params = {
      TableName: USER_TABLE,
      Item: user,
      ReturnValues: 'ALL_OLD'
    }
    return docClient.put(params).promise()
  },
  // 通过userId一个用户（用户名、密码）
  updateByUserId: ({ userId, username, password }) => {
    // 更新参数
    const params = {
      TableName: USER_TABLE,
      Key:{
        'userId' :userId
      },
      ConditionExpression: '#id = :id',
      UpdateExpression: 'set #u = :u, #p = :p',
      ExpressionAttributeNames: {
        '#id': 'userId',
        '#u': 'username',
        '#p': 'password',
      },
      ExpressionAttributeValues:{
        ':id': userId,
        ':u': username,
        ':p': password,
      },
      ReturnValues: 'ALL_NEW'
    }
    return docClient.update(params).promise()

  },
  // 通过userId删除一个作者
  deletebyUserId: (userId) => {
    const params = {
      TableName: USER_TABLE,
      Key:{
        'userId' : userId
      },
    }
    return docClient.delete(params).promise()
  }
}

export { UserModel }

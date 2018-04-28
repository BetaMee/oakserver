import { docClient, s3Client } from '../config/aws'

import {
  ASSETS_TABLE
} from '../config/tables'

const AssetsModel = {
  // 上传图片
  uploadToS3: async (asset, assetName, archiveType) => {
    const assetkey = `${encodeURIComponent(archiveType)}/${assetName}`
    try {
      // 文件已存在，则返回错误
      await s3Client.headObject({Key: assetkey}).promise()
      return Promise.reject(new Error('file already exists'))
    } catch(e) {
      // 文件不存在并且是NotFound，表明是没有文件不存在而非其他错误类型，则存储
      if (e.code === 'NotFound') {
        return s3Client.upload({
          Key: assetkey,
          Body: asset,
          ACL: 'public-read'
        }).promise()
      } else {
        return Promise.reject(e)
      }
    }
  },
  // 删除资源
  deleteByFileKey: async (assetKey) => {
    try {
      // 文件已存在，则进行删除
      await s3Client.headObject({Key: assetKey}).promise()
      return s3Client.deleteObject({Key: assetKey}).promise()
    } catch(e) {
      // 文件不存在并且是NotFound
      if (e.code === 'NotFound') {
        return Promise.reject(new Error('file not found'))
      } else {
        return Promise.reject(e)
      }
    }
  },
  // 更新DynamDB数据库，指明归属
  addUserAssets: (assetItem) => {
    const params = {
      TableName: ASSETS_TABLE,
      Item: assetItem,
      ReturnValues: 'ALL_OLD'
    }
    return docClient.put(params).promise()
  },
  // 通过assetKey获取表中的对应资源
  fetchUserAssets: (assetKey) => {
    const params = {
      TableName: ASSETS_TABLE,
      Key:{
        'assetKey': assetKey
      }
    }
    return docClient.get(params).promise()
  },
  // 通过attachKey查询对应的资源
  queryAttachUserAssets: (attachKey, archiveType) => {
    const params = {
      TableName : ASSETS_TABLE,
      IndexName : 'attachIndex',
      FilterExpression: '#ar = :ar',
      KeyConditionExpression: '#at = :at',
      ExpressionAttributeNames:{
        '#at': 'attachKey',
        '#ar': 'archiveType'
      },
      ExpressionAttributeValues: {
        ':at': attachKey,
        ':ar': archiveType
      }
    }
    return docClient.query(params).promise()
  },
  // 更新表中的对应资源
  updateUserAssets: (assetKey, toUpdateAsset) => {
    const {
      assetName,
      description,
      updatedAt
    } = toUpdateAsset
    // 更新参数
    const params = {
      TableName: ASSETS_TABLE,
      Key:{
        'assetKey': assetKey
      },
      ConditionExpression: '#id = :id',
      UpdateExpression: 'set #t = :t, #d = :d, #u = :u',
      ExpressionAttributeNames: {
        '#id': 'assetKey',
        '#t': 'assetName',
        '#d': 'description',
        '#u': 'updatedAt',
      },
      ExpressionAttributeValues:{
        ':id': assetKey,
        ':t': assetName,
        ':d': description,
        ':u': updatedAt
      },
      ReturnValues: 'ALL_NEW'
    }
    return docClient.update(params).promise()
  },
  // 删除表中的对应资源
  deleteUserAssets: (assetKey) => {
    const params = {
      TableName: ASSETS_TABLE,
      Key:{
        'assetKey': assetKey
      },
    }
    return docClient.delete(params).promise()
  }
}

export { AssetsModel }

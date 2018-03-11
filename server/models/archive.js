import { docClient } from '../config/aws'

import {
  ARCHIVE_TABLE
} from '../config/tables'

const ArchiveModel = {
  // 获取所有Archive信息
  getAll: () => {

  },
  // 获取某一个archive信息
  getByArchiveId: (archiveId) => {
    const params = {
      TableName: ARCHIVE_TABLE,
      Key:{
        'archiveId': archiveId
      }
    }
    return docClient.get(params).promise()
  },
  // 新建一个archive信息
  create: (archive) => {
    const params = {
      TableName: ARCHIVE_TABLE,
      Item: archive,
      ReturnValues: 'ALL_OLD'
    }
    return docClient.put(params).promise()
  },
  // 根据archiveid更新信息
  updateByArchiveId: (archiveId, toUpdateArchive) => {
    const {
      name,
      updatedAt
    } = toUpdateArchive
    // 更新参数
    const params = {
      TableName: ARCHIVE_TABLE,
      Key:{
        'archiveId' : archiveId
      },
      ConditionExpression: '#id = :id',
      UpdateExpression: 'set #n = :n, #u = :u',
      ExpressionAttributeNames: {
        '#id': 'archiveId',
        '#n': 'name',
        '#u': 'updatedAt'
      },
      ExpressionAttributeValues:{
        ':id': archiveId,
        ':n': name,
        ':u': updatedAt
      },
      ReturnValues: 'ALL_NEW'
    }
    return docClient.update(params).promise()
  },
  // 根据archiveid删除信息
  deleteByArchiveId: (archiveId) => {
    const params = {
      TableName: ARCHIVE_TABLE,
      Key:{
        'archiveId' : archiveId
      },
    }
    return docClient.delete(params).promise()
  }
}

export { ArchiveModel }

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
      UpdateExpression: 'set #n = :n, #u = :u',
      ExpressionAttributeNames: {
        '#n': 'name',
        '#u': 'updatedAt'
      },
      ExpressionAttributeValues:{
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



// 定义归档Schema
// const ArchiveSchema = new Schema(
//   {
//     archiveId: { type: String, required: true }, // 归档的唯一archiveId
//     name: { type: String, required: true }, // 归档的名字
//     articles: [{ type: Schema.ObjectId, ref: 'Article', required: true }] // 所包含的文章
//   },
//   { // 添加时间戳
//     timestamps: {
//       createdAt: 'createdAt',
//       updateAt: 'updateAt'
//     }
//   }
// )

// const ArchiveModel = Mongoose.model('Archive', ArchiveSchema)

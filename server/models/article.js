// 引入docClient操作数据库
import { docClient } from '../config/aws'

import {
  ARTICLE_TABLE
} from '../config/tables'


const ArticleModel = {
  // 获取所有文章信息
  getAll: () => {
    
  },
  // 通过articleId获取文章信息
  getByArticleId: (articleId) => {
    const params = {
      TableName: ARTICLE_TABLE,
      Key:{
        'articleId': articleId
      }
    }
    return docClient.get(params).promise()
  },
  // 通过ArchiveId查询文章
  queryByArchiveId: (archiveId) => {
    const params = {
      TableName : ARTICLE_TABLE,
      IndexName : 'archiveIndex',
      KeyConditionExpression: '#a = :a',
      ExpressionAttributeNames:{
        '#a': 'archive'
      },
      ExpressionAttributeValues: {
        ':a': archiveId
      }
    }
    return docClient.query(params).promise()
  },
  // 通过AuthorId查询文章
  queryByAuthorId: (authorId) => {
    const params = {
      TableName : ARTICLE_TABLE,
      IndexName : 'authorIndex',
      KeyConditionExpression: '#a = :a',
      ExpressionAttributeNames:{
        '#a': 'author'
      },
      ExpressionAttributeValues: {
        ':a': authorId
      }
    }
    return docClient.query(params).promise()
  },
  // 新建文章，只能返回空对象，辣鸡
  create: (article) => {
    const params = {
      TableName: ARTICLE_TABLE,
      Item: article,
      ReturnValues: 'ALL_OLD'
    }
    return docClient.put(params).promise()
  },
  // 更新文章
  updateByArticleId: (articleId, toUpdateArticle) => {
    const {
      title,
      content,
      archive,
      updatedAt
    } = toUpdateArticle
    // 更新参数
    const params = {
      TableName: ARTICLE_TABLE,
      Key:{
        'articleId' : articleId
      },
      ConditionExpression: '#id = :id',
      UpdateExpression: 'set #t = :t, #c = :c, #a = :a, #u = :u',
      ExpressionAttributeNames: {
        '#id': 'articleId',
        '#t': 'title',
        '#c': 'content',
        '#a': 'archive',
        '#u': 'updatedAt'
      },
      ExpressionAttributeValues:{
        ':id': articleId,
        ':t': title,
        ':c': content,
        ':a': archive,
        ':u': updatedAt
      },
      ReturnValues: 'ALL_NEW'
    }
    return docClient.update(params).promise()
  },
  // 删除文章
  deleteByArticleId: (articleId) => {
    const params = {
      TableName: ARTICLE_TABLE,
      Key:{
        'articleId' : articleId
      },
    }
    return docClient.delete(params).promise()
  }
}

export { ArticleModel }

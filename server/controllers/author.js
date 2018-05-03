import {
  AuthorModel
} from '../models'

import * as utils from '../utils'
import Code from '../config/code'

/**
 * 获取所有作者
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchAuthors = async (ctx, next) => {
  try {
    const authors = await AuthorModel.getAll()
    let Items
    if (authors.Count === 0) {
      Items = []
    } else {
      Items = authors.Items.map(item => ({
        name: item.username,
        ...item.profile,
      }))
    }
    const result = {
      action: 'QUERY',
      message: Code.AUTHOR_GETALL_SUCCESS,
      code: Code.AUTHOR_GETALL_SUCCESS_CODE,
      success: true,
      items: Items
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: Code.AUTHOR_GETALL_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

/**
 * 获取某一个作者
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchAuthorById = async (ctx, next) => {
  const authorId = ctx.params.authorId
  try {
    const author = await AuthorModel.getByAuthorId(authorId)
    // 返回的结果
    let Item = null
    if(author.Item) {
      Item = {
        name: author.Item.username,
        ...author.Item.profile,
      }
    }
    const result = {
      action: 'GET',
      message: Code.AUTHOR_GET_SUCCESS,
      code: Code.AUTHOR_GET_SUCCESS_CODE,
      success: true,
      item: Item
    }
    ctx.body = result
  } catch (e) {
    const error = {
      message: e.message,
      code: Code.AUTHOR_GET_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

/**
 * 更新一个作者
 * @param {*} ctx 
 * @param {*} next 
 */
const updateAuthorById = async (ctx, next) => {
  // 获取作者ID
  const authorId = ctx.params.authorId
  // 更新updateAt
  const updatedAt = utils.getCurrentDate(new Date())
  // 获取可以更新的字段
  const {
    name,
    gender,
    email,
    social,
    avatar,
  } = ctx.request.body
  // 更新的对象
  const toUpdateAuthor = {
    name,
    gender,
    email,
    social,
    avatar,
    updatedAt
  }
  try {
    const updatedAuthor = await AuthorModel.updateByAuthorId(authorId, toUpdateAuthor)
    // 返回的结果
    let Item = null
    if(updatedAuthor.Attributes) {
      Item = {
        name: updatedAuthor.Attributes.username,
        ...updatedAuthor.Attributes.profile,
      }
    }
    const result = {
      action: 'UPDATE',
      message: Code.AUTHOR_UPDATE_SUCCESS,
      code: Code.AUTHOR_UPDATE_SUCCESS_CODE,
      success: true,
      item: Item
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: Code.AUTHOR_UPDATE_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

export {
  fetchAuthors, // 获取所有作者
  fetchAuthorById, // 获取某一个作者
  updateAuthorById, // 更新一个作者
}

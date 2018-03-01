import uuidv4 from 'uuid/v4'
import { AuthorModel } from '../models'
import { getNowTimeStr } from '../utils'


/**
 * 获取所有作者
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchAuthors = async (ctx, next) => {
  ctx.body = '<h1>fetchAuthors</h1>'
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
    if(author.Item && author.Item.length > 0) {
      Item = author.Item
    } else {
      Item = []
    }
    const result = {
      action: 'GET',
      message: 'get author successfully',
      success: true,
      item: Item
    }
    ctx.body = result
  } catch (e) {
    const error = {
      message: e.message,
      code: e.code,
      success: false
    }
    ctx.body = error
  }
}

/**
 * 添加一个作者
 * @param {*} ctx 
 * @param {*} next 
 */
const createAuthor = async (ctx, next) => {
  // 获取body中的数据
  const {
    name,
    gender,
    email,
    social,
    avatar,
  } = ctx.request.body
  // 生成作者唯一ID
  const authorId = uuidv4()
  // 生成时间戳
  const nowTime = getNowTimeStr(new Date())
  const createdAt = nowTime
  const updatedAt = nowTime
  // 写入数据库
  const newAuthor = {
    authorId, name, gender, email, social, avatar, createdAt, updatedAt
  }
  try {
    await AuthorModel.create(newAuthor)
    const result = {
      action: 'CREATE',
      message: 'author create successfully',
      success: true,
      item: newAuthor
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: e.code,
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
  const updatedAt = getNowTimeStr(new Date())
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
    const result = {
      action: 'UPDATE',
      message: 'author updated successfully',
      success: true,
      item: updatedAuthor.Attributes
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: e.code,
      success: false
    }
    ctx.body = error
  }
}


/**
 * 删除一个作者
 * @param {*} ctx 
 * @param {*} next 
 */
const deleteAuthorById = async (ctx, next) => {
  // 获取作者ID
  const authorId = ctx.params.authorId
  try {
    await AuthorModel.deleteByAuthorId(authorId)
    const result = {
      action: 'DELETE',
      message: 'author deleted successfully',
      success: true
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: e.code,
      success: false
    }
    ctx.body = error
  }
}


export {
  fetchAuthors, // 获取所有作者
  fetchAuthorById, // 获取某一个作者
  createAuthor, // 添加一个作者
  updateAuthorById, // 更新一个作者
  deleteAuthorById, // 删除一个作者
}

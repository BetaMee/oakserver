import {
  ArchiveModel
} from '../models'

import * as utils from '../utils'
import Code from '../config/code'

/**
 * 获取某作者下所有归档类
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchArchivesByAttachId = async (ctx, next) => {
  const { attachId } = ctx.params
  try {
    const archives = await ArchiveModel.queryAllByAttachId(attachId)
    let Items
    if (archives.Count === 0) {
      Items = []
    } else {
      Items = archives.Items
    }
    const result = {
      action: 'QUERY',
      message: Code.ARCHIVE_GETBYATTACH_SUCCESS,
      code: Code.ARCHIVE_GETBYATTACH_SUCCESS_CODE,
      success: true,
      items: Items
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: Code.ARCHIVE_GETBYATTACH_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

/**
 * 获取某一个归档
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchArchiveById = async (ctx, next) => {
  const archiveId = ctx.params.archiveId
  try {
    const archive = await ArchiveModel.getByArchiveId(archiveId)
    // 返回的结果
    let Item = null
    if(archive.Item) {
      Item = archive.Item
    }
    const result = {
      action: 'GET',
      message: Code.ARCHIVE_GET_SUCCESS,
      code: Code.ARCHIVE_GET_SUCCESS_CODE,
      success: true,
      item: Item
    }
    ctx.body = result
  } catch (e) {
    const error = {
      message: e.message,
      code: Code.ARCHIVE_GET_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

/**
 * 创建一个归档信息
 * @param {*} ctx 
 * @param {*} next 
 */
const createArchive = async (ctx, next) => {
  // 获取body中的数据
  const {
    name,
    attachId
  } = ctx.request.body
  try {
    // 检查命名是否唯一
    const queriedArchive = await ArchiveModel.queryByArchiveName(name, attachId)
    if (queriedArchive.Count === 0) {
      // 生成archive唯一ID
      const archiveId = utils.generateUniqueID()
      // 生成时间戳
      const currentDate = utils.getCurrentDate(new Date())
      const createdAt = currentDate
      const updatedAt = currentDate
      // 写入数据库
      const newArchive = {
        archiveId, name, attachId, createdAt, updatedAt
      }
      await ArchiveModel.create(newArchive)
      const result = {
        action: 'CREATE',
        message: Code.ARCHIVE_CREATE_SUCCESS,
        code: Code.ARCHIVE_CREATE_SUCCESS_CODE,
        success: true,
        item: newArchive
      }
      ctx.body = result
    } else {
      throw new Error('archive name has been used')
    }
  } catch(e) {
    const error = {
      message: e.message,
      code: Code.ARCHIVE_CREATE_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

/**
 * 更新一个归档信息
 * @param {*} ctx 
 * @param {*} next 
 */
const updateArchiveById = async (ctx, next) => {
  // 获取archiveId
  const archiveId = ctx.params.archiveId
  // 更新updateAt
  const updatedAt = utils.getCurrentDate(new Date())
  // 获取可以更新的字段
  const {
    name
  } = ctx.request.body
  // 更新的对象
  const toUpdateArchive = {
    name,
    updatedAt
  }
  try {
    const updatedArchive = await ArchiveModel.updateByArchiveId(archiveId, toUpdateArchive)
    const result = {
      action: 'UPDATE',
      message: Code.ARCHIVE_UPDATE_SUCCESS,
      code: Code.ARCHIVE_UPDATE_SUCCESS_CODE,
      success: true,
      item: updatedArchive.Attributes
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: Code.ARCHIVE_UPDATE_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}


/**
 * 删除一个归档信息
 * @param {*} ctx 
 * @param {*} next 
 */
const deleteArchiveById = async (ctx, next) => {
  // 获取archiveId
  const archiveId = ctx.params.archiveId
  try {
    await ArchiveModel.deleteByArchiveId(archiveId)
    const result = {
      action: 'DELETE',
      message: Code.ARCHIVE_DELETE_SUCCESS,
      code: Code.ARCHIVE_DELETE_SUCCESS_CODE,
      success: true
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: Code.ARCHIVE_DELETE_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

export {
  fetchArchivesByAttachId, // 获取某作者下的所有归档类
  fetchArchiveById, // 获取某一个归档
  createArchive, // 创建一个归档信息
  updateArchiveById, // 更新一个归档信息
  deleteArchiveById // 删除一个归档信息
}

import uuidv4 from 'uuid/v4'
import { ArchiveModel } from '../models'
import { getNowTimeStr } from '../utils'

/**
 * 获取所有归档类
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchArchives = async (ctx, next) => {

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
      message: 'get archive successfully',
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
 * 创建一个归档信息
 * @param {*} ctx 
 * @param {*} next 
 */
const createArchive = async (ctx, next) => {
  // 获取body中的数据
  const {
    name
  } = ctx.request.body
  // 生成archive唯一ID
  const archiveId = uuidv4()
  // 生成时间戳
  const nowTime = getNowTimeStr(new Date())
  const createdAt = nowTime
  const updatedAt = nowTime
  // 写入数据库
  const newArchive = {
    archiveId, name, createdAt, updatedAt
  }
  try {
    await ArchiveModel.create(newArchive)
    const result = {
      action: 'CREATE',
      message: 'archive create successfully',
      success: true,
      item: newArchive
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
 * 更新一个归档信息
 * @param {*} ctx 
 * @param {*} next 
 */
const updateArchiveById = async (ctx, next) => {
  // 获取archiveId
  const archiveId = ctx.params.archiveId
  // 更新updateAt
  const updatedAt = getNowTimeStr(new Date())
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
    console.log(updatedArchive)
    const result = {
      action: 'UPDATE',
      message: 'archive updated successfully',
      success: true,
      item: updatedArchive.Attributes
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
      message: 'archive deleted successfully',
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
  fetchArchives, // 获取所有归档类
  fetchArchiveById, // 获取某一个归档
  createArchive, // 创建一个归档信息
  updateArchiveById, // 更新一个归档信息
  deleteArchiveById // 删除一个归档信息
}

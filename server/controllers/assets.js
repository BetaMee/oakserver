import {
  AssetsModel
} from '../models'
import Code from '../config/code'
import accepts from '../config/accepts'
import * as utils from '../utils'

/**
 * 通过userId、archiveType获取asset table中的数据
 * @param {*} ctx 
 * @param {*} next 
 */
const fetchAssets = async (ctx, next) => {
  const {
    userId,
    archiveType
  } = ctx.params

  try {
    const assets = await AssetsModel.queryAttachUserAssets(userId, archiveType)
    let Items
    if (assets.Count === 0) {
      Items = []
    } else {
      Items = assets.Items
    }
    const result = {
      action: 'GET',
      message: Code.ASSET_GET_SUCCESS,
      code: Code.ASSET_GET_SUCCESS_CODE,
      success: true,
      item: Items
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: Code.ASSET_GET_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

/**
 * 上传图片
 * @param {*} ctx 
 * @param {*} next 
 */
const uploadImageAssets = async (ctx, next) => {
  const {
    originalname,
    mimetype,
    size,
    buffer
  }  = ctx.req.file
  const {
    userId
  } = ctx.req.body
  try {
    // 限制文件类型
    if (!accepts[accepts.__IMAGE__].includes(mimetype)) {
      throw(new Error('File type is not accepted'))
    }
    // 上传到S3中
    const uploadedAsset = await AssetsModel.uploadToS3(buffer, originalname, accepts.__IMAGE__)

    const assetItem = {
      attachKey: userId, // 文件归属
      url: uploadedAsset.Location, // 文件地址
      assetKey: utils.convertS3KeyToAssetKey(uploadedAsset.Key), // 文件在Bucket中的key
      assetName: originalname, // 文件原名
      assetType: mimetype, // 文件类型
      assetSize: size, // 文件尺寸
      archiveType: accepts.__IMAGE__, // 归档类型
      ETag: uploadedAsset.ETag // 文件的ETag标签
    }
    // 写入数据库
    await AssetsModel.addUserAssets(assetItem)
    // 响应结果
    const result = {
      action: 'UPLOAD',
      message: Code.ASSET_UPLOAD_SUCCESS,
      code: Code.ASSET_UPLOAD_SUCCESS_CODE,
      success: true,
      item: assetItem
    }
    ctx.body = result
  } catch (e) {
    const error = {
      message: e.message,
      code: Code.ASSET_UPLOAD_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

/**
 * 上传附件
 * @param {*} ctx 
 * @param {*} next 
 */
const uploadFileAssets = async (ctx, next) => {
  const {
    originalname,
    mimetype,
    size,
    buffer
  }  = ctx.req.file
  const {
    userId
  } = ctx.req.body
  try {
    // 限制文件类型
    if (!accepts[accepts.__FILE__].includes(mimetype)) {
      throw(new Error('File type is not accepted'))
    }
    // 上传到S3中
    const uploadedAsset = await AssetsModel.uploadToS3(buffer, originalname, accepts.__FILE__)

    const assetItem = {
      attachKey: userId, // 文件归属
      url: uploadedAsset.Location, // 文件地址
      assetKey: utils.convertS3KeyToAssetKey(uploadedAsset.Key), // 文件在Bucket中的key
      assetName: originalname, // 文件原名
      assetType: mimetype, // 文件类型
      assetSize: size, // 文件尺寸
      archiveType: accepts.__FILE__, // 归档类型
      ETag: uploadedAsset.ETag // 文件的ETag标签
    }
    // 写入数据库
    await AssetsModel.addUserAssets(assetItem)
    // 响应结果
    const result = {
      action: 'UPLOAD',
      message: Code.ASSET_UPLOAD_SUCCESS,
      code: Code.ASSET_UPLOAD_SUCCESS_CODE,
      success: true,
      item: assetItem
    }
    ctx.body = result
  } catch (e) {
    const error = {
      message: e.message,
      code: Code.ASSET_UPLOAD_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

/**
 * 上传视频资料
 * @param {*} ctx 
 * @param {*} next 
 */
const uploadVdieoAssets = async (ctx, next) => {
  const {
    originalname,
    mimetype,
    size,
    buffer
  }  = ctx.req.file
  const {
    userId
  } = ctx.req.body
  try {
    // 限制文件类型
    if (!accepts[accepts.__VIDEO__].includes(mimetype)) {
      throw(new Error('File type is not accepted'))
    }
    // 上传到S3中
    const uploadedAsset = await AssetsModel.uploadToS3(buffer, originalname, accepts.__VIDEO__)

    const assetItem = {
      attachKey: userId, // 文件归属
      url: uploadedAsset.Location, // 文件地址
      assetKey: utils.convertS3KeyToAssetKey(uploadedAsset.Key), // 文件在Bucket中的key
      assetName: originalname, // 文件原名
      assetType: mimetype, // 文件类型
      assetSize: size, // 文件尺寸
      archiveType: accepts.__VIDEO__, // 归档类型
      ETag: uploadedAsset.ETag // 文件的ETag标签
    }
    // 写入数据库
    await AssetsModel.addUserAssets(assetItem)
    // 响应结果
    const result = {
      action: 'UPLOAD',
      message: Code.ASSET_UPLOAD_SUCCESS,
      code: Code.ASSET_UPLOAD_SUCCESS_CODE,
      success: true,
      item: assetItem
    }
    ctx.body = result
  } catch (e) {
    const error = {
      message: e.message,
      code: Code.ASSET_UPLOAD_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

/**
 * 上传音频资料
 * @param {*} ctx 
 * @param {*} next 
 */
const uploadAudioAssets = async (ctx, next) => {
  const {
    originalname,
    mimetype,
    size,
    buffer
  }  = ctx.req.file
  const {
    userId
  } = ctx.req.body
  try {
    // 限制文件类型
    if (!accepts[accepts.__AUDIO__].includes(mimetype)) {
      throw(new Error('File type is not accepted'))
    }
    // 上传到S3中
    const uploadedAsset = await AssetsModel.uploadToS3(buffer, originalname, accepts.__AUDIO__)

    const assetItem = {
      attachKey: userId, // 文件归属
      url: uploadedAsset.Location, // 文件地址
      assetKey: utils.convertS3KeyToAssetKey(uploadedAsset.Key), // 文件在Bucket中的key
      assetName: originalname, // 文件原名
      assetType: mimetype, // 文件类型
      assetSize: size, // 文件尺寸
      archiveType: accepts.__AUDIO__, // 归档类型
      ETag: uploadedAsset.ETag // 文件的ETag标签
    }
    // 写入数据库
    await AssetsModel.addUserAssets(assetItem)
    // 响应结果
    const result = {
      action: 'UPLOAD',
      message: Code.ASSET_UPLOAD_SUCCESS,
      code: Code.ASSET_UPLOAD_SUCCESS_CODE,
      success: true,
      item: assetItem
    }
    ctx.body = result
  } catch (e) {
    const error = {
      message: e.message,
      code: Code.ASSET_UPLOAD_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

/**
 * 上传头像
 * @param {*} ctx 
 * @param {*} next 
 */
const uploadAvatarAssets = async (ctx, next) => {
  const {
    originalname,
    mimetype,
    size,
    buffer
  }  = ctx.req.file
  const {
    userId
  } = ctx.req.body
  try {
    // 限制文件类型
    if (!accepts[accepts.__AVATAR__].includes(mimetype)) {
      throw(new Error('File type is not accepted'))
    }
    // 上传到S3中
    const uploadedAsset = await AssetsModel.uploadToS3(buffer, originalname, accepts.__AVATAR__)

    const assetItem = {
      attachKey: userId, // 文件归属
      url: uploadedAsset.Location, // 文件地址
      assetKey: utils.convertS3KeyToAssetKey(uploadedAsset.Key), // 文件在Bucket中的key
      assetName: originalname, // 文件原名
      assetType: mimetype, // 文件类型
      assetSize: size, // 文件尺寸
      archiveType: accepts.__AVATAR__, // 归档类型
      ETag: uploadedAsset.ETag // 文件的ETag标签
    }
    // 写入数据库
    await AssetsModel.addUserAssets(assetItem)
    // 响应结果
    const result = {
      action: 'UPLOAD',
      message: Code.ASSET_UPLOAD_SUCCESS,
      code: Code.ASSET_UPLOAD_SUCCESS_CODE,
      success: true,
      item: assetItem
    }
    ctx.body = result
  } catch (e) {
    const error = {
      message: e.message,
      code: Code.ASSET_UPLOAD_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

/**
 * 通过assetkey删除资源
 * @param {*} ctx 
 * @param {*} next 
 */
const deleteAssetsByKey = async (ctx, next) => {
  // 获取要删除的资源key
  const S3Key = ctx.params.assetkey
  const assetkey = utils.convertS3KeyToAssetKey(S3Key)
  try {
    // 删除s3中的数据
    await AssetsModel.deleteByFileKey(S3Key)
    // 删除数据库中的项目
    await AssetsModel.deleteUserAssets(assetkey)
    const result = {
      action: 'DELETE',
      message: Code.ASSET_DELETE_SUCCESS,
      code: Code.ASSET_DELETE_SUCCESS_CODE,
      success: true
    }
    ctx.body = result
  } catch(e) {
    const error = {
      message: e.message,
      code: Code.ASSET_DELETE_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

export {
  fetchAssets,
  uploadImageAssets,
  uploadFileAssets,
  uploadVdieoAssets,
  uploadAudioAssets,
  uploadAvatarAssets,
  deleteAssetsByKey
}

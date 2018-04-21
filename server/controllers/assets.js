import {
  AssetsModel
} from '../models'
import Code from '../config/code'
import accepts from '../config/accepts'

const uploadImageAssets = async (ctx, next) => {
  const {
    originalname,
    mimetype,
    buffer
  }  = ctx.req.file
  // 限制文件类型
  
  try {
    if (!accepts['image'].includes(mimetype)) {
      throw(new Error('File type is not accepted'))
    }
    const uploadedFile = await AssetsModel.uploadImage(buffer, originalname)
    const fileItem = {
      url: uploadedFile.Location, // 文件地址
      fileKey: uploadedFile.Key, // 文件在Bucket中的key
      fileName: originalname, // 文件原名
      fileType: mimetype // 文件类型
    }
    // 写入数据库
    
    // 响应结果
    const result = {
      action: 'UPLOAD',
      message: Code.ASSET_UPLOAD_SUCCESS,
      code: Code.ASSET_UPLOAD_SUCCESS_CODE,
      success: true,
      item: fileItem
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

const uploadFileAssets = async (ctx, next) => {

}

const uploadVdieoAssets = async (ctx, next) => {

}

const uploadAduioAssets = async (ctx, next) => {

}

const uploadAvatarAssets = async (ctx, next) => {

}

const deleteAssetsByKey = async (ctx, next) => {
  // 获取要删除的资源key
  const assetskey = ctx.params.assetskey
  try {
    await AssetsModel.deleteByFileKey(assetskey)
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
  uploadImageAssets,
  uploadFileAssets,
  uploadVdieoAssets,
  uploadAduioAssets,
  uploadAvatarAssets,
  deleteAssetsByKey
}

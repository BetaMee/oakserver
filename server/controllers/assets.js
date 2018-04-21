import {
  AssetsModel
} from '../models'
import Code from '../config/code'

const uploadImageAssets = async (ctx, next) => {
  console.log(ctx.req.file)
  const {
    originalname,
    mimetype,
    buffer
  }  = ctx.req.file
  try {
    const uploadedFile = await AssetsModel.uploadImage(buffer, originalname)
    console.log(uploadedFile)
    const result = {
      url: 'uploadedFile',
    }
    ctx.body = result
  } catch (e) {
    const error = {
      message: e.message,
      code: Code.AUTHOR_UPDATE_ERROR_CODE,
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

const deleteFile = async (ctx, next) => {

}

const updateFile = async (ctx, next) => {

}

export {
  uploadImageAssets,
  uploadFileAssets,
  uploadVdieoAssets,
  uploadAduioAssets,
  uploadAvatarAssets,
  deleteFile,
  updateFile
}

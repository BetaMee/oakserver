import Router from 'koa-router'
import multer from 'koa-multer'

const storage = multer.memoryStorage()
const upload = multer({ storage })

import {
  uploadImageAssets,
  uploadFileAssets,
  uploadVdieoAssets,
  uploadAduioAssets,
  uploadAvatarAssets,
  deleteAssetsByKey
} from '../controllers'

const AssetsRuter = Router()

AssetsRuter
  // 上传图片
  .post('/upload/image', upload.single('image'), uploadImageAssets)
  // 上传文件
  .post('/upload/file', upload.single('file'), uploadFileAssets)
  // 上传视频文件
  .post('/upload/video', upload.single('video'), uploadVdieoAssets)
  // 上传音频
  .post('/upload/aduio', upload.single('aduio'), uploadAduioAssets)
  // 上传头像
  .post('/upload/avatar', upload.single('avatar'), uploadAvatarAssets)
  // 删除文件
  .del('/delete/:assetskey', deleteAssetsByKey)

export default AssetsRuter

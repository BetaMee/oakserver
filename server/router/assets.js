import Router from 'koa-router'
import multer from 'koa-multer'

const storage = multer.memoryStorage()
const upload = multer({ storage })

import {
  fetchAssets,
  uploadImageAssets,
  uploadFileAssets,
  uploadVdieoAssets,
  uploadAudioAssets,
  uploadAvatarAssets,
  deleteAssetsByKey,
  updateAssetsByKey
} from '../controllers'

const AssetsRuter = Router()

AssetsRuter
  // 获取所属资源
  .get('/:archiveType/:userId', fetchAssets)
  // 更新资源
  .put('/update/:assetkey', updateAssetsByKey)
  // 删除文件
  .del('/delete/:assetkey', deleteAssetsByKey)
  // 上传图片
  .post('/upload/image', upload.single('image'), uploadImageAssets)
  // 上传文件
  .post('/upload/file', upload.single('file'), uploadFileAssets)
  // 上传视频文件
  .post('/upload/video', upload.single('video'), uploadVdieoAssets)
  // 上传音频
  .post('/upload/audio', upload.single('audio'), uploadAudioAssets)
  // 上传头像
  .post('/upload/avatar', upload.single('avatar'), uploadAvatarAssets)

export default AssetsRuter

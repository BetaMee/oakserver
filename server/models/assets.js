import { docClient, s3Client } from '../config/aws'

const IMAGE_FOLDER = 'images'
const FILE_FOLDER = 'files'
const VIDEO_FOLDER = 'videos'
const AUDIO_FOLDER = 'audios'
const AVATAR_FOLDER = 'avatars'

const AssetsModel = {
  // 上传图片
  uploadImage: async (image, imageName) => {
    const fileKey = `${encodeURIComponent(IMAGE_FOLDER)}/${imageName}`
    try {
      // 文件已存在，则返回错误
      await s3Client.headObject({Key: fileKey}).promise()
      return Promise.reject(new Error('file already exists'))
    } catch(e) {
      // 文件不存在并且是NotFound，表明是没有文件不存在而非其他错误类型，则存储
      if (e.code === 'NotFound') {
        return s3Client.upload({
          Key: fileKey,
          Body: image,
          ACL: 'public-read'
        }).promise()
      } else {
        return Promise.reject(e)
      }
    }
  },
  // 上传文件
  uploadFile: async (file, fileName) => {
    const fileKey = `${encodeURIComponent(FILE_FOLDER)}/${fileName}`
    try {
      // 文件已存在，则返回错误
      await s3Client.headObject({Key: fileKey}).promise()
      return Promise.reject(new Error('file already exists'))
    } catch(e) {
      // 文件不存在并且是NotFound，表明是没有文件不存在而非其他错误类型，则存储
      if (e.code === 'NotFound') {
        return s3Client.upload({
          Key: fileKey,
          Body: file,
          ACL: 'public-read'
        }).promise()
      } else {
        return Promise.reject(e)
      }
    }
  },
  // 上传视频
  uploadVdieo: async (video, videoName) => {
    const fileKey = `${encodeURIComponent(VIDEO_FOLDER)}/${videoName}`
    try {
      // 文件已存在，则返回错误
      await s3Client.headObject({Key: fileKey}).promise()
      return Promise.reject(new Error('file already exists'))
    } catch(e) {
      // 文件不存在并且是NotFound，表明是没有文件不存在而非其他错误类型，则存储
      if (e.code === 'NotFound') {
        return s3Client.upload({
          Key: fileKey,
          Body: video,
          ACL: 'public-read'
        }).promise()
      } else {
        return Promise.reject(e)
      }
    }
  },
  // 上传音频
  uploadAudio: async (audio, audioName) => {
    const fileKey = `${encodeURIComponent(AUDIO_FOLDER)}/${audioName}`
    try {
      // 文件已存在，则返回错误
      await s3Client.headObject({Key: fileKey}).promise()
      return Promise.reject(new Error('file already exists'))
    } catch(e) {
      // 文件不存在并且是NotFound，表明是没有文件不存在而非其他错误类型，则存储
      if (e.code === 'NotFound') {
        return s3Client.upload({
          Key: fileKey,
          Body: audio,
          ACL: 'public-read'
        }).promise()
      } else {
        return Promise.reject(e)
      }
    }
  },
  // 上传头像
  uploadAvatar: async (avatar, avatarName) => {
    const fileKey = `${encodeURIComponent(AVATAR_FOLDER)}/${avatarName}`
    try {
      // 文件已存在，则返回错误
      await s3Client.headObject({Key: fileKey}).promise()
      return Promise.reject(new Error('file already exists'))
    } catch(e) {
      // 文件不存在并且是NotFound，表明是没有文件不存在而非其他错误类型，则存储
      if (e.code === 'NotFound') {
        return s3Client.upload({
          Key: fileKey,
          Body: avatar,
          ACL: 'public-read'
        }).promise()
      } else {
        return Promise.reject(e)
      }
    }
  },
  // 删除资源
  deleteByFileKey: async (assetsKey) => {
    try {
      // 文件已存在，则进行删除
      await s3Client.headObject({Key: assetsKey}).promise()
      return s3Client.deleteObject({Key: assetsKey}).promise()
    } catch(e) {
      // 文件不存在并且是NotFound
      if (e.code === 'NotFound') {
        return Promise.reject(new Error('file not found'))
      } else {
        return Promise.reject(e)
      }
    }
  },
  // 更新DynamDB数据库，指明归属
  addUserAssets: () => {

  },
  // 获取表中的对应资源
  fetchUserAssets: () => {

  },
  // 删除表中的对应资源
  deleteUserAssets: () => {

  },
  // 更新表中的对应资源
  updateUserAssets: () => {

  }
}

export { AssetsModel }

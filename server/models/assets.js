import { s3Client } from '../config/aws'

const IMAGE_FOLDER = 'images'
const FILE_FOLDER = 'files'
const VIDEO_FOLDER = 'videos'
const AUDIO_FOLDER = 'audios'
const AVATAR_FOLDER = 'avatars'


const AssetsModel = {
  // 上传图片
  uploadImage: (image, imageName) => {
    const fileKey = `${encodeURIComponent(IMAGE_FOLDER)}/${imageName}`
    return s3Client.upload({
      Key: fileKey,
      Body: image,
      ACL: 'public-read'
    }).promise()
  },
  // 删除图片
  deleteImage: (imageName) => {
    const fileKey = `${encodeURIComponent(IMAGE_FOLDER)}/${imageName}`    
    return s3Client.deleteObject({Key: fileKey}).promise()
  },
  // 上传文件
  uploadFile: (file, fileName) => {
    const fileKey = `${encodeURIComponent(FILE_FOLDER)}/${fileName}`
    return s3Client.upload({
      Key: fileKey,
      Body: file,
      ACL: 'public-read'
    }).promise()
  },
  // 删除文件
  deleteFile: () => {

  },
  // 上传视频
  uploadVdieo: (video, videoName) => {
    const fileKey = `${encodeURIComponent(VIDEO_FOLDER)}/${videoName}`
    return s3Client.upload({
      Key: fileKey,
      Body: video,
      ACL: 'public-read'
    }).promise()
  },
  // 删除视频
  deleteVdieo: () => {

  },
  // 上传音频
  uploadAudio: (audio, audioName) => {
    const fileKey = `${encodeURIComponent(AUDIO_FOLDER)}/${audioName}`
    return s3Client.upload({
      Key: fileKey,
      Body: audio,
      ACL: 'public-read'
    }).promise()
  },
  // 删除音频
  deleteAudio: () => {

  },
  // 上传头像
  uploadAvatar: (avatar, avatarName) => {
    const fileKey = `${encodeURIComponent(AVATAR_FOLDER)}/${avatarName}`
    return s3Client.upload({
      Key: fileKey,
      Body: avatar,
      ACL: 'public-read'
    }).promise()
  },
  // 删除头像
  deleteAvatar: () => {

  },
}

export { AssetsModel }

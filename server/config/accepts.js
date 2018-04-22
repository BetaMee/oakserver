export default {
  // 支持的文件类型
  images: [
    'image/jpeg',
    'image/jpg',
    'image/png'
  ],
  files: [
    'application/msword', // .doc
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
    'application/vnd.ms-powerpoint', // .ppt
    'application/vnd.openxmlformats-officedocument.presentationml.presentation', // .pptx
    'application/vnd.ms-excel', // .xls
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlxs
    'application/pdf', // .pdf
  
  ],
  videos: [
    'video/mp4' // .mp4
  ],
  audios: [

  ],
  avatars: [
    'image/jpeg',
    'image/jpg',
    'image/png'
  ],
  // 文件的归档类型
  __IMAGE__: 'images',

  __FILE__: 'files',

  __VIDEO__: 'videos',

  __AUDIO__: 'audios',

  __AVATAR__: 'avatars'
}
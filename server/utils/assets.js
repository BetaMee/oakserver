import { 
  generateUniqueID
} from './uuid'

/**
 * 将s3key解析为assetKey
 * @param {*} S3Key 
 */
const convertS3KeyToAssetKey = (S3Key) => {
  return encodeURIComponent(S3Key)
}

/**
 * 将assetkey还原为s3key
 * @param {*} assetKey 
 */
const convertAssetKeyToS3Key = (assetKey) => {
  return decodeURIComponent(assetKey)
}

const convertOriginNameToUnique = (ariginalName) => {
  const extension = /\.[a-z]{2,}$/.exec(ariginalName)[0]
  if (extension) {
    return `${generateUniqueID()}${extension}`
  } else {
    // 没匹配到，为null
    return `${generateUniqueID()}`
  }
}

export {
  convertS3KeyToAssetKey,
  convertAssetKeyToS3Key,
  convertOriginNameToUnique
}

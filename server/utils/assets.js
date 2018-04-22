
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

export {
  convertS3KeyToAssetKey,
  convertAssetKeyToS3Key
}

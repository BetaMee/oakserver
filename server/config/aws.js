import AWS from 'aws-sdk'
import { StoreBucketName } from './tables'

// dynamodb本地和线上测试endpoint，现在不需要指定，否则和s3冲突
const endpointUrl = process.env.NODE_ENV === 'production'
  ? 'https://dynamodb.ap-northeast-1.amazonaws.com'
  : 'http://localhost:8000'

AWS.config.update({
  region: 'ap-northeast-1',
  // endpoint: endpointUrl
})
// 设置AWS SDK支持Promise
AWS.config.setPromisesDependency(global.Promise)

// docClient操纵数据库
const docClient = new AWS.DynamoDB.DocumentClient({
  convertEmptyValues: true // intersting issuse: https://github.com/aws/aws-sdk-js/issues/833
})
// s3Client操作S3存储
const s3Client = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {
    Bucket: StoreBucketName
  }
})

export {
  docClient,
  s3Client
}

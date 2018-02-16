import AWS from 'aws-sdk'

const endpointUrl = process.env.NODE_ENV === 'production'
  ? 'https://dynamodb.ap-northeast-1.amazonaws.com'
  : 'http://localhost:8000'

AWS.config.update({
  region: 'ap-northeast-1',
  endpoint: endpointUrl
})
// 设置AWS SDK支持Promise
AWS.config.setPromisesDependency(global.Promise)

// docClient操纵数据库
const docClient = new AWS.DynamoDB.DocumentClient()

export {
  docClient
}
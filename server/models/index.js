import Mongoose from 'mongoose'
import config from '../config'

// Mongoose使用全局Promise
Mongoose.Promise = global.Promise

// 导出Models
export * from './article'
export * from './author'
export * from './archive'

// 连接mongodb
export const database = () => {
  Mongoose.set('debug', true)

  Mongoose.connect(config.dbPath)

  Mongoose.once('open', () => {
    console.log('we have connected mongodb')
  })

  Mongoose.connection.on('disconnected', () => {
    Mongoose.connect(config.dbPath)
  })
  Mongoose.connection.on('error', err => {
    console.error(err)
  })

  Mongoose.connection.on('open', async () => {
    console.log('Connected to MongoDB ', config.dbPath)
  })
}
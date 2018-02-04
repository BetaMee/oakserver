import Mongoose from 'mongoose'
import config from '../config'

// 导出Models
export * from './models/article'
export * from './models/author'

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
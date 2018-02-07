import Mongoose from 'mongoose'
import config from '../config'

// Mongoose使用全局Promise
Mongoose.Promise = global.Promise

// 连接mongodb
export default () => {
  // Mongoose.set('debug', true)

  Mongoose.connect(config.dbpath)

  Mongoose.connection.once('open', () => {
    console.log('we have connected mongodb')
  })

  Mongoose.connection.on('disconnected', () => {
    Mongoose.connect(config.dbPath)
  })
  Mongoose.connection.on('error', err => {
    console.error(err)
  })

}
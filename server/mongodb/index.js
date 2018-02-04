import Mongoose from 'mongoose'
import config from '../config'


// 连接mongodb
export const database = () => {
  Mongoose.set('debug', true)

  Mongoose.connect(config.dbPath)

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
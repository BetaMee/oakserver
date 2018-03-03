import Router from 'koa-router'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'

import {
  JWT_SECRECT,
  CRYPTO_SECRET
} from '../config/secret'
import { UserModel } from '../models'

const UserRoute = Router()

UserRoute
  // 登录
  .post('/login', async (ctx, next) => {
    const {
      username, // 用户名
      password // 密码
    } = ctx.request.body
    // 响应
    let response = null
    // 验证是否是已注册用户
    try {
      const result = await UserModel.queryByUsername(username)
      const existsUser = result.Items[0]
      if (existsUser) {
        // 验证密码是否正确
        const HashPassword = crypto
          .createHmac('sha256', CRYPTO_SECRET)
          .update(password)
          .digest('hex')
        if (existsUser.password === HashPassword) {
          // 生成TOKEN
          const token = jwt.sign(
            { username: existsUser.username },
            JWT_SECRECT,
            { expiresIn: '1h' }
          )
          // 密码正确，成功登录
          response = {
            message: 'login successfully!',
            success: true,
            code: '10010',
            token: token,
            profileId: existsUser.profileId // 用户profile信息ID
          }
        } else {
          // 密码不正确
          response = {
            message: 'password is not correct',
            success: false,
            code: '10011',
          }
        }
      } else {
        // 用户不存在
        response = {
          message: 'user is not exist!',
          success: false,
          code: '10012',
        }
      }
      // 返回响应内容
      ctx.body = response 
    } catch(e) {
      // 查询有误
      const error = {
        message: e.message,
        code: '10013',
        success: false
      }
      ctx.body = error
    }
  })
  // 注销
  .post('/logout', async (ctx, next) => {

  })
  // 注册
  .post('/register', async (ctx, next) => {

  })


export default UserRoute

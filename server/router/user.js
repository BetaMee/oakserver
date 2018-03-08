import Router from 'koa-router'
import jwt from 'jsonwebtoken'

import {
  userRegister,
  userLogin,
  userLogout
} from '../controllers'

const UserRoute = Router()

UserRoute
  // 登录
  .post('/login', userLogin)
  // 注销
  .post('/logout', userLogout)
  // 注册
  .post('/register', userRegister)

  .get('/test', async (ctx, body) => {
    // console.log(ctx.state)
    const token = ctx.header.authorization
    ctx.body = token
  })
  .get('/test1', async (ctx, body) => {
    console.log(ctx.state.user)
    ctx.body = 'token'
  })

export default UserRoute

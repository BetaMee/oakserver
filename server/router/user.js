import Router from 'koa-router'

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
  // 删号
  // .post('/delete', userDelete)

export default UserRoute

import jwtKoa from 'koa-jwt'

import { JWT_SECRECT } from '../config/secret'

import { UserModel } from '../models'

export default ({unlessPath = [], unlessMethod = []}) => {
  return jwtKoa({
    secret: JWT_SECRECT,
    isRevoked: async (ctx, decodedToken, token ) => { // 判断是否需要丢弃Token
      // 只有一种情况需要丢弃Token，就是注销时，清空user status的数据
      const result = await UserModel.getByUserId(decodedToken.userId, decodedToken.username)
      const user = result.Item
      const isNeedRevoke = user && user.status && user.status.isExpired
      // 返回true说明是被废弃
      if (isNeedRevoke) {
        throw(new Error('auth is not allowed, please login again'))
      }
    }
  }).unless({
    path: unlessPath,
    method: unlessMethod
  })
}

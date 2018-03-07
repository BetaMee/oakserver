import jwt from 'jsonwebtoken'

import { JWT_SECRECT } from '../config/secret'

const checkTokenValid = () => {

}

// return {
//   token,
//   isExpired,
//   createDate,
//   expiredDate
// }
const generateToken = (playload, expiresIn = {}) => {
  // 根据时效判断是否需要签发新的Token
  return jwt.sign(
    playload,
    JWT_SECRECT,
    expiresIn
  )
}



export {
  generateToken
}

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
// 根据时效判断是否需要签发新的Token
const generateStatus = (user, expiresIn = {}) => {
  const { status } = user
  // isExpired为True，表明要么是刚生成，要么是已登出，则直接生成新Token
  if (status.isExpired) {
    const newToken = jwt.sign(
      {
        userId: user.userId,
        username: user.username
      },
      JWT_SECRECT,
      expiresIn
    )

    const currentDate = new Date().getTime()
    // const expiredDate = 日期相加

    return {
      isExpired: false,
      token: newToken,
      createdDate: '',
      expiredDate: ''
    }
  } else {
    // 根据时差判断是否需要生成新的或者旧的
    return {
      
    }
  }
}

export {
  generateStatus
}

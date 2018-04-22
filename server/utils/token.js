import jwt from 'jsonwebtoken'
import moment from 'moment'

import {
  JWT_SECRECT
} from '../config/secret'

const generateTokenStatus = (userId, expiresIn = {}) => {
  // 正则获取expiredIn参数
  const expiresParam = expiresIn.expiresIn
  const expiresAmount = parseInt(/^\d+\.{0,1}\d*/.exec(expiresParam)[0])
  const expiresUnit = expiresParam.replace(/^\d+\.{0,1}\d*\s*/g, '')

  const newToken = jwt.sign(
    {
      userId: userId,
    },
    JWT_SECRECT,
    expiresIn
  )

  // 当前moment对象
  const currentMoment = moment()

  const currentMomentString = currentMoment.format() // 创建时刻
  const expiredMomentString = currentMoment.add(expiresAmount, expiresUnit).format() // 过期时刻，1天后

  return {
    isExpired: false,
    token: newToken,
    createdMoment: currentMomentString,
    expiredMoment: expiredMomentString
  }
}

// 根据时效判断是否需要签发新的Token
const updateTokenStatus = (user, expiresIn = {}) => {
  // 正则获取expiredIn参数
  const expiresParam = expiresIn.expiresIn
  const expiresAmount = parseInt(/^\d+\.{0,1}\d*/.exec(expiresParam)[0])
  const expiresUnit = expiresParam.replace(/^\d+\.{0,1}\d*\s*/g, '')
  const { status } = user
  // isExpired为True，表明已过期，则直接生成新Token
  if (status.isExpired) {
    const newToken = jwt.sign(
      {
        userId: user.userId
      },
      JWT_SECRECT,
      expiresIn
    )

    // 当前moment对象
    const currentMoment = moment()

    const currentMomentString = currentMoment.format() // 创建时刻
    const expiredMomentString = currentMoment.add(expiresAmount, expiresUnit).format() // 过期时刻，1天后

    return {
      isExpired: false,
      token: newToken,
      createdMoment: currentMomentString,
      expiredMoment: expiredMomentString
    }
  } else {
    // 根据时差判断是否需要生成新的或者旧的
    const { expiredMoment } = status
    // 介于创建时刻和过期时刻的中间节点的moment对象（过期前半小时）
    const willExpiredPoint = moment(expiredMoment).subtract(0.5, 'hours')
    // 请求验证的当前时刻，是否要过期
    const currentMoment = moment()
    const isNearExipred = currentMoment.isAfter(willExpiredPoint)

    // 如果即将过期则签发新的密钥
    if (isNearExipred) {
      const newToken = jwt.sign(
        {
          userId: user.userId
        },
        JWT_SECRECT,
        expiresIn
      )

      const currentMomentString = currentMoment.format() // 创建时刻
      const expiredMomentString = currentMoment.add(expiresAmount, expiresUnit).format() // 过期时刻，1天后

      return {
        isExpired: false,
        token: newToken,
        createdMoment: currentMomentString,
        expiredMoment: expiredMomentString
      }
    } else {
      return status
    }
  }
}

export {
  generateTokenStatus,
  updateTokenStatus
}

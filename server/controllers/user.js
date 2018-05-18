import {
  UserModel,
} from '../models'

import * as utils from '../utils'
import Code from '../config/code'


/**
 * 检查登录态
 * @param {*} ctx 
 * @param {*} next 
 */
const checkLogin = async (ctx, next) => {
  ctx.body = {
    message: Code.USER_CHECK_SUCCESS,
    success: true,
    code: Code.USER_CHECK_SUCCESS_CODE,
  }
}

/**
 * 注册用户
 * @param {*} ctx 
 * @param {*} next 
 */
const userRegister = async (ctx, next) => {
  const {
    username, // 用户名
    password // 密码
  } = ctx.request.body
  // 判断是否已存在
  try {
    const result = await UserModel.queryByUsername(username)
    const existUser = result.Items[0]

    if (result.Count === 0) {
      // 生成时间戳
      const currentDate = utils.getCurrentDate(new Date())
      // 生成新作者，数据是默认值
      const defaultUserProfile = {
        gender: 'F',
        email: '',
        social: '',
        avatar: '',
        createdAt: currentDate,
        updatedAt: currentDate
      }
      // 注册进用户数据库
      const HashPassword = utils.encryptPassword(password)
      // 新的userId
      const userId = utils.generateUniqueID()
      // 生成新的token，后续可以直接登录
      const newUserStatus = utils.generateTokenStatus(userId, { expiresIn: '1 days' })

      const newUser = {
        userId: userId,
        username: username,
        password: HashPassword,
        profile: defaultUserProfile,
        status: newUserStatus
      }
      // 创建用户
      await UserModel.create(newUser)
      //响应
      ctx.body = {
        message: Code.USER_REGISTER_SUCCESS,
        userInfo: {
          userId: newUser.userId,
          username: newUser.username,
          profile: newUser.profile,
        },
        token: newUserStatus.token,
        success: true,
        code: Code.USER_REGISTER_SUCCESS_CODE,
      }
    } else if (existUser && existUser.username === username) {
      // 已注册
      ctx.body = {
        message: Code.USER_ALREADY_REGISTERED,
        success: false,
        code: Code.USER_ALREADY_REGISTERED_CODE,
      }
    }
  } catch(e) {
    // 容错处理
    const error = {
      message: e.message,
      success: false,
      code: Code.USER_REGISTERED_ERROR_CODE,
    }
    ctx.body = error
  }
}

/**
 * 用户登录
 * @param {*} ctx 
 * @param {*} next 
 */
const userLogin = async (ctx, next) => {
  const {
    username, // 用户名
    password // 密码
  } = ctx.request.body
  // 响应
  let response = null
  // 验证是否是已注册用户
  try {
    const result = await UserModel.queryByUsername(username)
    const existUser = result.Items[0]
    if (existUser) {
      // 验证密码是否正确
      const HashPassword = utils.encryptPassword(password)

      if (existUser.password === HashPassword) {
        // 判断是否需要生成新状态
        const updatedUserStatus = utils.updateTokenStatus(existUser, { expiresIn: '1 days' })
        // 设置登录状态
        await UserModel.updateUserStatus(existUser.userId, updatedUserStatus)
        // 密码正确，成功登录
        response = {
          message: Code.USER_LOGIN_SUCCESS,
          success: true,
          code: Code.USER_LOGIN_SUCCESS_CODE,
          token: updatedUserStatus.token,
          userId: existUser.userId,
          username: existUser.username,
          profile: existUser.profile // 用户profile
        }
      } else {
        // 密码不正确
        response = {
          message: Code.USER_PASSWORD_INCORRECT,
          success: false,
          code: Code.USER_PASSWORD_INCORRECT_CODE,
        }
      }
    } else {
      // 用户不存在
      response = {
        message: Code.USER_IS_NOT_EXISTS,
        success: false,
        code: Code.USER_IS_NOT_EXISTS_CODE,
      }
    }
    // 返回响应内容
    ctx.body = response 
  } catch(e) {
    // 查询有误
    const error = {
      message: e.message,
      code: Code.USER_LOGIN_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}

/**
 * 用户登出
 * @param {*} ctx 
 * @param {*} next 
 */
const userLogout = async (ctx, next) => {
  const {
    userId,
    username
  } = ctx.request.body

  try {
    const loginOutStatus = {
      isExpired: true, // 过期了
      token: '',
      createdMoment: '',
      expiredMoment: ''
    }
    // 更新user status状态
    await UserModel.updateUserStatus(userId, username, loginOutStatus)

    ctx.body = {
      message: Code.USER_LOGOUT_SUCCESS,
      success: true,
      code: Code.USER_LOGOUT_SUCCESS_CODE,
    }

  } catch(e) {
    // 查询有误
    const error = {
      message: e.message,
      code: Code.USER_LOGOUT_ERROR_CODE,
      success: false
    }
    ctx.body = error
  }
}


export {
  checkLogin,
  userRegister,
  userLogin,
  userLogout
}
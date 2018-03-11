import {
  UserModel,
  AuthorModel
} from '../models'

import * as utils from '../utils'
import Code from '../config/code'

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
      const newAuthor = {
        authorId: utils.generateUniqueID(),
        name: username,
        gender: 'F',
        email: '',
        social: '',
        avatar: '',
        createdAt: currentDate,
        updatedAt: currentDate
      }
      // 新用户，创建统一的profile
      await AuthorModel.create(newAuthor)

      // 注册进用户数据库
      const HashPassword = utils.encryptPassword(password)

      const newUser = {
        userId: utils.generateUniqueID(),
        username: username,
        password: HashPassword,
        profileId: newAuthor.authorId,
        status: {
          isExpired: true, // 默认为过期
          token: '', // 等登陆后才有填充数据
          createdMoment: '', // 创建时间
          expiredMoment: '' // 过期时间
        }
      }
      // 创建用户
      await UserModel.create(newUser)
      //响应
      ctx.body = {
        message: Code.USER_REGISTER_SUCCESS,
        userInfo: {
          userId: newUser.userId,
          username: newUser.username,
          profileId: newUser.profileId
        },
        token: '',
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
        const newUserStatus = utils.generateStatus(existUser, { expiresIn: '1 days' })
        // 设置登录状态
        await UserModel.updateUserStatus(existUser.userId, existUser.username, newUserStatus)
        // 密码正确，成功登录
        response = {
          message: Code.USER_LOGIN_SUCCESS,
          success: true,
          code: Code.USER_LOGIN_SUCCESS_CODE,
          token: newUserStatus.token,
          userId: existUser.userId,
          profileId: existUser.profileId // 用户profile信息ID
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
  userRegister,
  userLogin,
  userLogout
}

/**
 * 错误处理
 */
export default (customError) => {
  return async (ctx, next) => {
    try {
      await next()
    } catch(err) {
      // 错误处理
      const status = customError.status || err.statusCode || err.status
      const result = {
        message: customError.message || err.message,
        status: status
      }
      ctx.response.status = status
      ctx.response.body = result
      // 出发错误，交由koa统一处理
      ctx.app.emit('error', err, ctx)
    }
  }
}

import Koa from 'koa'
import KoaStatic from 'koa-static'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import path from 'path'
import cors from 'koa2-cors'

// 引入中间件
import errorHandler from './middleware/errorHandler'
import authHandler from './middleware/authHandler'

// 定义端口
const port = process.env.PORT || 8080

// 引入路由映射函数
import GetRouteMapping from './router/'

// koa应用
const app = new Koa()
const router = new Router()

// 解决跨域问题
app.use(cors())
// 使用 bodyParser 和 KoaStatic 中间件
app.use(bodyParser())
app.use(KoaStatic(path.resolve(__dirname, '../public/')))

// 错误处理
app.use(errorHandler({
  message: 'some error happens :(', // 错误信息
  status: 400, // 状态
}))

// 验证
app.use(authHandler({
  unlessPath: [/^\/user\/login/, /^\/user\/register/],
  unlessMethod: ['GET', 'POST', 'PUT', 'DELETE']
}))

// 生成Router Mapping
GetRouteMapping(router)

app
  .use(router.routes())
  .use(router.allowedMethods())


// koa全局事件处理
app.on('error', (err) => {
  // 日志记录
  console.log(err)
})

app.listen(port, () => {
  console.log(`Server => http://localhost:${port}`)
  console.log(`Graphiql => http://localhost:${port}/graphql/graphiql`)
})

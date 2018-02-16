import Koa from 'koa'
import KoaStatic from 'koa-static'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import path from 'path'

// 定义端口
const port = process.env.PORT || 8080

// 引入路由映射函数
import GetRouteMapping from './router/'

// koa应用
const app = new Koa()
const router = new Router()

// 使用 bodyParser 和 KoaStatic 中间件
app.use(bodyParser())
app.use(KoaStatic(path.resolve(__dirname, '../public/')))

// 生成Router Mapping
GetRouteMapping(router)

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(port, () => {
  console.log('Oak Server listen port: ' + port)
  console.log('http://localhost:' + port)
})

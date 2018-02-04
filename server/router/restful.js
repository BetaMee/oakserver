import Router from 'koa-router'

// 业务逻辑在Controller中
import {
  getArticles,
  // createArticle
} from '../controllers'


const RestRouter = Router()

const help = async (ctx, next) => {
  console.log(getArticles)
  ctx.body = 'hello world'
}

RestRouter
  .get('/getarticle', getArticles)
  // .post('/createarticle', createArticle)

export default RestRouter

import Router from 'koa-router'

// 业务逻辑在Controller中
import {
  getArticles,
  // createArticle
} from '../controllers'

const RestRouter = Router()

RestRouter
  .get('/getarticle', getArticles)
  // .post('/createarticle', createArticle)

export default RestRouter

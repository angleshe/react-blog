import {Application} from 'egg';

export default (app: Application) => {
  app.router.get('/api/home/getArticleList', app.controller.api.home.getArticleList)
  app.router.get('/api', app.controller.api.index.index)
  
}
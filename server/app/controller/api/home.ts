import {Controller} from 'egg';

export default class HomeController extends Controller {
  public async getArticleList () {
    let data = await this.app.mysql.query('SELECT article.id AS id, article.title AS title, article.introduce AS introduce, article.addTime, article.view_count AS view_count, type.typeName AS typeName FROM article LEFT JOIN type ON article.type_id = type.id')
    this.ctx.body = {
      data
    }
  }
}
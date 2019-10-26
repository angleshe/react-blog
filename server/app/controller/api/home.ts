import {Controller} from 'egg';

export default class HomeController extends Controller {
  public async getArticleList () {
    this.ctx.body = await this.service.article.artSelectService.Execute()
  }
}
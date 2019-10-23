import {Controller} from 'egg';
export default class IndexController extends Controller {
  public async index () {
    let res = await this.app.mysql.get('blog_content', {})
    console.log(res)
    this.ctx.body = res
  }
}
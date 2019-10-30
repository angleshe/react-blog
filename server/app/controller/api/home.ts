import {Controller} from 'egg';
import {GET} from '../../decorator/router.decorator'

export default class HomeController extends Controller {
  /**
   * @description 获取文章列表
   * @author angle
   * @date 2019-10-27
   * @memberof HomeController
   */
  @GET
  public async getArticleList () {
    this.ctx.body = await this.service.article.artSelectService.Execute()
  }
  /**
   * @description 获取文章详情
   * @author angle
   * @date 2019-10-27
   * @memberof HomeController
   */
  @GET(['id'])
  public async getArticleDetail () {
    let id:number = parseInt(this.ctx.params.id)
    if (id) {
      this.ctx.body = await this.service.article.artDetSelectService.Execute(id)
    }
  }
}
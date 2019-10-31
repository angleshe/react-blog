import {Controller} from 'egg'
import {GET} from '../../decorator/router.decorator'
export default class ShopController extends Controller {
  /**
   * @description 获取商店列表
   * @author angle
   * @date 2019-10-30
   * @memberof ShopController
   */
  @GET(['page'])
  public async getShopList () {
    this.ctx.body = await this.service.shop.shopSelectService.Execute(parseInt(this.ctx.params.page, 10))
  }
}
import {BaseService} from '../baseService'
import {ShopList} from '../../dto/ShopDto'
import {isArray} from '../../utils/utils'
export default class ShopSelectService extends BaseService<ShopList, number> {
  /**
   * @description 修改静态资源路径
   * @author angle
   * @date 2019-11-01
   * @private
   * @param {string} src 原路径
   * @returns {string} 修改后路径
   * @memberof ShopSelectService
   */
  private changeImgUrl(src: string): string {
    if (src) {
      return `http://bit.rapic.com.my:8080${src.replace('./', '/')}`
    } else {
      return `${this.app.config.url}/public/images/default.jpg`
    }
  }
  protected async ExecuteMethod(): Promise<void> {
    let res = await this.ctx.curl(`http://bit.rapic.com.my:8080/api/shop/get_shops?coupon=&page_num=10&p=${this.Parameter}&order=distance&price=&ticket=&shop_type=&uid=109&lat=3.1640116&lng=101.6124836`, {
      dataType: 'json'
    })
    if (res.data.status === 200) {
      if (isArray(res.data.data)) {
        let data: ShopList = res.data.data
        data.forEach(item => {
          item.img = this.changeImgUrl(item.img)
          item.goods_list.forEach(food => {
            food.goods_img = this.changeImgUrl(food.goods_img)
          })
        })
      }
      this.setSuccessResult(res.data.data)
    } else {
      this.setErrorResult(res.data.message)
    }
  }
}
import {BaseService} from '../baseService'
import {ShopList} from '../../dto/ShopDto'
export default class ShopSelectService extends BaseService<ShopList, number> {
  protected async ExecuteMethod(): Promise<void> {
    let res = await this.ctx.curl(`http://bit.rapic.com.my:8080/api/shop/get_shops?coupon=&page_num=10&p=${this.Parameter}&order=distance&price=&ticket=&shop_type=&uid=109&lat=3.1640116&lng=101.6124836`, {
      dataType: 'json'
    })
    if (res.data.status === 200) {
      this.setSuccessResult(res.data.data)
    } else {
      this.setErrorResult(res.data.message)
    }
  }
}
import {Context} from 'egg'
import {app} from 'egg-mock/bootstrap'
import * as assert from 'assert'
describe('test/app/service/shop/shopSelectService', () =>{
  let ctx: Context
  before(() => {
    ctx = app.mockContext()
  })
  describe('Execute()', () => {
    it('Execute model is exit', () => {
      assert(ctx.service.shop.shopSelectService.Execute)
    })
    it('should get data', async () => {
      let page: number = 1
      let testData: string = 'testData'
      app.mockHttpclient(`http://bit.rapic.com.my:8080/api/shop/get_shops?coupon=&page_num=10&p=${page}&order=distance&price=&ticket=&shop_type=&uid=109&lat=3.1640116&lng=101.6124836`, {
        status: 200,
        data: {
          status: 200,
          data: testData
        }
      })
      let res = await ctx.service.shop.shopSelectService.Execute(page)
      assert(res.code === 1)
      assert(res.data && (String(res.data) === testData))
    })
    it('error data', async () => {
      let page: number = 1
      let errorMessage: string = 'test'
      app.mockHttpclient(`http://bit.rapic.com.my:8080/api/shop/get_shops?coupon=&page_num=10&p=${page}&order=distance&price=&ticket=&shop_type=&uid=109&lat=3.1640116&lng=101.6124836`, {
        status: 200,
        data: {
          status: 201,
          message: errorMessage
        }
      })
      let res = await ctx.service.shop.shopSelectService.Execute(page)
      assert(res.code === 0)
      assert(!res.data)
      assert(res.message === errorMessage)
    })
    it('error three server', async () => {
      let page: number = 1
      app.mockHttpclient(`http://bit.rapic.com.my:8080/api/shop/get_shops?coupon=&page_num=10&p=${page}&order=distance&price=&ticket=&shop_type=&uid=109&lat=3.1640116&lng=101.6124836`, {
        status: 202,
      })
      let res = await ctx.service.shop.shopSelectService.Execute(page)
      assert(res.code === 0)
      assert(!res.data)
    })
  })
})
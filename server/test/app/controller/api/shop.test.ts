import {app} from 'egg-mock/bootstrap'
describe('test/app/controller/api/shop.test.ts', () => {
  describe('GET /api/shop/getShopList/:page', () => {
    it ('should status 200 and get the body', () => {
      let testData: number = 10
      async function testFunction (page: number): Promise<number> {
        return page
      }
      app.mockService('shop.shopSelectService', 'Execute', testFunction)
      return app.httpRequest().get(`/api/shop/getShopList/${testData}`).expect(200).expect(testData.toString())
    }) 
    it('error number params', () => {
      return app.httpRequest().get('/api/home/getShopList/asjd').expect(404)
    })
  })
})
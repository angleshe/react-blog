import mock, { MockApplication } from 'egg-mock'

describe('test/app/controller/api/home.test.ts', () => {
  let app: MockApplication
  before(() => {
    app = mock.app()
    return app.ready()
  })
  afterEach(mock.restore)
  describe('GET /api/home/getArticleList', () => {
    it('should status 200 and get the body', () => {
      let testData: string = 'test'
      app.mockService('article.artSelectService', 'Execute', testData)
      return app.httpRequest().get('/api/home/getArticleList').expect(200).expect(testData)
    })
  })
  describe('GET /api/home/getArticleDetail/:id', () => {
    it('should status 200 and get the body', () => {
      let testId: string = '4'
      async function testFunction (id: number): Promise<number> {
        return id
      }
      app.mockService('article.artDetSelectService', 'Execute', testFunction)
      return app.httpRequest().get(`/api/home/getArticleDetail/${testId}`).expect(200).expect(testId.toString())
    })
    it('error number params', () => {
      return app.httpRequest().get('/api/home/getArticleDetail/asjd').expect(404)
    })
  })
})
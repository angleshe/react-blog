import mock, { MockApplication } from 'egg-mock'
// import {ResponseMessageModel} from '../../../../app/dto/ResponseMessageModel'
// import {ArticleList} from '../../../../app/dto/ArticleListDto'

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
      let testData: string = 'test'
      app.mockService('article.artDetSelectService', 'Execute', testData)
      return app.httpRequest().get('/api/home/getArticleDetail/1').expect(200).expect(testData)
    })
    it('error number params', () => {
      return app.httpRequest().get('/api/home/getArticleDetail/asjd').expect(404)
    })
  })
})
import { Context } from 'egg';
import {app, mock} from 'egg-mock/bootstrap'

import * as assert from 'assert';
import {ArticleList} from '../../../../app/dto/ArticleDto'
import {ResponseMessageModel} from '../../../../app/dto/ResponseMessageModel'
describe('test/app/service/article/artSelectService', () => {
  let ctx: Context;
  before(() => {
    ctx = app.mockContext()
  })
  describe('Execute()', () => {
    it ('should has execute mothed', () => {
      assert(ctx.service.article.artSelectService.Execute)
    })
    it ('should get data', async () => {
      let testData: ArticleList = [
        {
          id: 1,
          addTime: 2,
          introduce: 'aasd',
          title: 'test',
          typeName: 'test',
          view_count: 3
        }
      ]
      mock(app.mysql, 'query', async (sql: string) => {
        if (sql) {
          return Promise.resolve(testData)
        }
      })
      let res:ResponseMessageModel<ArticleList> = await ctx.service.article.artSelectService.Execute()
      assert(res.code === 1)
      assert(res.data && res.data === testData)
    })
    it('should get error message', async () => {
      mock(app.mysql, 'query', async () => {
        throw 'error'
      })
      let res: ResponseMessageModel<ArticleList> = await ctx.service.article.artSelectService.Execute()
      assert(res.code === 0)
      assert(res.message === 'error')
    })
  })
})
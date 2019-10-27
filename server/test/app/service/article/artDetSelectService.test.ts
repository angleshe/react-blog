import { Context } from 'egg';
import {app, mock} from 'egg-mock/bootstrap'

import * as assert from 'assert';
import {ArticleDetail} from '../../../../app/dto/ArticleDto'
import {ResponseMessageModel} from '../../../../app/dto/ResponseMessageModel'
describe('test/app/service/article/artDetSelectService', () => {
  let ctx: Context;
  before(() => {
    ctx = app.mockContext()
  })
  describe('Execute()', () => {
    
    it ('should has execute mothed', () => {
      assert(ctx.service.article.artDetSelectService.Execute)
    })
    it ('should get data', async () => {
      let testData: ArticleDetail = {
        id: 1,
        addTime: 2,
        introduce: 'aasd',
        title: 'test',
        typeName: 'test',
        view_count: 3,
        content: 'test'
      }
      mock(app.mysql, 'query', async (sql: string, id: number) => {
        if (sql && id) {
          return Promise.resolve([testData])
        }
      })
      let res:ResponseMessageModel<ArticleDetail> = await ctx.service.article.artDetSelectService.Execute(1)
      assert(res.code === 1)
      assert(res.data && res.data === testData)
    })
    it('no data', async () => {
      let res:ResponseMessageModel<ArticleDetail> = await ctx.service.article.artDetSelectService.Execute(4)
      mock(app.mysql, 'query', async (sql: string, id: number) => {
        if (sql && id) {
          return Promise.resolve([])
        }
      })
      assert(res.code === 0)
      assert(!res.data)
      assert(res.message === '没有相关数据!')
    })
  })
})
import {BaseService} from '../baseService'
import {ArticleDetail} from '../../dto/ArticleDto'
export default class ArtDetSelectService extends BaseService<ArticleDetail, number> {
  protected async ExecuteMethod(): Promise<void> {
    let res: ArticleDetail[] = await this.app.mysql.query<ArticleDetail>('SELECT article.id AS id, article.title AS title, article.introduce AS introduce, article.article_cointent AS content,article.addTime AS addTime,article.view_count AS view_count,type.typeName As typeName FROM article LEFT JOIN type ON article.type_id = type.id WHERE article.id = ?', this.Parameter)
    if (res[0]) {
      this.setSuccessResult(res[0])
    } else {
      this.setErrorResult('没有相关数据!')
    }
  }

}
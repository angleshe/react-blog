import {BaseService} from '../baseService'
import {ArticleList, ArticleListItem} from '../../dto/ArticleDto'

class ArtSelectService extends BaseService<ArticleList> {
  protected async ExecuteMethod(): Promise<void> {
    let data = await this.app.mysql.query<ArticleListItem>('SELECT article.id AS id, article.title AS title, article.introduce AS introduce, article.addTime, article.view_count AS view_count, type.typeName AS typeName FROM article LEFT JOIN type ON article.type_id = type.id');
    this.setSuccessResult(data)
  }
}

export default ArtSelectService
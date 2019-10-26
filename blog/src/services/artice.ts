import request, { ResponseMessageModel } from '@/utils/request';
import { ArticleList } from '../../../dto/ArticleListDto';

export async function getArticeList(): Promise<ResponseMessageModel<ArticleList>> {
  return request<ResponseMessageModel<ArticleList>>('home/getArticleList');
}

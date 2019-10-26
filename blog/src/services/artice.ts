import request from '@/utils/request';
import { ArticleList } from '@/dto/ArticleListDto';
import { ResponseMessageModel } from '@/dto/ResponseMessageModel';

export async function getArticeList(): Promise<ResponseMessageModel<ArticleList>> {
  return request<ResponseMessageModel<ArticleList>>('home/getArticleList');
}

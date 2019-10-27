import request from '@/utils/request';
import { ArticleList, ArticleDetail } from '@/dto/ArticleDto';
import { ResponseMessageModel } from '@/dto/ResponseMessageModel';

export async function getArticleList(): Promise<ResponseMessageModel<ArticleList>> {
  return request<ResponseMessageModel<ArticleList>>('home/getArticleList');
}

export async function getArticle(id: number): Promise<ResponseMessageModel<ArticleDetail>> {
  return request<ResponseMessageModel<ArticleDetail>>(`home/getArticleDetail/${id}`);
}

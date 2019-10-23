import request, { IRequest } from '@/utils/request';

export interface Artice {
  id: number;
  addTime: null | number;
  introduce: string;
  title: string;
  typeName: string;
  view_count: number;
}

export async function getArticeList(): Promise<IRequest<Artice[]>> {
  return request<IRequest<Artice[]>>('home/getArticleList');
}

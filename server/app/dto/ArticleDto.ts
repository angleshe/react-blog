export interface ArticleListItem {
  id: number;
  addTime: null | number;
  introduce: string;
  title: string;
  typeName: string;
  view_count: number;
}
export type ArticleList = ArticleListItem[]

export interface ArticleDetail extends ArticleListItem  {
  content: string
}
/**
 * @description 文章列表项
 * @author angle
 * @date 2019-10-30
 * @export
 * @interface ArticleListItem
 */
export interface ArticleListItem {
  /**
   * @description 文章组件id
   * @type {number}
   * @memberof ArticleListItem
   */
  id: number;
  /**
   * @description 添加时间时间戳
   * @type {(null | number)}
   * @memberof ArticleListItem
   */
  addTime: null | number;
  /**
   * @description 文章简介
   * @type {string}
   * @memberof ArticleListItem
   */
  introduce: string;
  /**
   * @description 文章标题
   * @type {string}
   * @memberof ArticleListItem
   */
  title: string;
  /**
   * @description 文章类型
   * @type {string}
   * @memberof ArticleListItem
   */
  typeName: string;
  /**
   * @description 文章阅读数
   * @type {number}
   * @memberof ArticleListItem
   */
  view_count: number;
}
// 文章列表
export type ArticleList = ArticleListItem[]
/**
 * @description 文章详情
 * @author angle
 * @date 2019-10-30
 * @export
 * @interface ArticleDetail
 * @extends {ArticleListItem}
 */
export interface ArticleDetail extends ArticleListItem  {
  /**
   * @description 文章内容
   * @type {string}
   * @memberof ArticleDetail
   */
  content: string
}
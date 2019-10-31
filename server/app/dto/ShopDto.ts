/**
 * @description 食物
 * @author angle
 * @date 2019-10-31
 * @export
 * @interface Food
 */
export interface Food {
  /**
   * @description 食物id
   * @type {string}
   * @memberof Food
   */
  id: string;
  /**
   * @description 食物名称
   * @type {string}
   * @memberof Food
   */
  goods_name: string;
  /**
   * @description 食物图片
   * @type {string}
   * @memberof Food
   */
  goods_img: string;
  /**
   * @description 食物价格
   * @type {string}
   * @memberof Food
   */
  price: string;
}
/**
 * @description 商店列表项
 * @author angle
 * @date 2019-10-31
 * @export
 * @interface ShopItem
 */
export interface ShopItem {
  /**
   * @description 商店id
   * @type {string}
   * @memberof ShopItem
   */
  id: string;
  /**
   * @description 商店图片
   * @type {string}
   * @memberof ShopItem
   */
  img: string;
  /**
   * @description 商店名称
   * @type {string}
   * @memberof ShopItem
   */
  name: string;
  /**
   * @description 创建时间
   * @type {string}
   * @memberof ShopItem
   */
  create_time: string;
  /**
   * @description 地址
   * @type {string}
   * @memberof ShopItem
   */
  address: string;
  /**
   * @description 食物列表
   * @type {Food[]}
   * @memberof ShopItem
   */
  goods_list: Food[];
}
// 商店列表
export type ShopList = ShopItem[]
/**
 * @description 响应数据模型(所有对外输出接口必须实现该接口)
 * @author angle
 * @date 2019-10-25
 * @export
 * @interface ResponseMessageModel
 * @template T 数据类型
 */
export interface ResponseMessageModel<T = any> {
  /**
   * @description 数据
   * @type {T}
   * @memberof ResponseMessageModel
   */
  data?: T;
  /**
   * @description 信息
   * @type {string}
   * @memberof ResponseMessageModel
   */
  message: string;
  /**
   * @description 状态码
   * @type {number}
   * @memberof ResponseMessageModel
   */
  code: number;
}
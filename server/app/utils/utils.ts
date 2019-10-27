/**
 * @description 验证变量是否为指定基础类型
 * @author angle
 * @date 2019-10-27
 * @param {*} param 待验证的变量
 * @param {string} type 基础类型
 * @returns {boolean} 是否为指定基础类型
 */
function isType(param: any, type: string): boolean {
  return Object.prototype.toString.call(param) === `[object ${type}]`
}
/**
 * @description 是否为数组
 * @author angle
 * @date 2019-10-27
 * @export
 * @param {*} param 待测参数
 * @returns {boolean} 是否为数组
 */
export function isArray(param: any): boolean {
 return isType(param, 'Array')
}
export function isObject(param: any): boolean {
  return isType(param, 'Object')
}
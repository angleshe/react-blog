import { parse } from 'querystring';

/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

export const isAntDesignPro = (): boolean => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }
  return window.location.hostname === 'preview.pro.ant.design';
};

// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
export const isAntDesignProOrDev = (): boolean => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development') {
    return true;
  }
  return isAntDesignPro();
};

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

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
/**
 * @description 是否为对象
 * @author angle
 * @date 2019-10-28
 * @export
 * @param {*} param 待测参数
 * @returns {boolean} 是否为对象
 */
export function isObject(param: any): boolean {
  return isType(param, 'Object')
}
/**
 * @description 是否为字符串
 * @author angle
 * @date 2019-10-28
 * @export
 * @param {*} param 待测参数
 * @returns {boolean} 是否为字符串
 */
export function isString(param: any): boolean {
  return isType(param, 'String')
}
/**
 * @description 防抖
 * @author angle
 * @date 2019-11-03
 * @export
 * @param {() => void} fn 处理函数
 * @param {number} [time=500] 节流时长
 * @returns {() => void} 防抖函数
 */
export function debounce(fn: () => void, time: number = 500): () => void {
  let timer: number = 0
  return () => {
    if (timer !== 0) {
      window.clearTimeout(timer)
    }
    timer = window.setTimeout(() => {
      fn()
      timer = 0
    }, time)
  }
}

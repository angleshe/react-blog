import 'reflect-metadata';
import {isString, isArray} from '../utils/utils'
interface RouterModel {
  method: RouterMethods;
  url: string;
  controller: any;
  action: string;
  params?: string[];
}
enum RouterMethods {
  GET = 'get',
  POST = 'post'
}

export const RouterList: RouterModel[] = []

function addRouterHandler(target: Object, methodsName: string): void
function addRouterHandler(target: Object, methodsName: string, path: string): void
function addRouterHandler(target: Object, methodsName: string, params: string[]): void
function addRouterHandler(target: Object, methodsName: string, path: string, params: string[]): void
function addRouterHandler(target: Object, methodsName: string, param?: string | string[], params?: string[]) {
  let path: string = ''
  if (param) {
    if (isString(param)) {
      path = String(param)
    } else if (isArray(param)) {
      params = param as string[]
    }
  }
  RouterList.push({
    method: RouterMethods.GET,
    url: path || '',
    controller: target,
    action: methodsName,
    params
  })
}

export function GET(): MethodDecorator
export function GET(path: string): MethodDecorator
export function GET(params: string[]): MethodDecorator
export function GET(path: string, params: string[]): MethodDecorator
export function GET<T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void
export function GET<T> (param?: string | Object, propertyKey?: string | symbol | string[], descriptor?: TypedPropertyDescriptor<T>): MethodDecorator | TypedPropertyDescriptor<T> | void {
  if (!descriptor) {
    if (!param) {
      return (target: Object, propertyKey: string | symbol) => {
        addRouterHandler(target, String(propertyKey))
      }
    } else if (isString(param)) {
      let path: string = String(param)
      if (propertyKey) {
        let params: string[] = propertyKey as string[]
        return (target: Object, propertyKey: string | symbol) => {
          addRouterHandler(target, String(propertyKey), path, params)
        }
      } else {
        return (target: Object, propertyKey: string | symbol) => {
          addRouterHandler(target, String(propertyKey), path)
        }
      }
      
    } else {
      let params: string[] = param as string[]
      return (target: Object, propertyKey: string | symbol) => {
        addRouterHandler(target, String(propertyKey), params)
      }
    }
  } else {
    let target: Object = Object(param)
    let methodsName: string = String(propertyKey)
    addRouterHandler(target, methodsName)
  }
}
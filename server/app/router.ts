import { Application } from 'egg';
import {RouterList} from './decorator/router.decorator'

export default (app: Application) => {
  // console.log(RouterList)
  // RouterList.forEach(item => app.router[item.method](item.url, item.controller))
  RouterList.forEach(item => {
    let attrArr: string[] = (item.controller.pathName as string).split('.')
    let url = item.url ? item.url : `/${attrArr.slice(1).join('/')}/${item.action}`
    if (item.params) {
      url += `/:${item.params.join('/:')}`
    }
    app.router[item.method](url, attrArr.reduce<Object>((prev: Object, curr: string) => prev[curr], app)[item.action])
  })
};

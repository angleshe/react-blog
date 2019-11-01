import React from 'react'
import style from './style.less'
import {getShopList} from '@/services/shop'
import {ShopList} from '@/dto/ShopDto'
import List from './components/List'

interface IShopList {
  list: ShopList
}
const ShopListView: SSRFC<IShopList> = props => (
  <div className={style['shop-list']}>
    <List data={props.list}/>
  </div>
)
ShopListView.getInitialProps = async ({res}) => {
  let { code , data } = await getShopList(1)
  let result: Promise<IShopList | void>
  if (code === 1 && data) {
    result = Promise.resolve({
      list: data
    })
  } else {
    result = Promise.resolve()
    res.statusCode = 404;
    res.end('Not found');
  }
  return result
}
export default ShopListView

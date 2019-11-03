import React, {useState} from 'react'
import style from './style.less'
import {getShopList} from '@/services/shop'
import {ShopList} from '@/dto/ShopDto'
import List from './components/List'
import LoadMore from '@/components/LoadMore'

interface IShopList {
  list: ShopList
}
var page = 2
const ShopListView: SSRFC<IShopList> = props => {
  let [list, setList] = useState<ShopList>(props.list)
  const getData: (isEnd: () => void) => Promise<void> = async function (isEnd: () => void) {
    let {code, data} = await getShopList(page);
    if (code === 1 && data) {
      setList(list => list.concat(data as ShopList))
      page++
      if (data.length < 10) {
        isEnd()
      }
    }
  };
  return (
    <div className={style['shop-list']}>
      <List data={list}/>
      <LoadMore loadDataHandler={getData}/>
  </div>
  )
}
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

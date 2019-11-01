import React from 'react'
import {ShopList} from '@/dto/ShopDto'
import ShopItem from './shopItem'
import style from './style.less'

interface IList {
  data: ShopList
}

const List: React.FC<IList> = props => (
  <div className={style.list}>
    {props.data.map(item => (
      <ShopItem address={item.address} create_time={item.create_time} goods_list={item.goods_list} id={item.id} img={item.img} key={item.id} name={item.name}/>
    ))}
  </div>
)

export default List

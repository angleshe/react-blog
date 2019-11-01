import React from 'react'
import {ShopItem, Food} from '@/dto/ShopDto'
import style from './style.less'
import {isArray} from '@/utils/utils'
// import defaultImg from '@/assets/default.png'

const ShopItem: React.FC<ShopItem> = props => (
  <div className={style['shop-item']}>
    <div className={style.shop}>
      <div className={style['shop-img']}>
        <img src={props.img} className={style.img} alt=""/>
      </div>
      <div className={style.content}>
        <div className={style['shop-name']}>{props.name}</div>
        <div className={style['shop-address']}>{props.address}</div>
        <div className={style['shop-time']}>{props.create_time}</div>
      </div>
    </div>
    {rendFoodList(props.goods_list)}
  </div>
)

function rendFoodList (foodList: Food[]): JSX.Element | void {
  return foodList && isArray(foodList) && foodList.length ? (
    <div className={style['food-list']}>
      {foodList.map(item => (
        <div className={style['food-item']} key={item.id}>
          <div className={style['foot-head']}>
            <img src={item.goods_img} className={style['food-img']} alt=""/>
            <div className={style['food-price']}>{item.price}</div>
          </div>
          <div className={style['food-name']}>{item.goods_name}</div>
        </div>
      ))}
    </div>
  ) : undefined
}

export default ShopItem

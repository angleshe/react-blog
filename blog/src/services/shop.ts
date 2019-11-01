import request from '@/utils/request'
import {ShopList} from '@/dto/ShopDto'
import {ResponseMessageModel} from '@/dto/ResponseMessageModel'

export async function getShopList (page: number): Promise<ResponseMessageModel<ShopList>> {
  return request.get(`shop/getShopList/${page}`)
}

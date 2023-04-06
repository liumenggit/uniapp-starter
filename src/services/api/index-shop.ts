import { request } from '@/utils/http';
/**
 * indxshop
 * @param params
 */
export function indexShop(){
    return request.Get<IndexShopModel>('index/shop');
}

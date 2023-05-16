import {request} from '@/utils/http';

/**
 * 获取商品类型
 * @returns {Method<unknown, unknown, MessageListModel, unknown, {requestType?: "upload" | "download"} & UniappRequestConfig & UniappUploadConfig & UniappDownloadConfig, UniNamespace.RequestSuccessCallbackResult | UniNamespace.UploadFileSuccessCallbackResult | UniNamespace.DownloadSuccessData, any>}
 */
export function getGoodsTypeList() {
    return request.Get<[GoodsType]>('goods_type');
}

/**
 * 开户商品
 * @returns {Method<unknown, unknown, NoticeModel, unknown, {requestType?: "upload" | "download"} & UniappRequestConfig & UniappUploadConfig & UniappDownloadConfig, UniNamespace.RequestSuccessCallbackResult | UniNamespace.UploadFileSuccessCallbackResult | UniNamespace.DownloadSuccessData, any>}
 * @param type
 */
export function getGoodsOpenList(type: number) {
    return request.Get<[GoodsItem]>('goods_open', {params: {type}});
}


export function getGoodsAfterList(type: number) {
    return request.Get<[GoodsItem]>('goods_after', {params: {type}});
}

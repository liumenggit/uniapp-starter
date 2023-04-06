import { request } from '@/utils/http';

export function mockTest() {
    return request.Get('index/test');
}

export function indexCommend() {
    return request.Get<IndexShopModel>('index/commend');
}

import {defineStore} from 'pinia';
import {getCache, removeCache, setCache} from '@/utils/cache';
import {TOKEN_KEY, TOKEN_REFRESH_KEY} from '@/enums/cacheEnum';


interface CartState {
    create_time: string;
    goods_id: number;
    id: number;
    price: number;
    sass_id: number;
    status: number;
    title: string;
    type: string;
}

export const useAuthStore = defineStore({
    id: 'auth',
    state: (): [CartState] => {
        cartList :[];
    },
    getters: {},
    actions: {
        async AddGoods(goodsInfo: CartState) {
            this = [...this, goodsInfo];
        }
    },
});

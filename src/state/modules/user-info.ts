import {getUserInfo} from '@/services/api/user';
import {UserInfo, UserInfoState} from '@/services/model/userModel';
import {useRequest} from 'alova';
import {defineStore} from 'pinia';
import {TOKEN_KEY, TOKEN_REFRESH_KEY, USER_INFO_KEY} from '@/enums/cacheEnum';
import {getCache, setCache} from '@/utils/cache';

export const useUserInfo = defineStore('userInfo', {
    state: (): UserInfoState => ({
        user_info: getCache<UserInfo>(USER_INFO_KEY) || {},
        _token: {
            access: getCache<string>(TOKEN_REFRESH_KEY) || undefined,
            token: getCache<string>(TOKEN_KEY) || undefined
        }
    }),
    getters: {
        getAuthorization: (state) => {
            // return state._token.token ? {authorization: `Bearer ${state._token.token}`} : {};
            return state._token.token ? {token: state._token.token} : {};
        },
        isLogin: (state): boolean => !!state._token.token,
    },
    actions: {
        async updateUserInfo() {
            console.log('更新用户信息');
            const {send: sendGetUserInfo} = useRequest(getUserInfo(), {immediate: false});
            const userInfo = await sendGetUserInfo();
            setCache(USER_INFO_KEY, userInfo);
            this.user_info = userInfo;
        },
        async setUserInfo(userInfo: UserInfo) {
            setCache(USER_INFO_KEY, userInfo);
            this.user_info = userInfo;
        },
        initToken() {
            this._token.token = getCache<string>(TOKEN_KEY) || undefined;
        },
        setToken(token: string | undefined) {
            setCache(TOKEN_KEY, token);
            this._token.token = token;
        },
        setTokenRefresh(token: string | undefined) {
            setCache(TOKEN_REFRESH_KEY, token);
            this._token.access = token;
        },
    },
});

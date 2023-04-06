import { defineStore } from 'pinia';
import { useRequest } from 'alova';
import { TOKEN_KEY } from '@/enums/cacheEnum';
import { getCache, setCache } from '@/utils/cache';
import { userLogin } from '@/services/api/user/login';
import { uploadImage } from '@/services/api/upload-image';
import { setUserName } from '@/services/api/user/set-name';
import { verifyPhoneCode } from '@/services/api/phone-verify';
import { verifyUserCard } from '@/services/api/user/card-verify';
import { refreshUserToken } from '@/services/api/user/token-refresh';

export const useUserInfo = defineStore('userInfo', {
    state: (): UserInfosStates => ({
        userInfo: getCache<ILogin>('userInfo') || {
            userName: '',
            phone: '',
            time: '',
            roles: [],
            authBtnList: [],
            avatar: '',
            auth: {
                card: {
                    name: '',
                    cardId: ''
                }
            }
        },
        token: getCache(TOKEN_KEY),
        refreshToken: getCache(TOKEN_KEY)
    }),
    getters: {},
    actions: {
        async login(code: ILoginParams) {
            const { send: sendLogin } = await useRequest(userLogin(code), { immediate: false });
            try {
                const data = await sendLogin();
                this.userInfo = data.userInfo;
                setCache('userInfo', this.userInfo);
                this.token = data.token;
                setCache('token', this.token);
                this.refreshToken = data.refreshToken;
                setCache(TOKEN_KEY, this.refreshToken);
                return Promise.resolve(data);
            } catch (err: any) {
                return Promise.reject(err);
            }
        },
        async refreshToken(token: string) {
            try {
                const { send: sendRefreshUserToken } = useRequest(refreshUserToken(token), { immediate: false });
                const data = await sendRefreshUserToken();
                this.token = data.token;
                setCache(TOKEN_KEY, this.token);
                return Promise.resolve(data);
            } catch (err: any) {
                return Promise.reject(err);
            }
        },
        async setAuthCard(card: UserCardVerifyParams) {
            try {
                const { send: sendVerifyUserCard } = useRequest(verifyUserCard(card), { immediate: false });
                const data = await sendVerifyUserCard();
                this.userInfo.auth.card = data;
                setCache('userInfo', this.userInfo);
                return Promise.resolve(data);
            } catch (err: any) {
                return Promise.reject(err);
            }
        },
        async setAvatar(avatar: string) {
            try {
                const { send: sendUploadImage } = useRequest(uploadImage(avatar), { immediate: false });
                const data = await sendUploadImage();
                this.userInfo.avatar = data.url;
                setCache('userInfo', this.userInfo);
                return Promise.resolve(data);
            } catch (err: any) {
                return Promise.reject(err);
            }
        },
        async setName(userName: string) {
            try {
                const { send: sendSetUserName } = useRequest(setUserName(userName), { immediate: false });
                const data = await sendSetUserName();
                this.userInfo.userName = data.userName;
                setCache('userInfo', this.userInfo);
                return Promise.resolve(data);
            } catch (err: any) {
                return Promise.reject(err);
            }
        },
        async setPhone(phone: PhoneCodeVerify) {
            try {
                const {  send: sendPhoneCode} = useRequest(verifyPhoneCode(phone), { immediate: false });
                const data = await sendPhoneCode();
                this.userInfo.phone = data.phone;
                setCache('userInfo', this.userInfo);
                return Promise.resolve(data);
            } catch (err: any) {
                return Promise.reject(err);
            }
        },
        async setToken(token: string) {
            uni.setStorageSync(TOKEN_KEY, token);
            this.token = token;
        },
        async setUserInfos(userInfos: ILogin) {
            setCache('userInfo', userInfos);
            this.userInfo = userInfos;
        }
    }
});

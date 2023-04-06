import { request } from '@/utils/http';

export function userLogin(code: ILoginParams) {
    return request.Post<UserInfosStates>('user/login', { code: code });
}
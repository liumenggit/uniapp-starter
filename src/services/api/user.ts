import {UserInfo, UserInfoState, UserPerfectParams} from '@/services/model/userModel';
import {request} from '@/utils/http';

export function userPerfect(params: UserPerfectParams) {
    console.log('请求参数',params);
    return request.Post<UserInfoState>('user_perfect', params);
}

export function getUserInfo() {
    return request.Get<UserInfo>('user_info');
}


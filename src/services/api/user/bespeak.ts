import {request} from '@/utils/http';

export function userBespeak(userBespeakParams: UserBespeakParams){
    return request.Get<UserBespeakItemModel[]>('user/bespeak',{params:userBespeakParams});
}
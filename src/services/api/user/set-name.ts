import {request} from '@/utils/http';

export function setUserName(userName: string) {
    return request.Post<{ userName: string }>('user/set/nickname', {userName: userName});
}
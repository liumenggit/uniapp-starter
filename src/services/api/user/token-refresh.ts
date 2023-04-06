import {request} from '@/utils/http';

export function refreshUserToken(token: string) {
    return request.Post<{ token: string }>('user/card/verify', {token: token});
}


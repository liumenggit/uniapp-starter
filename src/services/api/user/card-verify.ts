import {request} from '@/utils/http';

export function verifyUserCard(userCardVerify: UserCardVerifyParams) {
    return request.Post<UserCardVerify>('user/card/verify', userCardVerify);
}
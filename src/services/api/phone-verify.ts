import {request} from '@/utils/http';

export function sendPhoneCode(phone: number) {
    return request.Post<any>('phone/code/send', {phone: phone});
}

export  function verifyPhoneCode(verify: PhoneCodeVerify) {
    return  request.Post<{ phone: number }>('phone/code/verify', verify);
}
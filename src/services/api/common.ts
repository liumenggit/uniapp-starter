import {request} from '@/utils/http';

export function sendCode(phone: number) {
    return request.Get<any>('send_code', {params: {phone}});
}

export function getVillageList() {
    return request.Get<[]>('get_village');
}



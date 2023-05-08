import {request} from '@/utils/http';

// 账户列表
export function getAccountList() {
    return request.Get<[AccountModel]>('account_list');
}

export function postAccountAdd(data: AccountParams) {
    return request.Post<any>('account_edit', data);
}

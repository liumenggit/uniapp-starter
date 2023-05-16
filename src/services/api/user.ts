import {UserInfo, UserInfoState, UserPerfectParams} from '@/services/model/userModel';
import {request} from '@/utils/http';

/**
 * 完善用户信息
 * @param {UserPerfectParams} params
 * @returns {Method<unknown, unknown, UserInfoState, unknown, {requestType?: "upload" | "download"} & UniappRequestConfig & UniappUploadConfig & UniappDownloadConfig, UniNamespace.RequestSuccessCallbackResult | UniNamespace.UploadFileSuccessCallbackResult | UniNamespace.DownloadSuccessData, any>}
 */
export function userPerfect(params: UserPerfectParams) {
    console.log('请求参数', params);
    return request.Post<UserInfoState>('user_perfect', params);
}


/**
 * 获取用户信息
 * @returns {Method<unknown, unknown, UserInfo, unknown, {requestType?: "upload" | "download"} & UniappRequestConfig & UniappUploadConfig & UniappDownloadConfig, UniNamespace.RequestSuccessCallbackResult | UniNamespace.UploadFileSuccessCallbackResult | UniNamespace.DownloadSuccessData, any>}
 */
export function getUserInfo() {
    return request.Get<UserInfo>('user_info');
}


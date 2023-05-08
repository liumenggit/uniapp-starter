/**
 * @description: 预设请求结果设置枚举
 */
export enum ResultEnum {
    SUCCESS = 200001, // 通用成功
    ERROR = 0, // 通用错误
    NOTFOUND = 400, // 未找到
    UNAUTHORIZED = 401, // 未授权
    SERVERERROR = 500, // 服务错误
    CUSTOM_SUCCESS = 10000, // 自定义成功
}

export enum ContentTypeEnum {
    // json
    JSON = 'application/json;charset=UTF-8',
    // form-data qs
    FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
    // form-data  upload
    FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

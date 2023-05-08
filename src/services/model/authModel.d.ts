declare interface WxLoginParams {
    code: string;
}

declare interface PhoneLoginParams {
    realname: string;
    phone: number;
}

declare interface LoginModel {
    token: string;
}

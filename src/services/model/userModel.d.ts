/**
 * 用户公共公共状态
 */
export declare interface UserInfoState {
    user_info: UserInfo;
    _token: Token;
}

/**
 * 完善用户参数
 */
declare interface UserPerfectParams {
    code: number;
    /**
     * 微信用户open_id
     */
    open_id: string;
    /**
     * 手机号
     */
    phone: string;
    /**
     * 姓名
     */
    realname: string;
}

/**
 * 用户模型
 */
declare interface UserInfo {
    avatar: string;
    create_time: number;
    id: number;
    last_logintime: number;
    nickname: string;
    open_id: string;
    phone: number;
    realname: string;
    redirect_url: string;
    sass_id: number;
    status: number;
    type: number;
}

/**
 * Token
 */
declare interface Token {
    token?: string;
    access?: string;
}

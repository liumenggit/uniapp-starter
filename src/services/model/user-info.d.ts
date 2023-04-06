declare interface ILogin {
    userName: string
    avatar: string
    phone: number
    roles: Array<string>
    authBtnList: Array<string>
    auth: {
        card: {
            name: string,
            cardId: string
        }
    }
}

declare interface ILoginParams {
    code: string
}

declare interface UserInfosStates {
    userInfo: ILogin
    token: string,
    refreshToken: string
}

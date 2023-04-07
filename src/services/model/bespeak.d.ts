declare interface UserBespeakParams {
    type: number,
    date: string,
}

declare interface UserBespeakModel {
    list: Array<UserBespeakItemModel>
}

declare interface UserBespeakItemModel {
    title: string
    label: number
    status: boolean
}
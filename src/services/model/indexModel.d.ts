declare interface IndexShopModel {
    carousel: Array<string>
    grid: Array<IndexShopGrid>
    notice: Array<string>
    list: Array<IndexShopList>
}

declare interface IndexShopGrid {
    url: string,
    image: string
}

declare interface IndexShopList {
    rightDetail: {
        title: string
        subtitle: string
        time: string
    },
    type: string,
    thumb: string
}
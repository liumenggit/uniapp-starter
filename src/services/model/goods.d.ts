declare interface GoodsType {
    create_time: string;
    id: number;
    sass_id: number;
    status: number;
    title: string;
}


declare interface GoodsItem {
    content?: string;
    cover?: string;
    create_time?: string;
    id?: number;
    is_must?: number;
    price?: string;
    sass_id?: number;
    status?: number;
    title?: string;
    type?: number;
    type_title?: string;
}

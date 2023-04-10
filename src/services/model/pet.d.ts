/**
 * 新建宠物信息
 */
declare interface CreatePetParams {
    /**
     * 宠物名
     */
    name: number;
    /**
     * 宠物销售状态
     */
    status: string;
}

/**
 * 删除宠物信息
 */
declare interface DeletePetParams {
    /**
     * 宠物ID
     */
    petId: number;
}

/**
 * 查询宠物信息
 */
declare interface GetPetParams {
    /**
     * 宠物ID
     */
    petId: number;
}

/**
 * 宠物信息数据
 */
declare interface PetData {
    /**
     * 分组
     */
    category: PetCategory;
    /**
     * 宠物ID编号
     */
    id: number;
    /**
     * 名称
     */
    name: string;
    /**
     * 照片URL
     */
    photoUrls: string[];
    /**
     * 宠物销售状态
     */
    status: PetStatus;
    /**
     * 标签
     */
    tags: PetTag[];
}

/**
 * 分组
 *
 * Category
 */
declare interface PetCategory {
    /**
     * 分组ID编号
     */
    id?: number;
    /**
     * 分组名称
     */
    name?: string;
}

/**
 * 宠物销售状态
 */
declare enum PetStatus {
    Available = 'available',
    Pending = 'pending',
    Sold = 'sold',
}

/**
 * Tag
 */
declare interface PetTag {
    /**
     * 标签ID编号
     */
    id?: number;
    /**
     * 标签名称
     */
    name?: string;
}

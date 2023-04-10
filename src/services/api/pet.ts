import { request } from '@/utils/http';

//新建宠物信息
export function createPet(createPetParams: CreatePetParams) {
    return request.Post<PetData>('pet', createPetParams);
}

//删除宠物信息
export function deletePet(deletePetParams: DeletePetParams) {
    return request.Delete<{ code: number }>('pet', {}, { params: deletePetParams });
}

//修改宠物信息
export function putPet(putPetParams: PetData) {
    return request.Put<PetData>('pet', putPetParams);
}

//查询宠物信息
export function getPet(getPetParams: GetPetParams) {
    return request.Get<PetData[]>('pet', { params: getPetParams });
}

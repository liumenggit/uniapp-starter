import {request} from '@/utils/http';

export function uploadImage(imagePath: string) {
    return request.Post<{ url: string }>('image/upload', {url: imagePath});
}
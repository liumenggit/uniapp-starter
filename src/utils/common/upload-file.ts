import {file} from '@/tmui/components/tm-upload/upload';
import {ResultEnum} from '@/enums/httpEnum';


/**
 * 判断是否上传成功
 * @param {file} item
 * @returns {boolean}
 */
const isUploadSuccess = (item: file) => {
    const d = item.response;
    let isOk = true;
    try {
        const p = JSON.parse(d);
        if (p?.code !== ResultEnum.SUCCESS) {
            isOk = false;
        }
    } catch (e) {
        isOk = false;
    }
    return isOk;
};

export {isUploadSuccess};

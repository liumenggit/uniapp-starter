import {isPhone, toast} from '@/tmui/tool/function/util';   // 显示信息

// 发送验证码
const sendPhoneCode = (phone: number, sendCode: (...args: any[]) => Promise<any>) => {
    if (phone) {
        if (!isPhone(phone as number)) {   // 是否是手机号码
            toast('请输入正确的手机号');   // 显示信息
        } else {
            sendCode(phone).then((res) => {
                toast('发送成功');   // 显示信息
            }).catch((error) => {
                toast('发送失败');   // 显示信息
            }).finally(() => {
                // TODO 倒计时
            });
        }
    } else {
        toast('请输入手机号');   // 显示信息
    }
};

// 测试函数
const test = () => {
    return 'test';
};

export {sendPhoneCode, test};


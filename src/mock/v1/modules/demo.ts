import { defineMock } from '@alova/mock';
import { createMock } from '@/mock/utils';
import { ResultEnum } from '@/enums/httpEnum';
// import Mock from 'better-mock';

export const indexInfo = defineMock({
    '/api/v1/index/commend': () => {
        return createMock({
            code: ResultEnum.SUCCESS, message: '邮箱或密码错误',
            data: {
                carousel: [
                    'https://picsum.photos/720/300',
                    'https://picsum.photos/720/300',
                    'https://picsum.photos/720/300',
                    'https://picsum.photos/720/300',
                    'https://picsum.photos/720/300'
                ],
                grid: [{
                    url: 'page/index/index',
                    image: 'https://picsum.photos/80/80',
                    'title|+1': 1,
                    'class|+1': 1
                }],
                notice: ['一一二二三三四五', '七七七八八九九'],
                list: [{
                    rightDetail: {
                        title: '标题',
                        subtitle: '副标题',
                        time: '有效期时间文本'
                    },
                    type: '小说',
                    thumb: 'https://picsum.photos/100/100'
                }]
            }
        });
    },
    '/api/v1/index/shop': () => {
        return createMock({
            data: {
                carousel: [
                    'https://picsum.photos/720/300',
                    'https://picsum.photos/720/300',
                    'https://picsum.photos/720/300',
                    'https://picsum.photos/720/300',
                    'https://picsum.photos/720/300'
                ],
                grid: [{
                    url: 'page/index/index',
                    image: 'https://picsum.photos/80/80',
                    'title|+1': 1,
                    'class|+1': 1
                }],
                notice: ['一一二二三三四五', '七七七八八九九'],
                list: [{
                    rightDetail: {
                        title: '标题',
                        subtitle: '副标题',
                        time: '有效期时间文本'
                    },
                    type: '小说',
                    thumb: 'https://picsum.photos/100/100'
                }]
            }
        });
    },
    '[POST]/api/v1/user/login': () => {
        return createMock({
            data: {
                userInfo: {
                    userName: '刘老六',
                    phone: '18647012056',
                    avatar: 'https://picsum.photos/80/80',
                    roles: [],
                    authBtnList: [],
                    auth: {
                        card: {
                            name: '刘老六',
                            cardId: '152104199312251919'
                        }
                    }
                },
                token: '185|z8zw9AdGA0Gnxv5E92PjWw3jNNWFTfQVm6wn1Yrv',
                refreshToken: '185|z8zw9AdGA0Gnxv5E92PjWw3jNNWFTfQVm6wn1Yrv'
            }
        });
    },
    '[POST]/api/v1/phone/code/send': () => {
        return createMock({
            data: {},
            message:'发送成功',
            code:ResultEnum.ERROR
        });
    },
    '[POST]/api/v1/image/upload': (request) => {
        return createMock({
            data: {
                url:request.data.url
            },
            message:'设置成功',
            code:ResultEnum.SUCCESS
        });
    },
    '[POST]/api/v1/user/set/nickname': (request) => {
        return createMock({
            data: {
                userName:request.data.userName
            },
            message:'设置成功',
            code:ResultEnum.SUCCESS
        });
    },
    '[POST]/api/v1/phone/code/verify': (request) => {
        console.log(request.data.code as number);
        return createMock({
            data: {
                phone:request.data.phone
            },
            message:request.data.code as number === 404 ? '修改成功':'修改失败',
            code:request.data.code as number === 404 ? ResultEnum.SUCCESS : ResultEnum.ERROR
        });
    }
});

import Const from 'ct-adc-const';

const con = new Const();

const disabled = [
    {key: 2, val: '不限'},
    {key: 0, val: '已启用'},
    {key: 1, val: '已禁用'}
];
const noticeType = [
    {key: 1, val: '公告'},
    {key: 2, val: '活动'}
];
const jumpType = [
    {key: 1, val: '游戏内跳转'},
    {key: 2, val: '超链接'}
];
const contentType = [
    {key: 1, val: '文字'},
    {key: 2, val: '图片'}
];
const contentSourceType = [
    {key: 1, val: '图片链接'},
    {key: 2, val: '上传图片'}
];

con.add({disabled, noticeType, jumpType, contentType, contentSourceType});

// 注册异步常量
con.register('type', {
    axios: {
        url: '/api/type',
        transformResponse: [data=>{
            data = JSON.parse(data);

            if (data.Code === 0){
                return {
                    status: true,
                    data: data.Data
                };
            }
            return {
                status: false,
                data: []
            };
        }],
        params: {
            owner: 'tcy'
        }
    },
    resolve: {
        key: 'Id',
        val: 'Val'
    }
});

export default con;

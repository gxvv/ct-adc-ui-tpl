/**
 * @author rubyisapm
 */
module.exports = {
    '/api/noticeGroup/AddOrUpdate': {
        Code: 0,
        Message: '成功'
    },
    '/api/noticeGroup/getList': {
        Code: 0,
        Data: {
            List: [{
                Id: 1,  //主键id
                GameName: '游戏名称',  //游戏名称
                NoticeName: '公告组名称',  //公告组名称
                BeginDateTime: 11231123123,  //有效期开始时间戳
                EndDateTime: 123123123123,  //有效期结束时间戳
                Creator: '操作人',  //最后编辑者
                Disable: 1  //状态
            }],
            PageIndex: 1,  //页码
            PageSize: 10,  //每页数量
            PageCount: 1,  //页数
            RecordCount: 10  //总记录数
        },
        Message: '操作成功'
    },
    '/api/noticeGroup/updateDisable': {
        Code: 0,
        Message: '操作成功'
    },
    '/api/noticeGroup/getInfo': {
        Code: 0,
        Data: {
            Id: 1,  //主键id
            GameName: '游戏名称',  //游戏名称
            NoticeName: '公告组名称',  //公告组名称
            BeginDateTime: 11231123123,  //有效期开始时间戳
            EndDateTime: 123123123123,  //有效期结束时间戳
            Creator: '操作人',  //最后编辑者
            Disable: 1  //状态
        },
        Message: '操作成功'
    },
    '/api/notice/AddOrUpdate': {
        Code: 0,
        Message: '操作成功'
    },
    '/api/notice/getList': {
        Code: 0,
        Data: {
            List: [{
                Id: 1,  //主键id
                Title: '标题', //公告标题
                OrderNo: 100,  //排序id
                NoticeType: 1,  //公告类型
                ContentType: 1,  //内容类型
                BeginDateTime: 123123123,  //有效期开始时间戳
                EndDateTime: 123123123,  //有效期结束时间戳
                Creator: '操作人',  //最后编辑者
                Disable: 1  //状态
            }],
            PageIndex: 1,
            PageSize: 10,
            PageCount: 1,
            RecordCount: 10
        },
        Message: '操作成功'
    },
    '/api/notice/getInfo': {
        Code: 0,
        Data: {
            Id: 1,  //主键id
            NoticeGroupId: 1,  //公告组ID
            OrderNo: 100,  //排序id
            NoticeType: 1,  //公告类型
            ContentType: 1,  //内容类型
            BeginDateTime: 123123123,  //有效期开始时间戳
            EndDateTime: 123123123,  //有效期结束时间戳
            Creator: '操作人',  //最后编辑者
            Disable: 1, //状态
            Title: '标题',
            IsJump: 1, //是否启用跳转
            JumpType: 1, //跳转类型
            JumpInputValue: 1,
            JumpOtherValue: '',
            JumpSelectValue: '',
            ContentSourceType: 1, //内容类型
            ImageUrl: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=274528582,956623261&fm=173&app=25&f=JPEG?w=218&h=146&s=F8B031D16CF46692C2B95F56030050F1',
            Content: '文字内容'
        },
        Message: '操作成功'
    },
    '/api/notice/updateDisable': {
        Code: 0,
        Message: '操作成功'
    },
    '/api/notice/DelNotice': {
        Code: 0,
        Message: '操作成功'
    },
    '/api/marquee/AddOrUpdate': {
        Code: 0,
        Message: '操作成功'
    },
    '/api/marquee/getList': {
        Code: 0,
        Data: {
            List: [{
                Id: 1,  //主键id
                Title: '标题',  //标题
                Type: 1,  //类型
                BeginDateTime: 123123123,  //有效期开始时间戳
                EndDateTime: 123123123,  //有效期结束时间戳
                Creator: '操作人',  //最后编辑者
                Disable: 1  //状态
            }],
            PageIndex: 1,
            PageSize: 10,
            PageCount: 1,
            RecordCount: 10
        },
        Message: '操作成功'
    },
    '/api/marquee/updateDisable': {
        Code: 0,
        Message: '操作成功'
    },
    '/api/marquee/delRollNews': {
        Code: 0,
        Message: '操作成功'
    },
    '/api/marquee/getInfo': {
        Code: 0,
        Data: {
            Id: 1,  //主键id
            NoticeGroupId: 1,  //公告组ID
            Title: '标题',
            BeginDateTime: 123123123,  //有效期开始时间戳
            EndDateTime: 123123123,  //有效期结束时间戳
            RollInterval: 100,  //时间间隔
            Content: '新闻内容',  
            Creator: '操作人',  //最后编辑者
            Disable: 1  //状态
        },
        Message: '操作成功'
    },
    '/api/common/getRightList': {
        Code: 0,
        Data: [10000, 10001],
        Message: '操作成功'
    },
    '/api/common/getGameList': {
        Code: 0,
        Data: [{
            GameId: 1,  //游戏id
            GameCode: '游戏缩写',  //游戏缩写
            GameName: '游戏名称'  //游戏名称
        }],
        Message: '操作成功'
    }
};

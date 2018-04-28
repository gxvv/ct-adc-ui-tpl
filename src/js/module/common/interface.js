const Interface = {
    group: {
        update: '/api/noticeGroup/AddOrUpdate',
        getList: '/api/noticeGroup/getList',
        updateDisable: '/api/noticeGroup/updateDisable',
        getInfo: '/api/noticeGroup/getInfo'
    },
    notice: {
        update: '/api/notice/AddOrUpdate',
        getList: '/api/notice/getList',
        getInfo: '/api/notice/getInfo',
        updateDisable: '/api/notice/updateDisable',
        delete: '/api/notice/DelNotice'
    },
    marquee: {
        update: '/api/marquee/AddOrUpdate',
        getList: '/api/marquee/getList',
        updateDisable: '/api/marquee/updateDisable',
        delete: '/api/marquee/delRollNews',
        getInfo: '/api/marquee/getInfo'
    },
    common: {
        getRightList: '/api/common/getRightList',
        getGameList: '/api/common/getGameList'
    }
};

export default Interface;

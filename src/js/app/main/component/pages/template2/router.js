import Vue from 'vue';
import VueRouter from 'vue-router';
import GroupList from './components/group-list';
import GroupManage from './components/group-manage';
import NoticeList from './components/notice-list';
import NoticeManage from './components/notice-manage';
import MarqueeList from './components/marquee-list';
import MarqueeManage from './components/marquee-manage';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        component: GroupList,
        path: '/',
        children: [
            {path: 'GroupManage', component: GroupManage}
        ]
    }, {
        component: NoticeList,
        path: '/NoticeList',
        children: [
            {path: 'NoticeManage', component: NoticeManage}
        ]
    }, {
        component: MarqueeList,
        path: '/MarqueeList',
        children: [
            {path: 'MarqueeManage', component: MarqueeManage}
        ]
    }]
});

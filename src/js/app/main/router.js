import Layout from './component/layout.vue';
import Overview from './component/pages/overview.vue';
import Base from './component/pages/base.vue';
import Button from './component/pages/button.vue';
import Font from './component/pages/font.vue';
import Search from './component/pages/search.vue';
import Template1 from './component/pages/template1.vue';
import Template1Detail from './component/modules/detail.vue';
import VueRouter from 'vue-router';
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/overview',
            children: [{
                path: 'overview',
                component: Overview
            },
            {
                path: 'base',
                component: Base
            },
            {
                path: 'button',
                component: Button
            },
            {
                path: 'font',
                component: Font
            },
            {
                path: 'search',
                component: Search
            },
            {
                path: 'template1',
                component: Template1
            },
            {
                path: 'template1/detail/:id',
                component: Template1Detail
            }]
        }
    ]
});

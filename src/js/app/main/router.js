import Layout from './component/layout.vue';
import Overview from './component/pages/overview.vue';
import Base from './component/pages/base.vue';
import DesignStyle from './component/pages/designstyle.vue';
import Button from './component/pages/button.vue';
import Font from './component/pages/font.vue';
import Search from './component/pages/search.vue';
import AutoComplete from './component/pages/autocomplete.vue';
import Pager from './component/pages/pager.vue';
import Modal from './component/pages/modal.vue';
import MiniMsg from './component/pages/minimsg.vue';
import DatePicker from './component/pages/datepicker.vue';
import Table from './component/pages/table.vue';
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
                path: 'designstyle',
                component: DesignStyle
            },
            {
                path: 'datepicker',
                component: DatePicker
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
                path: 'autocomplete',
                component: AutoComplete
            },
            {
                path: 'pager',
                component: Pager
            },
            {
                path: 'modal',
                component: Modal
            },
            {
                path: 'minimsg',
                component: MiniMsg
            },
            {
                path: 'table',
                component: Table
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

import Layout from './component/layout.vue';
import Overview from './component/pages/overview.vue';
import Base from './component/pages/base.vue';
import DesignStyle from './component/pages/designstyle.vue';
import Button from './component/pages/button.vue';
import Font from './component/pages/font.vue';
import Tt from './component/pages/text.vue';
import Search from './component/pages/search.vue';
import AutoComplete from './component/pages/autocomplete.vue';
import Pager from './component/pages/pager.vue';
import Modal from './component/pages/modal.vue';
import MiniMsg from './component/pages/minimsg.vue';
import DatePicker from './component/pages/datepicker.vue';
import Table from './component/pages/table.vue';
import Template1 from './component/pages/template1.vue';
import Template1Detail from './component/modules/detail.vue';
import SlideOut from './component/pages/slideout.vue';
import Loading from './component/pages/loading.vue';
import Transfers from './component/pages/transfers.vue';
import Area from './component/pages/area.vue';
import Uploader from './component/pages/uploader.vue';
import Textarea from './component/pages/textarea.vue';
import Color from './component/pages/color.vue';
import Space from './component/pages/space.vue';
import Principle from './component/pages/principle.vue';

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
                path: 'principle',
                component: Principle
            },
            {
                path: 'base',
                component: Base
            },
            {
                path: 'space',
                component: Space
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
                path: 'text',
                component: Tt
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
            }, {
                path: 'slideOut',
                component: SlideOut
            }, {
                path: 'loading',
                component: Loading
            }, {
                path: 'transfers',
                component: Transfers
            }, {
                path: 'area',
                component: Area
            }, {
                path: 'uploader',
                component: Uploader
            }, {
                path: 'textarea',
                component: Textarea
            }, {
                path: 'color',
                component: Color
            }]
        }
    ]
});

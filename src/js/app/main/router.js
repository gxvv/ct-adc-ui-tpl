import Layout from './component/layout.vue';
import Overview from './component/pages/overview.vue';
import Button from './component/pages/button.vue';
import Font from './component/pages/font.vue';
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
                path: 'button',
                component: Button
            },
            {
                path: 'font',
                component: Font
            }]
        }
    ]
});

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router.js';
import loading from 'ct-adc-loading';
import 'common.css';
import api from 'common/api';
import demo from 'common/demo';
import ds from 'common/desc';
import CodeSnippet from 'common/code-snippet';
import Image from 'common/img';

Vue.use(loading);
Vue.component('api', api);
Vue.component('ds', ds);
Vue.component('demo', demo);
Vue.component('CodeSnippet', CodeSnippet);
Vue.component('Image', Image);

new Vue({
    el: '#layout',
    router
});

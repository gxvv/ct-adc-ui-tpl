import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router.js';
import 'common.css';
new Vue({
    el: '#layout',
    router
});

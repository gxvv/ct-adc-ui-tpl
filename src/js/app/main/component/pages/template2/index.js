import Vue from 'vue';
import router from './router';
import store from './store';
import LoadingPlugin from 'ct-adc-loading';
import PopperPlugin from 'ct-adc-popper';
import VeeValidate from 'vee-validate';
import message from 'vee-validate/dist/locale/zh_CN';
import 'common/vue-filter';
import http from 'common/http';
import Dt from './components/date.vue';

Vue.component('Dt', Dt);

Vue.use(LoadingPlugin);
Vue.use(http);
Vue.use(PopperPlugin);
Vue.use(VeeValidate, {
    locale: 'zh_CN',
    dictionary: {
        'zh_CN': message,
        'no-thing': 1
    }
});

new Vue({
    el: '#template2',
    router,
    store
});

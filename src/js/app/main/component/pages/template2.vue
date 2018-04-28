<template lang="html">
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue';
import LoadingPlugin from 'ct-adc-loading';
import PopperPlugin from 'ct-adc-popper';
import VeeValidate from 'vee-validate';
import message from 'vee-validate/dist/locale/zh_CN';
import 'common/vue-filter';
import http from 'common/http';
import Dt from './template2/components/date.vue';

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
export default { };
</script>

<style lang="css">
</style>

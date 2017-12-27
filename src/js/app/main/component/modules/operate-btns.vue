<template lang="html"><div>
    <router-link class="btn btn-primary btn-xs" :to="{ path: `/template1/detail/${item.Id}` }"><i class="glyphicon glyphicon-eye-open"></i> 查看</router-link>
</div></template>

<script>
import {
    coordinator
} from 'ct-utility';
export default {
    props: {
        item: Object
    },
    methods: {
        goOperateRecord() {
            if (coordinator.isInCTAdm()) {
                coordinator.openCTAdmPage(`HREF#applicationOperationId=${this.item.OperationApplicationId}`, '160301');
            } else {
                window.open(`http://${location.host}/operateRecord.html#applicationOperationId=${this.item.OperationApplicationId}`, '');
            }
        },
        goEdit() {
            if (!this.item.IsPrivate) {
                new MiniMsg({
                    content: '非该订单申请人无编辑权限',
                    type: 'warning',
                    duration: 2
                }).animation();
            } else {
                this.$router.push({path: `/edit/${this.item.OperationApplicationId}`});
            }
        }
    }
};
</script>

<style lang="css">
</style>

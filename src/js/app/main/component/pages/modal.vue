<template lang="html"><div>
    <div>
        <button type="button" class="btn btn-lg btn-primary" @click="showModal('modal-lg')">大</button>
        <button type="button" class="btn btn-primary" @click="showModal('')">中</button>
        <button type="button" class="btn btn-sm btn-primary" @click="showModal('modal-sm')">小</button>
    </div>
    <div class="modal fade" tabindex="-1" role="dialog" ref="modal">
        <div :class="`modal-dialog ${modalType}`" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">标题</h4>
                </div>
                <div class="modal-body">
                    <p>One fine body&hellip;</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary">确定</button>
                </div>
            </div>
        </div>
    </div>
</div></template>

<script>
export default {
    data() {
        return {
            modalType: ''
        };
    },
    methods: {
        showModal(type) {
            this.modalType = type;
            $(this.$refs.modal).modal('show');
        }
    }
};
</script>

<style lang="css">
</style>

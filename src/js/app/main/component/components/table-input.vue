<template>
    <span>
        <span v-if="status === 'input'" v-clickoutside="changeStatus">
            <div>
                <input class="form-control" type="text" name="PriceGroupName" ref="input" :value="item.Data" @change="updateValue($event.target.value)" maxlength="25">
            </div>
        </span>
        <span v-else>
            <span>{{item.Data}}</span>
            <button type="button" class="btn btn-primary btn-xs" @click="edit" v-on:click.stop="doThis"><i class="glyphicon glyphicon-edit"></i> </button>
        </span>
    </span>
</template>
<script type="text/javascript">
    import clickoutside from 'common/directives/clickoutside';
    export default {
        directives: { clickoutside },
        props: {
            item: {
                type: Object,
                default() {
                    return {};
                }
            },
            index: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                status: 'display'
            };
        },
        methods: {
            doThis() {
                return false;
            },
            updateValue(value) {
                new MiniMsg({
                    type: 'success',
                    content: `当前的值是: ${value}`
                }).animation();

                this.$parent.$emit('operate-success', { index: this.index, val: value});
            },
            changeStatus() {
                if (this.status === 'input') {
                    this.status = 'display';
                } else {
                    return false;
                }
            },
            edit() {
                this.status = 'input';
            }
        }
    };
</script>

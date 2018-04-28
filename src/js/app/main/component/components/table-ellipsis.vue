<template>
    <div>
        <div>{{pointsText}}    <span v-if="popText.length > config.limitLength" class="btn-points" data-container="body" data-toggle="popover" data-placement="left" data-trigger="hover" :data-content="popText">...</span></div>
    </div>
</template>
<script type="text/javascript">
    export default {
        props: {
            item: {
                type: Object,
                default() {
                    return {};
                }
            },
            //组件的props
            config: {
                type: Object,
                default() {
                    return {
                        limitLength: 0 //超过多少长度显示缩略提示
                    };
                }
            }
        },
        data() {
            return {};
        },
        computed: {
            pointsText() {
                return this.item.Remark ? this.item.Remark.substring(0, this.config.limitLength) : '';
            },
            popText() {
                return this.item.Remark ? this.item.Remark : '无';
            }
        },
        methods: {
            init() {
                $(function() {
                    $('[data-toggle="popover"]').popover();
                });
            }
        },
        mounted() {
            this.init();
        }
    };
</script>
<style type="text/css">
     .btn-points{
        vertical-align: middle;
        word-break: break-all;
        word-wrap: break-word;
        border: 1px solid #fff;
        height: 20px;
        width: 20px;
        font-size: 20px;
        color: white;
        line-height: 0.3;
        border-radius: 5px;
        padding: 0 1px;
        display: inline-block;
        cursor: pointer;
        background-color: #ccc;
    }
    .btn-points:hover{
        background-color: #ddd;
    }
    .popover-content{
        word-break: break-all;
        word-wrap: break-word;
    }
</style>

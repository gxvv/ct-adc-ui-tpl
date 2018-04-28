<template>
    <div>
        <button type="button" class="btn btn-xs btn-primary" @click="edit">
            <i class="glyphicon glyphicon-edit"></i> 编辑
        </button>
        <button type="button" class="btn btn-xs btn-primary" @click="manageNews">
            <i class="glyphicon glyphicon-edit"></i> 公告条管理
        </button>
        <button type="button" class="btn btn-xs btn-primary" @click="manageMarquee">
            <i class="glyphicon glyphicon-edit"></i> 跑马灯管理
        </button>
        <button type="button" class="btn btn-xs btn-success" @click="updateStatus(0, $event)" v-if="item.Disable===1">
            <i class="glyphicon glyphicon-check"></i> 启用
        </button>
        <button type="button" class="btn btn-xs btn-warning" @click="updateStatus(1, $event)" v-if="item.Disable===0">
            <i class="glyphicon glyphicon-ban-circle"></i> 禁用
        </button>
    </div>
</template>
<script>
import Interface from 'common/interface';

export default{
    name: '',
    props: {
        prop: {
                // 对应的源数据中的字段名
            type: String,
            default: ''
        },
        item: {
                // 所在行的数据信息
            type: Object,
            default(){
                return {};
            }
        },
        index: {
                // 所在行的索引
            type: Number,
            default(){
                return -1;
            }
        },
        data: {
                // 源全局数据，即表格对应的源数据
            type: Array,
            default(){
                return [];
            }
        }
    },
    methods: {
        edit(){
            this.$router.push({
                path: 'GroupManage',
                append: true,
                query: {
                    Id: this.item.Id
                }
            });
        },
        manageNews(){
            this.$router.push({
                path: '/NoticeList',
                query: {
                    NoticeGroupId: this.item.Id
                }
            });
        },
        manageMarquee(){
            this.$router.push({
                path: '/MarqueeList',
                query: {
                    NoticeGroupId: this.item.Id
                }
            });
        },
        updateStatus(status, e){
            this.$pop({
                ref: e.target,
                msg: status ? '确定要禁用吗？' : '确定要启用吗？',
                btns: [{
                    name: '确定',
                    callback: () => {
                        this.$http.post(Interface.group.updateDisable, {
                            Id: this.item.Id,
                            Disable: status
                        }).then(() => {
                            this.$parent.$emit('operate-success');
                        }).catch(msg => {
                            new MiniMsg({
                                content: msg,
                                type: 'error',
                                duration: 2
                            }).animation();
                        });
                    }
                }, {name: '取消'}]
            });
        }
    }
};
</script>

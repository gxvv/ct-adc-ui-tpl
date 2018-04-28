<template>
    <div class="well well-sm clearfix">
        <form action="javascript:;" class="form-horizontal form-horizontal-sm">
            <div class="col-lg-11 col-sm-11 text-nowrap">
                <div class="col-lg-3 col-sm-4">
                    <div class="form-group form-group-sm">
                        <label class="col-sm-4 control-label">标题：</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" placeholder="请输入公告组名称" v-model="form.Title">
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-4">
                    <div class="form-group form-group-sm">
                        <label class="col-sm-4 control-label">状态：</label>
                        <div class="col-sm-8">
                        <select name="" id="" class="form-control" v-model="form.Disable">
                            <option :value="item.key" :key="item.key" v-for="item in source.disabled">{{item.val}}</option>
                        </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-1 col-sm-1 text-right">
                <div class="form-group form-group-sm">
                    <button type="submit" class="btn btn-sm btn-primary" @click="search" :disabled="isSearching">
                        <i class="glyphicon glyphicon-search" v-if="!isSearching"></i>
                        <i class="glyphicon glyphicon-refresh rotate" v-else></i>
                        搜索
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import Const from 'common/const';

const form = {
    Title: '',
    Disable: 2,
    NoticeGroupId: ''
};

export default {
    name: '',
    data(){
        return {
            form: {...form},
            source: {
                disabled: Const.getData('disabled')
            }
        };
    },
    props: ['initIsSearching'],
    computed: {
        isSearching(){
            return this.initIsSearching;
        }
    },
    methods: {
        search(){
            this.$emit('on-search', this.form);
        },
        reset(){
            this.form = {...form};
            this.form.NoticeGroupId = this.$route.query.NoticeGroupId;
            return this.form;
        }
    },
    created(){
        this.form.NoticeGroupId = this.$route.query.Id;
    }
};
</script>

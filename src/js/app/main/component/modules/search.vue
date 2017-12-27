<template lang="html"><div class="well well-sm clearfix">
    <form action="javascript:;" class="form-horizontal">
        <div class="row">
            <div class="col-sm-4">
                <div class="form-group form-group-sm">
                    <label class="control-label col-sm-4">自动完成:</label>
                    <div class="col-sm-8">
                        <auto-complete placeholder="请输入姓名，或ID" :list="list" :keys="['Name', 'Id']" :matchKeys="['Name', 'Id']"
                          :showKeys="['Name', 'Id']" @change="setName"></auto-complete>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-group form-group-sm">
                    <label class="control-label col-sm-4">状态:</label>
                    <div class="col-sm-8">
                        <select class="form-control" v-model="searchForm.Status">
                            <option value="">全部</option>
                            <option value="1">正常</option>
                            <option value="2">解散</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-group form-group-sm">
                    <label class="control-label col-sm-4">序号:</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" v-model="searchForm.Id">
                    </div>
                </div>
            </div>
            <div class="col-sm-2 text-right">
                <button class="btn btn-sm btn-primary" @click="search">
          <i class="glyphicon glyphicon-search"></i> 搜索</button>
            </div>
        </div>
    </form>
</div></template>

<script>
import AutoComplete from 'ct-adc-auto-complete';
export default {
    props: {
        searchForm: {
            type: Object
        }
    },
    components: {
        AutoComplete
    },
    data() {
        return {
            list: []
        };
    },
    methods: {
        setName(row) {
            this.searchForm.Name = row.Name || '';
        },
        search() {
            this.$emit('search');
        },
        setList() {
            this.list = [
                {Id: 1, Name: '打算看了假发'},
                {Id: 2, Name: '打算看了假发'},
                {Id: 3, Name: '打算看了假发'}
            ];
        }
    },
    created() {
        this.setList();
    }
};
</script>

<style lang="css">
</style>

<template>
	<div class="container-fluid">
        <group-search ref="search" @on-search="search" :initIsSearching="isSearching" />
		<div>
			<!-- 操作按钮 -->
			<div class="mb10 clearfix">
	            <button type="button" class="btn btn-sm btn-primary pull-right" @click="create">
	                <span class="glyphicon glyphicon-plus"></span>
	                创建公告组
	            </button>
	        </div>

	        <!-- 表格 -->
	        <adc-table :data="list.data" :status="list.status" :msg="list.msg" v-loading="list.loading" @operate-success="fetchList">
	            <adc-table-column prop="Id" name="序号" width="100"></adc-table-column>
	            <adc-table-column prop="GameName" name="游戏" width="200"></adc-table-column>
	            <adc-table-column prop="NoticeName" name="公告组名称" width="200"></adc-table-column>
	            <adc-table-column name="有效期" :vm="list.vm.operation1" width="400" ></adc-table-column>
	            <adc-table-column prop="Creator" name="最后编辑" width="100"></adc-table-column>
	            <adc-table-column prop="Disable" name="状态" width="100" :mapper="source.disabled"></adc-table-column>
	            <adc-table-column name="操作" :vm="list.vm.operation" width="400"></adc-table-column>
	        </adc-table>

            <!-- 分页 -->
			<page form :curr-page="page.PageIndex" :page-len="page.PageSize" :total-num="RecordCount" @change-page="changePage"></page>
		</div>
        <router-view @on-save="onSave"></router-view>
	</div>
</template>

<script>
import Vue from 'vue';
import {table, column} from 'ct-adc-list';
import Page from 'ct-adc-page';
import Button from './group-button';
import GroupManage from './group-manage';
import GroupSearch from './group-search';
import Interface from 'common/interface';
import Const from 'common/const';

Vue.component('GroupButton', Button);

const page = {
    PageIndex: 1,
    PageSize: 10
};

export default {
    name: 'groupList',
    data() {
        return {
            list: {
                data: [],
                status: true,
                msg: '',
                loading: false,
                vm: {
                    operation: {
                        name: 'GroupButton'
                    },
                    operation1: {
                        name: 'Dt'
                    }
                }
            },
            page: {...page},
            RecordCount: 20,
            isSearching: false,
            searchData: '',
            source: {
                disabled: Const.getData('disabled')
            }
        };
    },
    components: {
        'adc-table': table,
        'adc-table-column': column,
        Page,
        GroupManage,
        GroupSearch
    },
    mounted() {
        this.reset();
    },
    methods: {
        /**
         * 重置搜索条件并读取列表
         */
        reset(){
            this.page = {...page};
            this.searchData = {...this.$refs.search.reset(), ...page};
            this.fetchList();
        },
        /**
         * 读取列表
         */
        fetchList(){
            this.list.loading = true;

            console.log(this.searchData);

            this.$http.get(Interface.group.getList, {
                params: this.searchData
            }).then(res => {
                this.list.data = res.Data.List;

                this.RecordCount = res.Data.RecordCount;
            }).catch(msg => {
                this.list.msg = msg;
            }).then(() => {
                this.list.loading = false;
                this.isSearching = false;
            });
        },
        /**
         * 搜索组件的事件，首先初始化页码，然后获取搜索条件，然后读取列表
         */
        search(data){
            this.isSearching = true;
            this.page = {...page};
            this.searchData = {...data, ...page};
            this.fetchList();
        },
        /**
         * 换页时，首先改变页码，然后改变搜索条件中的页码，然后读取列表
         */
        changePage(page){
            this.page.PageIndex = page;
            this.searchData.PageIndex = page;
            this.fetchList();
        },
        create() {
            this.$router.push({
                path: 'GroupManage',
                append: true
            });
        },
        onSave(id){
            if (id){
                this.fetchList();
                return;
            }
            this.reset();
        }
    }
};
</script>

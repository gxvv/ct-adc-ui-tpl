<template>
	<div class="container-fluid">
        <ol class="breadcrumb" style="margin-bottom:10px;">
            <li><a href="#" @click="$router.push({path: '/'})">活动公告</a></li>
            <li class="active">公告条管理</li>
        </ol>

        <notice-search ref="search" @on-search="search" :initIsSearching="isSearching" />

		<div>
			<!-- 操作按钮 -->
			<div class="mb10 clearfix">
	            <button type="button" class="btn btn-sm btn-primary pull-right" @click="create">
	                <span class="glyphicon glyphicon-plus"></span>
	                创建公告条
	            </button>
	        </div>

	        <!-- 表格 -->
	        <adc-table :data="list.data" :status="list.status" :msg="list.msg" v-loading="list.loading" @operate-success="fetchList">
	            <adc-table-column prop="OrderNo" name="排序ID" width="100"></adc-table-column>
	            <adc-table-column prop="Title" name="标题" width="200"></adc-table-column>
	            <adc-table-column prop="NoticeType" name="类型" width="100" :mapper="source.noticeType"></adc-table-column>
	            <adc-table-column prop="ContentType" name="内容" width="100" :mapper="source.contentType"></adc-table-column>
	            <adc-table-column name="有效期" :vm="list.vm.operation1" width="400"></adc-table-column>
	            <adc-table-column prop="Creator" name="最后编辑" width="100"></adc-table-column>
	            <adc-table-column prop="Disable" name="状态" width="100" :mapper="source.disabled"></adc-table-column>
	            <adc-table-column name="操作" :vm="list.vm.operation" width="200"></adc-table-column>
	        </adc-table>

            <!-- 分页 -->
			<page form :curr-page="page.PageIndex" :page-len="page.PageSize" :total-num="RecordCount" @change-page="changePage"></page>

            <router-view @on-save="onSave" />
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import {table, column} from 'ct-adc-list';
import Page from 'ct-adc-page';
import Button from './notice-button';
import NoticeManage from './notice-manage';
import NoticeSearch from './notice-search';
import Interface from 'common/interface';
import Const from 'common/const';

Vue.component('NoticeButton', Button);

const page = {
    PageIndex: 1,
    PageSize: 10
};

export default {
    name: 'noticeList',
    data() {
        return {
            list: {
                data: [],
                status: true,
                msg: '',
                loading: false,
                vm: {
                    operation: {
                        name: 'NoticeButton'
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
                disabled: Const.getData('disabled'),
                noticeType: Const.getData('noticeType'),
                contentType: Const.getData('contentType')
            }
        };
    },
    components: {
        'adc-table': table,
        'adc-table-column': column,
        Page,
        NoticeManage,
        NoticeSearch
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

            this.$http.get(Interface.notice.getList, {
                params: this.searchData
            }).then(res => {
                this.list.data = res.Data.List;
                this.RecordCount = res.Data.RecordCount;
            }).catch(msg => {
                this.list.status = false;
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
                path: 'NoticeManage',
                append: true,
                query: {
                    NoticeGroupId: this.$route.query.NoticeGroupId
                }
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

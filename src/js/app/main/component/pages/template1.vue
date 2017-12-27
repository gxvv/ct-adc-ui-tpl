<template lang="html">
    <div class="container-fluid">
        <search :searchForm="searchForm" @search="search"></search>
        <adc-table class="mt10" :data="list.data" :status="list.status" :msg="list.msg" :loading="list.loading">
            <adc-table-column prop="Name" name="名称"></adc-table-column>
            <adc-table-column prop="Id" name="序号"></adc-table-column>
            <adc-table-column prop="Status" name="状态" :mapper="list.mapper.status"></adc-table-column>
            <adc-table-column name="操作" :vm="list.vm['operate-btns']" width="200"></adc-table-column>
        </adc-table>
        <page form :curr-page="pageInfo.pageIndex" :page-len="pageInfo.pageSize" :total-num="pageInfo.count" @change-page="changePage"></page>
    </div>
</template>

<script>
import Search from '../modules/search.vue';
import List from 'ct-adc-list';
import Page from 'ct-adc-page';
import Vue from 'vue';
import OperateBtns from '../modules/operate-btns.vue';
Vue.component('operate-btns', OperateBtns);
export default {
    components: {
        Search,
        'adc-table': List['adc-table'],
        'adc-table-column': List['adc-table-column'],
        Page
    },
    data() {
        return {
            list: {
                data: [],
                status: true,
                msg: '',
                loading: false,
                vm: {
                    'operate-btns': {
                        name: 'operate-btns'
                    }
                },
                mapper: {
                    status: [
                        {key: 1, val: '正常'}
                    ]
                }
            },
            searchForm: {
                Name: '',
                Id: '',
                Status: ''
            },
            searchData: {},
            pageInfo: {
                pageIndex: 1,
                count: 0,
                pageSize: 20
            }
        };
    },
    methods: {
        getData() {
            this.list.data = [{
                Id: 1,
                Name: '123123',
                Status: 1
            }];
            this.pageInfo.count = 30;
            this.pageInfo.pageIndex = 1;
            /* const form = $.extend({}, this.searchData, this.pageInfo);

            $.ajax({
                url: API.getClubList,
                data: form,
                cache: false,
                beforeSend: () => {
                    this.list.loading = true;
                    this.list.status = true;
                    this.list.msg = '';
                }
            }).done(res => {
                if (res.Code === 0) {
                    this.list.data = res.Data.List;
                    this.pageInfo.count = res.Data.RecordCount;
                    this.pageInfo.pageIndex = res.Data.PageIndex;
                } else {
                    this.list.status = false;
                    this.list.msg = res.Message;
                }
            }).fail(() => {
                this.list.status = false;
                this.list.msg = '网络错误';
            }).complete(() => {
                this.list.loading = false;
            }); */
        },
        changePage(index) {
            this.pageInfo.pageIndex = index;
            this.getData();
        },
        search() {
            this.pageInfo.pageIndex = 1;
            $.extend(this.searchData, this.searchForm);
            this.getData();
        }
    },
    created() {
        this.search();
    }
};
</script>

<style lang="css">
</style>

<template lang="html">
    <div class="container-fluid">
        <search :searchForm="searchForm" @search="search"></search>
        <adc-table class="mt10" :data="list.data" :status="list.status" :msg="list.msg" :loading="list.loading">
            <adc-table-column prop="ClubNo" name="俱乐部序号"></adc-table-column>
            <adc-table-column prop="ClubName" name="俱乐部名称"></adc-table-column>
            <adc-table-column prop="AgentId" name="创建人同城游序号"></adc-table-column>
            <adc-table-column prop="CreateUnixTime" name="创建时间"></adc-table-column>
            <adc-table-column prop="PlayerAmount" name="成员数量"></adc-table-column>
            <adc-table-column prop="ClubStatus" name="状态" :mapper="list.mapper.status"></adc-table-column>
            <adc-table-column name="操作" :vm="list.vm['operate-btns']" width="200"></adc-table-column>
        </adc-table>
        <page form :curr-page="pageInfo.pageIndex" :page-len="pageInfo.pageSize" :total-num="pageInfo.count" @change-page="changePage"></page>
    </div>
</template>

<script>
import Search from './search.vue';
import List from 'ct-adc-list';
import Page from 'ct-adc-page';
import API from 'common/api';
import Const from 'common/const';
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
                    status: Array.from(Const.ClubStatusMap).map(([key, val]) => ({key, val}))
                }
            },
            ClubStatusMap: Const.ClubStatusMap,
            searchForm: {
                ClubNo: '',
                ClubStatus: '',
                ClubName: '',
                AgentId: ''
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
            const form = $.extend({}, this.searchData, this.pageInfo);

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
            });
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

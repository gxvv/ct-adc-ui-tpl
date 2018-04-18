<template lang="html">
<div>
    <ul class="nav nav-sidebar" v-for="list in nodeTree">
        <li class="pl10"><h5>{{list.title}}</h5></li>
        <li v-for="{path, title, isDev} in list.child" :class="{active: $route.path === `/${path}`}">
            <router-link :to="{path}">{{title}} <span class="glyphicon glyphicon-wrench" v-if="isDev" style="font-size:12px;"></span></router-link>
        </li>
    </ul>
</div></template>

<script>
export default {
    data() {
        return {
            nodeTree: [{
                title: '简介',
                child: [
                    { path: 'overview', title: '简介' }
                ]
            },
            {
                title: '规范',
                child: [
                    { path: 'font', title: '文本规范' }
                ]
            },
            {
                title: '基础',
                child: [
                    // { path: 'designstyle', title: '设计风格' },
                    { path: 'base', title: 'Layout 布局' },
                    { path: 'button', title: 'Button 按钮' }
                    
                ]
            },
            {
                title: '组件',
                child: [
                    // { path: 'modal', title: '弹出表单' },
                    { path: 'table', title: 'table 表格' },
                    // { path: 'search', title: 'search 搜索' },
                    { path: 'autocomplete', title: 'autocomplete 模糊查询' },
                    { path: 'pager', title: 'page 分页' },
                    { path: 'minimsg', title: 'minimsg 弱提示', isDev: true},
                    { path: 'datepicker', title: 'date 时间选择' },
                    { path: 'slideout', title: 'slideout 滑出层' },
                    { path: 'loading', title: 'loading 加载层' },
                    { path: 'transfers', title: 'transfers 穿梭框' },
                    { path: 'area', title: 'area-selector 地区选择' },
                    { path: 'uploader', title: 'uploader 上传', isDev: true},
                    { path: 'textarea', title: 'textarea 文本域'}
                ]
            },
            {
                title: '案例',
                child: [
                    { path: 'template1', title: '案例1' }
                ]
            }
            ]
        };
    },
    created() {}
};
</script>

<style lang="css">
</style>

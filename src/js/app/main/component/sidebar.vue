<template lang="html">
<div>
    <ul class="nav nav-sidebar" v-for="list in nodeTree">
        <li class="pl10"><h5>{{list.title}}</h5></li>
        <li v-for="{path, title} in list.child" :class="{active: $route.path === `/${path}`}">
            <router-link :to="{path}">{{title}}</router-link>
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
                title: '设计',
                child: [
                    { path: 'designstyle', title: '设计风格' },
                    { path: 'base', title: '布局规范' },
                    { path: 'button', title: '按钮规范' },
                    { path: 'font', title: '文本规范' }
                ]
            },
            {
                title: '组件',
                child: [
                    // { path: 'modal', title: '弹出表单' },
                    { path: 'table', title: '列表' },
                    { path: 'search', title: '搜索' },
                    { path: 'autocomplete', title: '自动完成' },
                    { path: 'pager', title: '分页' },
                    { path: 'minimsg', title: '弱提示' },
                    { path: 'datepicker', title: '时间选择' }
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

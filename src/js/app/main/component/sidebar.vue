<template lang="html">
<div>
    <ul class="nav nav-sidebar" v-for="list in nodeTree">
        <li class="pl10"><h5>{{list.title}}</h5></li>
        <li v-for="{path, title, isDev} in list.child" :class="{active: $route.path === `${path}`}">
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
                    { path: '/overview', title: '简介' },
                    { path: '/principle', title: '原则' }
                ]
            },
            {
                title: '规范',
                child: [
                    { path: '/text', title: 'Copywriting 文本' },
                    { path: '/font', title: 'Typography 字体' },
                    { path: '/color', title: 'Color 色彩' },
                    { path: '/space', title: 'Space 间距' },
                    { path: '/permission', title: 'Permission 权限' },
                    { path: '/workflow', title: 'Workflow 流程' }
                ]
            },
            {
                title: '基础',
                child: [
                    { path: '/base', title: 'Layout 布局' },
                    { path: '/button', title: 'Button 按钮' }

                ]
            },
            {
                title: '组件',
                child: [
                    { path: '/area', title: 'Area-selector 地区选择' },
                    { path: '/autocomplete', title: 'Autocomplete 模糊查询' },
                    { path: '/datepicker', title: 'Date 时间选择' },
                    { path: '/loading', title: 'Loading 加载层' },
                    { path: '/minimsg', title: 'Minimsg 弱提示'},
                    { path: '/pager', title: 'Page 分页' },
                    { path: '/pattern-input', title: 'PatternInput 定制输入框' },
                    { path: '/popper', title: 'Popper 气泡' },
                    { path: '/slideout', title: 'Slideout 滑出层' },
                    { path: '/table', title: 'Table 表格' },
                    { path: '/textarea', title: 'Textarea 文本域'},
                    { path: '/transfers', title: 'Transfers 穿梭框' },
                    { path: '/tree', title: 'Tree 树' },
                    { path: '/uploader', title: 'Uploader 上传'}
                    
                    // { path: 'modal', title: '弹出表单' },
                    // { path: 'search', title: 'search 搜索' },
                ]
            },
            {
                title: '案例',
                child: [
                    // { path: '/template1', title: '案例1' },
                    { path: '/template2/GroupList', title: '案例2' }
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

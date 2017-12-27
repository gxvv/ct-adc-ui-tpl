<template lang="html">
<div>
    <ul class="nav nav-sidebar" v-for="list in nodeTree">
        <li v-for="{path, title} in list" :class="{active: $route.path === `/${path}`}">
            <router-link :to="{path}">{{title}}</router-link>
        </li>
    </ul>
</div></template>

<script>
export default {
    data() {
        return {
            nodeTree: [
                [
                    {path: 'overview', title: '简介'}
                ],
                [
                    {path: 'base', title: '基础布局'},
                    {path: 'button', title: '按钮规范'},
                    {path: 'font', title: '字体规范'}
                ],
                [
                    {path: '', title: '弹出表单'},
                    {path: '', title: '列表'},
                    {path: 'search', title: '搜索'},
                    {path: '', title: '自动完成'},
                    {path: '', title: '分页'},
                    {path: '', title: 'tip提示'},
                    {path: '', title: '多tab导航'}
                ],
                [
                    {path: 'template1', title: '模板1'}
                ]
            ]
        };
    },
    created() {
    }
};
</script>

<style lang="css">
</style>

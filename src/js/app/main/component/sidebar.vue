<template lang="html">
<div>
    <ul class="nav nav-sidebar">
        <li class="active">
            <router-link :to="{ path: 'overview'}">简介</router-link>
        </li>
    </ul>
    <ul class="nav nav-sidebar">
        <li><router-link :to="{ path: 'overview'}">基础布局</router-link></li>
        <li><router-link :to="{ path: 'button'}">按钮规范</router-link></li>
        <li><router-link :to="{ path: 'font'}">字体规范</router-link></li>
    </ul>
    <ul class="nav nav-sidebar">
        <li><a href="">弹出表单</a></li>
        <li><a href="">列表</a></li>
        <li><a href="">搜索</a></li>
        <li><a href="">自动完成</a></li>
        <li><a href="">分页</a></li>
        <li><a href="">tip提示</a></li>
        <li><a href="">多tab导航</a></li>
    </ul>
</div></template>

<script>
export default {
};
</script>

<style lang="css">
</style>

<template lang="html"><div>
    <h1 class="page-header">列表组件</h1>
    <p>通用型列表组件。应用于所有数据表的展示。</p>
    <h3>UI规范</h3>
    <markdown>
      表格用于展现特性相同的一组数据

### 应用范围

**是:** 数据属性相同，每项之间为并列关系，无逻辑包含

**不是:** 不适用于关系复杂，相互之间有关联的数据表现

### 细节描述

**状态:** 表格一般有加载中、加载成功、加载失败、无数据四种状态

**展示:** 表格中总是有不同的信息格式，需按照信息的类别进行展示。
如日期、状态、图片等，请参考`信息展示 - 格式`与`通用控件 - 图片`中的相关说明；
链接可以根据情况渲染为可点击的链接，而非一个url地址 根据业务方要求，可以直接显示url地址

**列宽:** 必要时，请根据表格的列添加colgroup进行列宽调整，页面的展示宽度参考`页面架构 - 页面尺寸`中的说明

**操作列:** 操作列尽量在一行展示，避免换行。其中的按钮大小一致，颜色请遵循`通用控件 - 按钮`中的说明，可以视情况修改颜色以区分（如两个绿色按钮挨在一起）

**表格附加信息:** 当页面中含有多表格展示时，请给每个表格加上标题；当表格中数据统计信息时，请放置在表格的上方

### 统一交互

**内容放置:** 垂直方向：表格中的内容统一垂直居中；水平方向：图片水平居中，文字等其他内容靠左对齐

### 组件地址

[github](https://github.com/ct-adc/adc-list)

### 使用场景

1. 首页数据列表


    </markdown>
    <h5 id="example1" class="pt20">例子1</h5>
    <adc-table :data="list.data" :status="list.status" :msg="list.msg" :loading="list.loading">
        <adc-table-column prop="Id" name="ID"></adc-table-column>
        <adc-table-column prop="Name" name="Name" :filter="scope"></adc-table-column>
        <adc-table-column prop="Data" name="Data"></adc-table-column>
        <adc-table-column prop="Status" name="Status"></adc-table-column>
    </adc-table>
</div></template>

<script>
import List from 'ct-adc-list';
import Markdown from 'common/markdown';

export default {
    components: {
        'adc-table': List['adc-table'],
        'adc-table-column': List['adc-table-column'],
        Markdown
    },
    data() {
        return {
            list: {
                data: [
                    { Id: 1, Name: '物品1', Data: '数据', Status: 1 },
                    { Id: 2, Name: '物品2', Data: '数据', Status: 2 },
                    { Id: 3, Name: '物品3', Data: '数据', Status: 3 },
                    { Id: 4, Name: '物品4', Data: '数据', Status: 4 },
                    { Id: 5, Name: '物品5', Data: '数据', Status: 5 }
                ],
                status: true,
                msg: '',
                loading: false
            }
        };
    }
};
</script>

<style lang="css">
</style>

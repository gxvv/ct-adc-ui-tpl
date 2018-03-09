<template lang="html">
<div>
  <h1 class="page-header">时间选择组件</h1>
  <p>时间选择组件</p>
  <h3>UI规范</h3>
  <markdown>
    date/time选择器用于所有需要日期/时间的编辑的情况

### 应用范围

**是:** 所有可以编辑日期/时间的情况

### 细节说明

**格式约束:** 保证结果是合法的日期格式

**清空:** 用户可清空选择的内容

### 统一交互

参照`信息展示 - 格式`中关于日期的说明

### 组件地址

[github](https://github.com/ct-adc/adc-form/blob/master/src/date/readme.md)

### 使用场景

1. 表单中的日期/时间[组]的编辑
  </markdown>
  <h5 id="example1" class="pt20">例子1</h5>
  <dates related :begin-ops="{dateFormat: 'yyyy-MM-dd'}" :end-ops="{dateFormat: 'yyyy-MM-dd'}"
    begin-placeholder="开始时间" end-placeholder="结束时间" ref="dates" @change="updateTime" :initialEndDate="EndDate" :initialBeginDate="BeginDate"></dates>
  <div>
    <code-snippet>
    &lt;dates related :begin-ops="{dateFormat: 'yyyy-MM-dd'}" :end-ops="{dateFormat: 'yyyy-MM-dd'}"
      begin-placeholder="开始时间" end-placeholder="结束时间" ref="dates" @change="updateTime" :initialEndDate="EndDate" :initialBeginDate="BeginDate"&gt;&lt;/dates&gt;
      </code-snippet>
  </div>
</div>
</template>

<script>
import form from 'ct-adc-form';
import Markdown from 'common/markdown';
import CodeSnippet from 'common/code-snippet';
export default {
    components: {
        Markdown,
        CodeSnippet,
        dates: form.DatesInput
    },
    data() {
        return {
            EndDate: $.now(),
            BeginDate: $.now() - 30 * 24 * 36 * 1e5
        };
    },
    methods: {
        updateTime(row) {
            console.log(row);
        }
    }
};
</script>

<style lang="css">
</style>

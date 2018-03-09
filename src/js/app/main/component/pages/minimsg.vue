<template lang="html">
    <div>
      <h1 class="page-header">弱提示</h1>
      <p></p>
      <h3>UI规范</h3>
        <div>
          <markdown>
            弱提示用于页面内的操作反馈，一般用于重要级别较低的信息通知

### 应用范围

**是:** 简单的通知，字数较少，其内容用户一眼就能会意

**不是:** 内容较多，需要用户仔细分析或对后续的操作有提示作用

### 细节说明

* 内容简洁易懂，如内容前附加小图标，控制提示字数

* 布局简单且不影响整体页面，对用户的干扰较小

* 多个弱提示同时被建立时信息重叠： 延迟显示下一个

### 组件地址

[github](https://github.com/ct-adc/adc-mini-msg/tree/master)

### 使用场景

1. 提交后台数据后的成功提示

2. 搜索条件不符合时的提示（因为搜索一般限制较少，或者是必填限制，在表单中已经给出提示，用户非重度依赖该提示）
          </markdown>
        </div>

        <h5>例子1</h5>
        <blockquote>
            点击查看效果
        </blockquote>
        <button type="button" class="btn btn-sm btn-info" @click="showMiniMsg('info')">提示</button>
        <button type="button" class="btn btn-sm btn-success" @click="showMiniMsg('success')">成功</button>
        <button type="button" class="btn btn-sm btn-warning" @click="showMiniMsg('warning')">警告</button>
        <button type="button" class="btn btn-sm btn-danger" @click="showMiniMsg('error')">失败</button>
        <code-snippet>
          &lt;button type="button" class="btn btn-sm btn-info" @click="showMiniMsg('info')"&gt;提示&lt;/button&gt;
          &lt;button type="button" class="btn btn-sm btn-success" @click="showMiniMsg('success')"&gt;成功&lt;/button&gt;
          &lt;button type="button" class="btn btn-sm btn-warning" @click="showMiniMsg('warning')"&gt;警告&lt;/button&gt;
          &lt;button type="button" class="btn btn-sm btn-danger" @click="showMiniMsg('error')"&gt;失败&lt;/button&gt;
        </code-snippet>
    </div>
</template>

<script>
import Markdown from 'common/markdown';
import CodeSnippet from 'common/code-snippet';
export default {
    components: {
        Markdown,
        CodeSnippet
    },
    methods: {
        showMiniMsg(type) {
            new MiniMsg({
                type,
                content: '提示内容'
            }).animation();
        }
    }
};
</script>

<style lang="css">
</style>

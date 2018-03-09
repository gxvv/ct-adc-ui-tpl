<template lang="html">
  <article>
    <h1 class="page-header">简介</h1>
    <section>
      <markdown>
        本规范用于定义后台开发系统中的页面设计和交互设计规则，保证界面统一性。

        ### 释义

设计原则是系统开发中需要遵循的通用规则，为整个系统的交互设计指定方向

### 布局整洁，内容优先

布局上遵循栅格化，格局明确，层次清晰。

### 简单直接

在信息展示上遵循“简单直接”的方式，避免隐晦的内容展示，请直接告诉用户他/她可能需要的信息。

### 流程连贯，即时反馈

用户的操作流程符合用户习惯，流程清晰可预见；在用户的操作中，积极引导其顺利完成整个流程。

### 稳定高效

在交互中做到操作简便，积极提示。帮其容错，给他/她机会。

      </markdown>
    </section>
  </article>
</template>

<script>
import Markdown from 'common/markdown';
export default {
    components: {
        Markdown
    }
};
</script>

<style lang="css">
</style>

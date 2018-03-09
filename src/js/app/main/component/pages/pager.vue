<template lang="html">
  <div>
    <h1 class="page-header">分页组件</h1>
    <p>通用型分页组件。</p>
    <h3>UI规范</h3>
    <markdown>
      当信息量比较大时，采用分页加载的方式，便于用户快速查看

### 应用范围

**是:** 需要分页显示的信息都可以使用翻页

**不是:** 是否跳转不是必选功能，在内容较少时可以不添加该功能

### 细节说明

页码需要给出明确的信息总量提示，明确用户的位置，给予用户便捷的操作

**基于位置:** 向用户显示他们在产品的哪一个页面，以及共多少个页面

**基于路径:** 显示用户到达前一页、后一页、或某个特定页面的跳转步骤

### 组件地址

[github](https://github.com/ct-adc/adc-page)
    </markdown>
    <page form
          :curr-page="pageCfg.pageIndex"
          :page-len="pageCfg.pageSize"
          :total-num="pageCfg.count" @change-page="changePage"></page>
  </div>
</template>

<script>
import Page from 'ct-adc-page';
import Markdown from 'common/markdown';
export default {
    components: {
        Page,
        Markdown
    },
    data() {
        return {
            pageCfg: {
                pageIndex: 1,
                count: 200,
                pageSize: 20
            }
        };
    },
    methods: {
        changePage(page) {
            this.pageCfg.pageIndex = page;
        }
    }
};
</script>

<style lang="css">
</style>

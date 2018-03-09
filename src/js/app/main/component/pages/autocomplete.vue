<template lang="html">
  <div>
    <h1 class="page-header">自动完成组件</h1>
    <p>自动完成。适用于固定的列表，方便快速选择。</p>
    <h3>UI规范</h3>
    <markdown>
      自动匹配即具有自动匹配功能的输入框。当系统限制用户只能使用某一特定集合中的数据，且这个集合较大，此时使用自动匹配

### 应用范围

**是:** 数据量较大，用户通过输入内容来匹配要选择的数据

**不是:** 数据可以被罗列时，请使用单选(radio)或下拉框(select)

### 细节说明

**匹配:** 输入内容后自动匹配出对应的数据

**重置:** 输入框可被清空，操作可逆

**状态:** 当数据需要实时请求时，需有"加载中"状态，以提示用户

**数据要求:** 因为结果只有一个，所以集合中的数据项要求有主键或组合主键的概念，保证每项数据的唯一性

**数据渲染:** 当数据量过大时，下拉列表中需给出"加载更多"让用户自行选择是否加载

### 组件地址

[github](https://github.com/ct-adc/adc-auto-complete)

### 使用场景

1. 选择一个游戏
    </markdown>
    <h5 id="example1" class="pt20">例子1</h5>
    <auto-complete placeholder="请输入游戏ID或名称" :list="aclist"
      :keys="['Name', 'Id', 'Code']" :matchKeys="['Name', 'Id', 'Code']"
      :showKeys="['Name', 'Id', 'Code']" @change="setScopeId" autoClear></auto-complete>
      <div></div>
      <code-snippet>
        &lt;auto-complete placeholder="请输入游戏ID或名称" :list="aclist"
          :keys="['Name', 'Id', 'Code']" :matchKeys="['Name', 'Id', 'Code']"
          :showKeys="['Name', 'Id', 'Code']" @change="setScopeId" autoClear&gt;&lt;/auto-complete&gt;
      </code-snippet>
  </div>
</template>

<script>
import AutoComplete from 'ct-adc-auto-complete';
import Markdown from 'common/markdown';
import CodeSnippet from 'common/code-snippet';
export default {
    data() {
        return {
            aclist: [
                {Name: 'Name1', Id: '1', Code: '1'},
                {Name: 'Name2', Id: '2', Code: '2'},
                {Name: 'Name3', Id: '3', Code: '3'},
                {Name: 'Name4', Id: '4', Code: '4'},
                {Name: 'Name5', Id: '5', Code: '5'},
                {Name: 'Name6', Id: '6', Code: '6'}
            ]
        };
    },
    components: {
        AutoComplete,
        Markdown,
        CodeSnippet
    },
    methods: {
        setScopeId() {}
    }
};
</script>

<style lang="css">
</style>

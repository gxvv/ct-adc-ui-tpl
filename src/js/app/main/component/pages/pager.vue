<template lang="html">
  <div class="page-container">
      <ds pt2="分页" desc="分页组件"/>
      <ds pt3="何时使用" desc="展现数据，跟表格结合" />
    
    <demo title="基本用法" desc="基本分页">
        <page form
        :curr-page="pageCfg.pageIndex"
        :page-len="pageCfg.pageSize"
        :total-num="pageCfg.count" @change-page="changePage" slot="source" class="clearfix"></page>
      <code-snippet slot="code">
        &lt;page form
              :curr-page="pageCfg.pageIndex"
              :page-len="pageCfg.pageSize"
              :total-num="pageCfg.count" @change-page="changePage"&gt;&lt;/page&gt;
      </code-snippet>
    </demo>
    <api :attrs="attrs" :events="events" :methods="methods" />
  </div>
</template>

<script>
import Page from 'ct-adc-page';
import Markdown from 'common/markdown';
import CodeSnippet from 'common/code-snippet';
export default {
    components: {
        Page,
        Markdown,
        CodeSnippet
    },
    data() {
        return {
            pageCfg: {
                pageIndex: 1,
                count: 200,
                pageSize: 20
            },
            attrs: [
                {name: 'currPage', desc: '当前页', type: 'Number', default: 1, all: '-'},
                {name: 'pageLen', desc: '每页数量', type: 'Number', default: 10, all: '-'},
                {name: 'totalNum', desc: '记录总数', type: 'Number', default: 1000, all: '-'},
                {name: 'form', desc: '是否显示跳转', type: 'Boolean', default: false, all: '-'},
                {name: 'spage', desc: '页面几页后省略', type: 'Number', default: 5, all: '-'},
                {name: 'topPage', desc: '省略号前显示页数', type: 'Number', default: 1, all: '-'},
                {name: 'afterPage', desc: '省略号后显示页数', type: 'Number', default: 1, all: '-'}
            ],
            events: [
                {name: 'change-page', params: 'page,当前页改变 ', desc: '前页发生变化时，发生该事件'}
            ],
            methods: [
                {name: 'setPage', params: 'page', desc: '要翻到哪一页', rt: '-'}
            ]
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

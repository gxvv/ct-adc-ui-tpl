<template lang="html">
  <div class="page-container">
        <ds pt2="Layout 布局">
            <p slot="desc">遵循栅格化，详见<a href="https://v3.bootcss.com/css/#grid" target="_blank">bootstrap</a></p>
        </ds>
        <ds pt3="页面尺寸" desc="正常情况下，页面被嵌入到宽度为1172px的框架内部，页面布局时需要考虑在该宽度下页面能够较好显示。备注: 1172px为公司通用电脑下chrome中显示的尺寸，会根据浏览器和系统有小范围的误差。" />
        <ds pt3="控件尺寸" desc="页面元素的通用尺寸：bootstrap中的尺寸级别sm(small)；但这并不意味着所有的元素，比如你可能需要比通用更大一号的尺寸，比如导航区域的内容。" />

        <demo title="基本布局">
            <p slot="desc">12列、6列、2列，使用<code>col-*</code>类进行布局</p>
            <div slot="source" class="showgrid">
                <div class="row">
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                    <div class="col-md-1">.col-md-1</div>
                </div>
                <div class="row">
                    <div class="col-md-2">.col-md-2</div>
                    <div class="col-md-2">.col-md-2</div>
                    <div class="col-md-2">.col-md-2</div>
                    <div class="col-md-2">.col-md-2</div>
                    <div class="col-md-2">.col-md-2</div>
                    <div class="col-md-2">.col-md-2</div>
                </div>
                <div class="row">
                    <div class="col-md-6">.col-md-6</div>
                    <div class="col-md-6">.col-md-6</div>
                </div>
            </div>
            <code-snippet slot="code">
                &lt;div class="row"&gt;
                    &lt;div class="col-md-1"&gt;.col-md-1&lt;/div&gt;
                    &lt;div class="col-md-1"&gt;.col-md-1&lt;/div&gt;
                    &lt;div class="col-md-1"&gt;.col-md-1&lt;/div&gt;
                    &lt;div class="col-md-1"&gt;.col-md-1&lt;/div&gt;
                    &lt;div class="col-md-1"&gt;.col-md-1&lt;/div&gt;
                    &lt;div class="col-md-1"&gt;.col-md-1&lt;/div&gt;
                    &lt;div class="col-md-1"&gt;.col-md-1&lt;/div&gt;
                    &lt;div class="col-md-1"&gt;.col-md-1&lt;/div&gt;
                    &lt;div class="col-md-1"&gt;.col-md-1&lt;/div&gt;
                    &lt;div class="col-md-1"&gt;.col-md-1&lt;/div&gt;
                    &lt;div class="col-md-1"&gt;.col-md-1&lt;/div&gt;
                    &lt;div class="col-md-1"&gt;.col-md-1&lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="row"&gt;
                    &lt;div class="col-md-2"&gt;.col-md-2&lt;/div&gt;
                    &lt;div class="col-md-2"&gt;.col-md-2&lt;/div&gt;
                    &lt;div class="col-md-2"&gt;.col-md-2&lt;/div&gt;
                    &lt;div class="col-md-2"&gt;.col-md-2&lt;/div&gt;
                    &lt;div class="col-md-2"&gt;.col-md-2&lt;/div&gt;
                    &lt;div class="col-md-2"&gt;.col-md-2&lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="row"&gt;
                    &lt;div class="col-md-6"&gt;.col-md-6&lt;/div&gt;
                    &lt;div class="col-md-6"&gt;.col-md-6&lt;/div&gt;
                &lt;/div&gt;
            </code-snippet>
        </demo>
  </div>
</template>

<script>
import Markdown from 'common/markdown';

export default {
    components: {
        Markdown
    },
    mounted() {
        const {hljs} = window;

        $('pre code,.csscode').each(function(i, block) {
            hljs.highlightBlock(block);
        });

        const clipboard = new window.Clipboard('.clip', {
            text: function(target) {
                console.log($($(target).data('target')).text());
                return $($(target).data('target')).text();
            }
        });

        clipboard.on('success', function(e) {
            new MiniMsg({content: '复制成功'}).animation();
            e.clearSelection();
        });
    }
};
</script>

<style lang="css" scoped>
    .showgrid [class^=col-]{
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #eee;
        background-color: rgba(86,61,124,.15);
        border: 1px solid #ddd;
        border: 1px solid rgba(86,61,124,.2);
    }
</style>

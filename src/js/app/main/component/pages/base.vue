<template lang="html">
  <div>
      <h1 class="page-header">布局</h1>
      <markdown>
### 释义

页面架构定义了页面布局，系统中的页面分布和页面间的跳转等内容

### 范围

页面架构包含但不限于页面布局、页面尺寸等

---

### 立体空间

![](/assets/页面架构.png)

### 栅格化

页面布局遵循栅格化(bootstrap支持)

---

### 页面尺寸

正常情况下，页面被嵌入到宽度为**1172px**的框架内部，页面布局时需要考虑在该宽度下页面能够较好显示。

**备注: ** **1172px**为公司通用电脑下chrome中显示的尺寸，会根据浏览器和系统有小范围的误差。

### 控件尺寸

页面元素的通用尺寸：bootstrap中的尺寸级别sm(small)；
但这并不意味着所有的元素，比如你可能需要比通用更大一号的尺寸，比如导航区域的内容。

![](/assets/size.png)

**按钮参考高度**

当按钮中字体为12px时，在mac chrome中的按钮的高度:

**xs:** 22px
**sm:** 30px
**def:** 34px
**lg:** 46px

      </markdown>
      <div><p>
          <blockquote>
              <a href="javascript:;" class="clip" data-target="#id1">
                复制代码
              </a>
          </blockquote>
          <pre><code class="html" id="id1">
              &lt;div class="container-fluid"&gt;&lt;/div&gt;
            </code></pre>
      </p>

      <div class="row text-center">
          <div class="col-xs-2">
            <blockquote>
                上边距5像素
            </blockquote>
            <span class="csscode" id="id2">.pt5</span>
            <a href="javascript:;" class="clip" data-target="#id2">
              复制
            </a>
          </div>
          <div class="col-xs-2">
            <blockquote>
                右边距5像素
            </blockquote>
            <span class="csscode" id="id3">.pr5</span>
            <a href="javascript:;" class="clip" data-target="#id3">
              复制
            </a>
          </div>
          <div class="col-xs-2">
            <blockquote>
                下边距5像素
            </blockquote>
            <span class="csscode" id="id4">.pb5</span>
            <a href="javascript:;" class="clip" data-target="#id4">
              复制
            </a>
          </div>
          <div class="col-xs-2">
            <blockquote>
                左边距5像素
            </blockquote>
            <span class="csscode" id="id5">.pl5</span>
            <a href="javascript:;" class="clip" data-target="#id5">
              复制
            </a>
          </div>
      </div>
      </div>
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

<style lang="css">
</style>

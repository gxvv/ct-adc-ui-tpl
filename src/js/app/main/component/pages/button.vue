<template lang="html">
<div>
    <h1 class="page-header">按钮规范</h1>
    <h2>样式</h2>
    <div>
        <p>
            <button type="button" class="btn btn-default">（默认样式）Default</button><br>
            推荐用法：取消、关闭。当取消、关闭操作不会产生任何影响时使用。
            <blockquote>
                <a href="javascript:;" class="clip" data-clipboard-text="Just because you can doesn't mean you should — clipboard.js">
                  复制代码
                </a>
            </blockquote>
            <pre><code class="html">&lt;button type="button" class="btn btn-default"&gt;（默认样式）Default&lt;/button&gt;</code></pre>
        </p>
        <p>
            <button type="button" class="btn btn-primary">（首选项）Primary</button><br>
            推荐用法：确认、提交、搜索或推荐用户点击此按钮时。
        </p>
        <p>
          <button type="button" class="btn btn-success">（成功）Success</button><br>
          推荐用法：通过、导出。
        </p>
        <p>
          <button type="button" class="btn btn-danger">（危险）Danger</button><br>
          推荐用法：取消、关闭、不通过、删除。当取消、关闭一个含有表单的窗口时，会丢失当前表单的数据，使用此按钮。当不通过一条申请，删除一条记录时。
        </p>
        <p>
          <button type="button" class="btn btn-link">（链接）Link</button><br>
          推荐用法：下载链接。
        </p>
        <p>
          <button type="button" class="btn btn-info">（一般信息）Info</button><br>
          推荐用法：上传按钮。
        </p>
        <p>
          <button type="button" class="btn btn-warning">（警告）Warning</button><br>
          推荐用法：无。
        </p>
    </div>
    <h2>尺寸</h2>
    <blockquote>
      .btn-lg、.btn-sm 或 .btn-xs 就可以获得不同尺寸的按钮。
    </blockquote>
    <p>
        <button type="button" class="btn btn-primary">（默认尺寸）Default button</button><br>
        推荐用法：常规使用此按钮。
    </p>
    <p>
        <button type="button" class="btn btn-primary btn-xs">（超小尺寸）Extra small button</button><br>
        推荐用法：表格中使用。
    </p>
    <p>
        <button type="button" class="btn btn-primary btn-sm">（小按钮）Small button</button><br>
        推荐用法：无。
    </p>
    <p>
        <button type="button" class="btn btn-primary btn-lg">（大按钮）Large button</button><br>
        推荐用法：无。
    </p>
</div></template>
<script>
export default {
    mounted() {
        const {hljs} = window;

        console.log(hljs);
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });

        const clipboard = new window.Clipboard('.clip', {
            text: function() {
                return $('.html').text();
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

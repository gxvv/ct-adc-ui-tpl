<template lang="html">
<div>
    <h1 class="page-header">按钮规范</h1>
    <h2>样式</h2>
    <blockquote cite="http://">
      点击按钮复制代码
    </blockquote>
    <div>
        <div class="row">
            <div class="col-xs-2">
                <button type="button" class="btn btn-default" data-clipboard-text='<button type="button" class="btn btn-default">（默认样式）Default</button>'>（默认样式）Default</button>
            </div>
            <div class="col-xs-10">
                <b>默认按钮</b>
                <p class="tip">推荐用法：取消、关闭。当取消、关闭操作不会产生任何影响时使用。</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2">
                <button type="button" class="btn btn-primary" data-clipboard-text='<button type="button" class="btn btn-primary">（首选项）Primary</button>'>（首选项）Primary</button>
            </div>
            <div class="col-xs-10">
                <b>首选项按钮</b>
                <p class="tip">推荐用法：确认、提交、搜索或推荐用户点击此按钮时。</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2">
                <button type="button" class="btn btn-success" data-clipboard-text='<button type="button" class="btn btn-success">（成功）Success</button><br>'>（成功）Success</button>
            </div>
            <div class="col-xs-10">
                <b>成功按钮</b>
                <p class="tip">推荐用法：通过、导出。</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2">
                <button type="button" class="btn btn-danger" data-clipboard-text='<button type="button" class="btn btn-danger">（危险）Danger</button><br>'>（危险）Danger</button>
            </div>
            <div class="col-xs-10">
                <b>危险按钮</b>
                <p class="tip">推荐用法：取消、关闭、不通过、删除。当取消、关闭一个含有表单的窗口时，会丢失当前表单的数据，使用此按钮。当不通过一条申请，删除一条记录时。</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2">
                <button type="button" class="btn btn-link" data-clipboard-text='<button type="button" class="btn btn-link">（链接）Link</button><br>'>（链接）Link</button>
            </div>
            <div class="col-xs-10">
                <b>链接按钮</b>
                <p class="tip">推荐用法：下载链接。</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2">
                <button type="button" class="btn btn-info" data-clipboard-text='<button type="button" class="btn btn-info">（一般信息）Info</button><br>'>（一般信息）Info</button>
            </div>
            <div class="col-xs-10">
                <b>一般按钮</b>
                <p class="tip">推荐用法：上传按钮。</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2">
                <button type="button" class="btn btn-warning" data-clipboard-text='<button type="button" class="btn btn-warning">（警告）Warning</button><br>'>（警告）Warning</button>
            </div>
            <div class="col-xs-10">
                <b>警告按钮</b>
                <p class="tip">推荐用法：无。</p>
            </div>
        </div>
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

        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });

        new window.Clipboard(document.querySelectorAll('[data-clipboard-text]')).on('success', function(e) {
            new MiniMsg({content: '复制成功'}).animation();
            e.clearSelection();
        });
    }
};
</script>
<style lang="css">
</style>

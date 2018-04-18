<template lang="html">
<div class="page-container">
    <ds pt2="Button 按钮" desc="操作按钮" />

    <demo title="基础用法" desc="基础用法">
        <div slot="source">
            <div>
                <button class="btn btn-default">默认按钮</button>
                <button class="btn btn-primary">主要按钮</button>
                <button class="btn btn-success">成功按钮</button>
                <button class="btn btn-warning">警告按钮</button>
                <button class="btn btn-danger">危险按钮</button>
            </div>
        </div>
    </demo>

    <demo title="不同尺寸" desc="各种尺寸大小的按钮">
            <div slot="source">
                <div>
                    <button class="btn btn-primary btn-xs">主要按钮</button>
                    <button class="btn btn-primary btn-sm">主要按钮</button>
                    <button class="btn btn-primary">主要按钮</button>
                    <button class="btn btn-primary btn-lg">主要按钮</button>
                </div>
            </div>
        </demo>
</div>
</template>
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

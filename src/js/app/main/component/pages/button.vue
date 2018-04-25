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
                <button class="btn btn-primary btn-xs">主要按钮 .btn-xs</button>
                <button class="btn btn-primary btn-sm">主要按钮 .btn-sm</button>
                <button class="btn btn-primary">主要按钮</button>
                <button class="btn btn-primary btn-lg">主要按钮 .btn-lg</button>
            </div>
        </div>
    </demo>

    <demo title="图标按钮">
        <p slot="desc">带图标的按钮可增强辨识度（有文字）或节省空间（无文字），图标库：<a href="http://glyphicons.com/">glyphicons</a></p>
        <div slot="source">
            <div>
                <button class="btn btn-primary"><i class="glyphicon glyphicon-refresh"></i> 刷新</button>
                <button class="btn btn-primary"><i class="glyphicon glyphicon-zoom-in"></i> 放大</button>
                <button class="btn btn-primary"><i class="glyphicon glyphicon-zoom-out"></i> 缩小</button>
                <button class="btn btn-primary"><i class="glyphicon glyphicon-download-alt"></i> 下载</button>
                <button class="btn btn-primary"><i class="glyphicon glyphicon-print"></i> 打印</button>
            </div>
            <br>
            <div>
                <button class="btn btn-primary"><i class="glyphicon glyphicon-refresh"></i></button>
                <button class="btn btn-primary"><i class="glyphicon glyphicon-zoom-in"></i></button>
                <button class="btn btn-primary"><i class="glyphicon glyphicon-plus"></i></button>
                <button class="btn btn-primary"><i class="glyphicon glyphicon-th-list"></i></button>
                <button class="btn btn-primary"><i class="glyphicon glyphicon-off"></i></button>
            </div>
        </div>
    </demo>

    <demo title="加载中" desc="点击按钮后进行数据加载操作，在按钮上显示加载状态">
        <div slot="source">
            <div>
                <button class="btn btn-primary" disabled><i class="glyphicon glyphicon-refresh rotate"></i> 保存中</button>
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

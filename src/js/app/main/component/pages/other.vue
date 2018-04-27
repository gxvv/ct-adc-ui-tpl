<template>
    <div class="page-container">
        <ds pt2="其他规范" desc="编辑等操作中的一些细节交互" />
        
        <api name="其他" desc="" :interactives="interactives"/>

        <image :src="'../../../../images/1-1.jpg'" desc="1-1" />
    </div>
</template>
<script>
export default {
    data(){
        return {
            interactives: [
                {name: '新增、编辑', desc: '无特殊情况（交互复杂的操作页），使用slideout组件展示'},
                {name: '新增保存', desc: '见下图 1-1'},
                {name: '编辑保存', desc: '编辑保存完毕后关闭弹层，回到列表页，不清空筛选条件并刷新列表'},
                {name: '表单标题', desc: '标题+：，例如 email：'},
                {name: '表单必填项', desc: '表单必填项，标题左边加上红色*'},
                {name: '底部按钮位置', desc: '保存左，取消右'},
                {name: '长度控制', desc: '统一为字符串长度，例如：哈哈123，长度为5'},
                {name: '权限', desc: '无查看权限，则显示 无权限页面，无操作权限，隐藏相关按钮'}
            ]
        };
    }
};
</script>



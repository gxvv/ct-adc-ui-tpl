<template>
    <div class="page-container">
        <ds pt2="其他规范" desc="编辑等操作中的一些细节交互" />
        
        <api name="其他" desc="" :interactives="interactives"/>
        
        <div class="img-wrap">
            <img src="https://raw.githubusercontent.com/urlego/ct-adc-ui-tpl/master/asset/images/1.png" alt="" class="img">
            <div class="desc">1-1</div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            interactives: [
                {name: '新增、编辑', desc: '无特殊情况（交互复杂的操作页），使用slideout组件展示'},
                {name: '新增/编辑时保存', desc: '流程见下图 1-1'},
                {name: '新增/编辑时保存', desc: '点击保存时，显示loading层（阻止鼠标点击）'},
                {name: '表单标题', desc: '标题+：，例如 email：'},
                {name: '表单必填项', desc: '表单必填项，标题左边加上红色*'},
                {name: '底部按钮位置', desc: '保存左，取消右'},
                {name: '长度控制', desc: '统一为字符串长度，例如：哈哈123，长度为5'},
                {name: '权限', desc: '无查看权限，则显示 无权限页面，无操作权限，隐藏相关按钮'},
                {name: 'placeholder', desc: '简单的提示，格式：请输入xxx'}
            ]
        };
    }
};
</script>

<style>
    .img-wrap{
        margin: 20px auto;
        max-width: 800px;
        border: 1px #eee solid;
    }
    .img{
        display: block;
        width: 100%;
        margin-bottom: 15px;
    }
    .desc{
        text-align: center;
        font-size: 14px;
        color: #999;
        line-height: 40px;
        border-top: 1px #eee solid;
    }
</style>



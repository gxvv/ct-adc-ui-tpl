<template>
    <div class="page-container">
        <ds pt2="其他规范"><p slot="desc">编辑等操作中的一些细节交互，详见<router-link to="/template2/GroupList">案例2</router-link></p></ds>

        <!-- <ds pt3="新增、编辑">
            <div slot="desc">
                <p>新增编辑时有许多细节需要注意，在这里详细说明</p>
            </div>
        </ds>
        <ds pt4="页面展现方式" desc="slideout组件，如果页面中的交互复杂，例如有其他复杂的弹窗，则跳转页面" />
        
        <ds pt4="保存操作">
            <div slot="desc">
                <p>点击保存，流程如下</p>
                <div class="img-wrap">
                    <img src="https://raw.githubusercontent.com/urlego/ct-adc-ui-tpl/master/asset/images/1.png" alt="" class="img">
                    <div class="desc">1-1</div>
                </div>
            </div>
        </ds>
        
        <ds pt3="表单" desc="" /> -->

        <api name="其他" desc="" :interactives="interactives"/>
        
        

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
                {name: 'placeholder', desc: '简单的提示，格式：请输入xxx；或者简单的格式要求，例如：数字且不超过10位'},
                {name: '验证提示', desc: '操作页中提示在控件下方，搜索时使用弱提示'},
                {name: '列表之间的跳转', desc: '父列表-子列表，子列表刷新；返回时，不刷新父列表'},
                {name: '切换条件', desc: '切换条件时，对应的控件要reset'}
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



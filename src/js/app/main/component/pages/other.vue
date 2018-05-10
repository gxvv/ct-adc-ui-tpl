<template>
    <div class="page-container">
        <ds pt2="其他规范"><p slot="desc">主要涉及表单提交页面中的一些交互，这一块有很多细节，还好我们有<router-link to="/template2/GroupList">案例2</router-link>，不清楚的话可以参考</p></ds>

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

        <api name="表单页" desc="表单页中的规范" :interactives="interactives"/>

        <!-- <div class="img-wrap">
            <img src="https://raw.githubusercontent.com/urlego/ct-adc-ui-tpl/master/asset/images/1.png" alt="" class="img">
            <div class="desc">1-1</div>
        </div> -->

        <api name="权限" desc="权限规范" :interactives="interactives1"/>

        <api name="提示" desc="提示规范" :interactives="interactives2"/>

        <api name="页面" desc="页面展示、页面切换规范" :interactives="interactives3"/>

    </div>
</template>
<script>
export default {
    data(){
        return {
            interactives: [
                {name: '读取页面信息、保存页面信息时', desc: 'loading层覆盖整个页面'},
                {name: '底部按钮位置', desc: '保存左，取消右'},
                {name: '表单label文案格式', desc: '标题+：，例如 email：'},
                {name: '表单必填项', desc: '表单必填项，标题左边加上红色*'},
                {name: '表单长度限制', desc: '字符串长度，例如：我的名字是xxx，长度为8，不区分中、英、数字等'},
                {name: '表单placeholder', desc: '简单的提示，格式：请输入xxx；或者简单的格式提示，例如：数字且不超过10位'},
                {name: '切换条件', desc: '切换条件时，对应的控件要reset'}
            ],
            interactives1: [
                {name: '权限', desc: '无查看权限，则显示 无权限页面，无操作权限，隐藏相关按钮'}
            ],

            interactives2: [
                {name: '前端验证表单合法性时的提示', desc: '提示在表单下方'},
                {name: '保存时成功提示', desc: '弱提示，minimsg'},
                {name: '保存时失败提示', desc: '提示在保存按钮上方，alert-danger'},
                {name: '一般接口请求失败时', desc: '如果信息比较简单，minimsg展示；否则，在对应的位置展现（同前端验证表单合法性时的表现）'}
            ],

            interactives3: [
                {name: '添加、编辑页 展示', desc: '无特殊情况（交互复杂的操作页，例如有其他的弹窗），使用slideout组件展示'},
                {name: '列表之间的跳转', desc: '父列表-子列表，子列表刷新；返回时，不刷新父列表；子列表头部展示 面包屑'}
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



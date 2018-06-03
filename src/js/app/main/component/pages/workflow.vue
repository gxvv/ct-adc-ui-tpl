<template>
    <div class="page-container">
        <ds pt2="Workflow 流程"><p slot="desc">主要针对页面中常用的区域进行说明。建议同时参考<router-link to="/template2/GroupList">案例</router-link>体验对应的交互方案</p></ds>
        <api name="主页面" 
            desc="主页面一般含有搜索区域、表格、页码。以下为一些关键流程节点：" 
            :interactives="main"/>
        <api name="编辑页" 
            desc="编辑页是一个表单，用户用来完成数据的编辑工作，默认通过浮层的形式展示" 
            :interactives="form"/>
    </div>
</template>
<script>
export default {
    data(){
        return {
            main: [
                {name: '数据状态', desc: '页面中需明确显示数据状态，如加载中、加载成功、加载失败'},
                {name: '数据初始化', desc: '默认页面在加载时，需按默认条件进行数据初始化'},
                {name: '搜索', desc: '表单验证失败时，弱提示用户需满足条件才能进行搜索。验证通过时，页面为loading状态，直到请求响应，结束loading状态并给出数据结果'},
                {name: '新增/编辑类操作', desc: '点击后从页面右侧打开浮层，并实时显示数据的状态，如详情正在获取时显示loading状态'},
                {name: '开关类/删除类操作', desc: '在按钮周边打开popper弹框，进行操作二次确认；开关操作后，按钮处于loading状态，操作结果使用弱提示反馈'},
                {name: '翻页', desc: '用户点击页码条进行翻页时，数据列表中切换到目标页数据；用户翻到非法页时应矫正到用户可能需要到达的页码：小于1时矫正到第1页，大于最大页数时矫正到最后1页'},
                {name: '结果反馈', desc: '新增操作完成后，清空搜索条件并重置到第一页数据；非新增类操作完成后，保留搜索条件及页码，更新该条件下的数据列表'}
            ],
            form: [
                {name: '数据状态', desc: '页面中需明确显示数据状态，如加载中、加载成功、加载失败；保存中、保存成功、保存失败'},
                {name: '数据初始化', desc: '表单渲染时需要的源数据和主数据详情需要在该阶段被获取，此时表单整体处于loading状态'},
                {name: '表单编辑', desc: '用户编辑时，遵循如下规则：1. 操作区块层次结构清晰，即条件间的联动/包含等关系明确; 2. 复杂操作给予合法性提示 3. 每项内容均可进行编辑撤销 4. 非共存的类型切换时数据及时清空 5. 尽量避免用户进行手动检查，通过选择代替输入的方式，减少操作复杂性'},
                {name: '表单验证', desc: '默认在用户编辑完成后给予实时验证，遵循一个原则：前端校验格式合法性，后端在验证合法性基础上，进行数据逻辑验证'},
                {name: '数据保存', desc: '保存时需再次校验数据格式合法性：不通过时给予验证不通过的提示，同时出错项提示错误内容；通过后页面应提示保存中状态'},
                {name: '取消', desc: '取消后返回主页面'},
                {name: '结果反馈', desc: '保存成功后弱提示并回到主页面，保存失败时在表单下方提示保存失败原因'}
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

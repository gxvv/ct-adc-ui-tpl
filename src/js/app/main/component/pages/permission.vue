<template>
    <div class="page-container">
        <ds pt2="Permission 权限"><p slot="desc">主要说明了系统在权限控制方面的展现</p></ds>
        <api name="权限" desc="权限相关的内容均以显示/隐藏作为交互方式，即无权限时用户看不到相关细节" :interactives="interactives1"/>
    </div>
</template>
<script>
export default {
    data(){
        return {
            interactives1: [
                {name: '页面权限', desc: '用户有页面权限时，正常显示页面内容；无页面权限时，页面不显示内容，提示用户没有该页面的权限'},
                {name: '操作权限', desc: '用户有操作权限时，正常显示页面中的操作入口，如操作按钮；无操作权限时，页面不显示操作入口'}
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



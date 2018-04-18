<template lang="html">
    <div class="page-container">
        <ds pt2="Typography 字体" desc="我们对整个的系统的字体进行统一规范" />
        
        <ds pt3="中文字体">
            <div slot="desc">
                <p>规定了所有场景下的中文表现</p>
                <div class="row">
                    <div class="col-md-3">
                        <div class="font-container">
                            <div class="c1">和畅惠风</div>
                            <div>Microsoft YaHei</div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="font-container">
                            <div class="c2">和畅惠风</div>
                            <div>PingFang SC</div>
                        </div>
                    </div>
                </div>
            </div>
        </ds>

        <ds pt3="英文/数字字体">
            <div slot="desc">
                <p>规定了所有场景下的英文/数字表现</p>
                <div class="row">
                    <div class="col-md-3">
                        <div class="font-container">
                            <div class="e1">RGag,11</div>
                            <div>Helvetica Neue</div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="font-container">
                            <div class="e2">RGag,11</div>
                            <div>Helvetica</div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="font-container">
                            <div class="e3">RGag,11</div>
                            <div>Arial</div>
                        </div>
                    </div>
                </div>
            </div>
        </ds>
        
        <api :fonts="fonts">
            <p slot="desc">
                字体css：<code>font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;</code>
            </p>
        </api>
    </div>
</template>

<script>
export default {
    data(){
        return {
            fonts: [
                {name: '正文文字', desc: '12px #333333'},
                {name: '标题文字', desc: '14px bold #333333'},
                {name: '链接文字', desc: '12px #337ab7'},
                {name: '链接文字hover状态', desc: '12px #204d74'},
                {name: '辅助文字', desc: '12px #777777'}
            ]
        };
    }
};
</script>

<style lang="css" scoped>
    .font-container {
        text-align: center;
        padding: 15px 0;
        border: 1px #ddd solid;
        border-radius: 5px;
    }
    .font-container>div:last-child{
        margin-top: 10px;
        color: #888;
    }
    .font-container>div:first-child{
        font-size: 40px;
    }
    .c1{
        font-family: "Microsoft Yahei";
    }
    .c2{
        font-family: "PingFang SC";
    }
    .e1{
        font-family: "Helvetica Neue";
    }
    .e2{
        font-family: "Helvetica";
    }
    .e3{
        font-family: "Arial";
    }
</style>

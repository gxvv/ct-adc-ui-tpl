<template lang="html">
    <div class="page-container">
        <ds pt2="Color 色彩" desc="使用一套特定的调色板来规定颜色，为产品提供一致的外观视觉感受" />

        <ds pt3="主色">
            <div slot="desc">
                <p>主要颜色</p>
                <div class="row">
                    <div class="col-md-2">
                        <div class="primary color-container">
                            <div>Primary</div>
                            <div>#337AB7</div>
                        </div>
                    </div>
                </div>
            </div>
        </ds>

        <ds pt3="辅助色">
            <div slot="desc">
                <p>需要在不同的场景中使用</p>
                <div class="row">
                    <div class="col-md-2">
                        <div class="success color-container">
                            <div>Success</div>
                            <div>#5CB85c</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="warning color-container">
                            <div>Warning</div>
                            <div>#F0AB4E</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="info color-container">
                            <div>Info</div>
                            <div>#5BC0DE</div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="danger color-container">
                            <div>Danger</div>
                            <div>#D9534F</div>
                        </div>
                    </div>
                </div>
            </div>
        </ds>

        <ds pt3="背景色">
                <div slot="desc">
                    <p>界面背景色</p>
                    <div class="row">
                        <div class="col-md-2">
                            <div class="bg color-container">
                                <div>background-color</div>
                                <div>#FFFFFF</div>
                            </div>
                        </div>
                    </div>
                </div>
            </ds>
    </div>
</template>

<script>
export default {
    data(){
        return {};
    }
};
</script>

<style lang="css" scoped>
    .color-container{
        border-radius: 3px;
        color: #fff;
        text-align: center;
        padding: 15px 0;
    }
    .color-container>div:last-child{
        font-size: 12px;
    }
    .primary{
        background-color: #337AB7;
    }
    .success{
        background-color: #5CB85c;
    }
    .warning{
        background-color: #F0AB4E;
    }
    .info{
        background-color: #5BC0DE;
    }
    .danger{
        background-color: #D9534F;
    }
    .bg{
        background-color: #fff;
        border: 1px #ddd solid;
        color: #222;
    }
</style>

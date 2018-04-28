<template>
    <div>
        <transition name="mask">
            <div class="dialog-mask" v-show="value"></div>
        </transition>
        <transition name="container">
            <div class="dialog-container" v-show="value">
                <div class="dialog-head">
                    <div>{{title}}</div>
                    <div style="flex:1">
                        <i class="glyphicon glyphicon-remove pull-right" @click="$emit('input', false)"></i>
                    </div>
                </div>
                <div class="dialog-body">
                    {{content}}
                </div>
                <div class="dialog-foot">
                    <button class="btn btn-primary" @click="yes">确定</button>
                    <button class="btn btn-default" @click="$emit('input', false)">取消</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: ['value', 'title', 'content'],
    methods: {
        yes(){
            this.$emit('input', false);
            this.$emit('yes');
        }
    }
};
</script>

<style scoped>
.glyphicon.glyphicon-remove.pull-right{
    color: #999;
    cursor: pointer;
}
.glyphicon.glyphicon-remove.pull-right:hover{
    color: #337ab7;
}
.mask-enter,.mask-leave-active{
    opacity: 0;
}
.mask-enter-active,.mask-leave-active{
    transition: .3s;
}
.container-enter{
    transform: translateY(-20px);
    opacity: 0;
}
.container-enter-active{
    transition: .3s;
}
.container-leave-active{
    opacity: 0;
    transform: translateY(-20px);
    transition: .3s;
}
.dialog-mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2000;
}
.dialog-container{
    position: fixed;
    top: 200px;
    right: 0;
    left: 0;
    background-color: #fff;
    z-index: 2001;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    width: 30%;
    padding: 15px;
    margin: 0 auto;
}
.dialog-head {
    font-size: 15px;
    display: flex;
    align-items: center;
}

.dialog-body {
    padding: 15px 0;
    color: #999;
    font-size: 14px;
}

.dialog-foot {
    text-align: right;
}
</style>



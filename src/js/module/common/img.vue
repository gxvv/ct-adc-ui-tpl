<template>
    <div class="img-wrap">
        <img :src="src" alt="" class="img" :style="{width: width||'100%'}">
        <div class="desc">{{desc}}</div>
    </div>
</template>

<script>
export default {
    props: ['width', 'src', 'desc']
};
</script>

<style scoped>
    .img-wrap{
        margin: 20px 0;
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
    }
</style>


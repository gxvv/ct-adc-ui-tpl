<template>
    <div>
        <h2 class="pt2" v-if="pt2">{{pt2}}</h2>
        <h3 class="pt3" v-if="pt3">{{pt3}}</h3>
        <slot name="desc"><p>{{desc}}</p></slot>
    </div>
</template>

<script>
export default {
    props: ['pt2', 'pt3', 'desc']
};
</script>


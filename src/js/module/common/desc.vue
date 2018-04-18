<template>
    <div>
        <h2 class="pt2" v-if="pt2">{{pt2}}</h2>
        <h3 class="pt3" v-if="pt3">{{pt3}}</h3>
        <h4 class="pt4" v-if="pt4"><strong v-if="strong">{{pt4}}</strong><span v-else>{{pt4}}</span></h4>

        <slot name="desc"><p>{{desc}}</p></slot>
    </div>
</template>

<script>
export default {
    props: ['pt2', 'pt3', 'pt4', 'desc', 'strong']
};
</script>


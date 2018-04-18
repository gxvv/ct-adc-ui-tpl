<template>
    <div>
        <h3 class="pt3">{{title}}</h3>
        <slot name="desc"><p>{{desc}}</p></slot>
        <div class="demo">
            <div class="demo-source">
                <slot name="source"></slot>
            </div>
            <div class="demo-code">
                <slot name="code"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title', 'desc']
};
</script>

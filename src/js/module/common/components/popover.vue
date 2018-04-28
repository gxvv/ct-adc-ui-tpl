<template lang="html">
    <i class="glyphicon glyphicon-question-sign" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?" @click="$event => $event.cancelBubble = true"></i>
</template>

<script>
export default {
    methods: {
        clickCallback(event) {
            console.log(event);
        }
    },
    mounted() {
        $('[data-toggle="popover"]').popover();
    }
};
</script>

<style lang="css">
</style>

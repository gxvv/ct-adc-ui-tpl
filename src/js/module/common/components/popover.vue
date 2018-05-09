<template lang="html">
    <i ref="popover" class="glyphicon glyphicon-question-sign" :title="title" :data-content="content" @click="clickCallback"></i>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default() {
                return '基本规范';
            }
        },
        content: {
            type: String,
            default() {
                return '';
            }
        }
    },
    methods: {
        clickCallback(event) {
            event.cancelBubble = true;
            $(this.$refs.popover).popover('show');
        }
    },
    mounted() {
        $(document).on('click', () => {
            $(this.$refs.popover).popover('hide');
        });
        $(this.$refs.popover).on('hidden.bs.popover', () => {
            this.$emit('hidden');
        }).on('shown.bs.popover', () => {
            this.$emit('shown');
        });
    }
};
</script>

<style lang="css">
</style>

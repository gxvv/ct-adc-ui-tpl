<template lang="html">
  <section class="lang-md">
    <slot></slot>
  </section>
</template>

<script>
import marked from 'marked';
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});
export default {
    mounted() {
        const text = $('.lang-md').html();
        const str = text.split('\n').map(e => e.replace(/^\s+/g, '')).join('\n');

        $('.lang-md').html(marked(str));
    }
};
</script>

<style lang="css">
</style>

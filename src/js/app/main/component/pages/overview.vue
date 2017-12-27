<template lang="html">
  <article>
      <h1 class="page-header">简介</h1>
      <section class="lang-md">
# Markdown

## 二级标题

内容内容**内容**内容内容

容内容内容

容内容内容
      </section>
  </article>
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

        $('.lang-md').html(marked(text.trim()));
    }
};
</script>

<style lang="css">
</style>

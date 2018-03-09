<template lang="html">
<div>
  <blockquote class="clip-b">
      <a href="javascript:;" class="clip" ref="clipbtn"> 复制代码 </a>
  </blockquote>
  <div class="highlight">
    <pre>
      <code class="html" ref="code"><slot></slot></code>
    </pre>
  </div>
</div>
</template>
<script>
export default {
    mounted() {
        const { hljs, Clipboard } = window;

        hljs.highlightBlock(this.$refs.code);

        const clipboard = new Clipboard(this.$refs.clipbtn, {
            text: () => {
                return $(this.$refs.code).text();
            }
        });

        clipboard.on('success', function(e) {
            new MiniMsg({
                content: '复制成功'
            }).animation();
            e.clearSelection();
        });
    }
};
</script>

<style lang="css">
</style>

<template lang="html">
    <div>
        <div class="page-container">
    <ds pt2="弱提示" desc="弱提示用于页面内的操作反馈，一般用于重要级别较低的信息通知" />
    <ds pt3="何时使用" desc="简单的通知，字数较少，其内容用户一眼就能会意" />
    <demo title="基本用法" desc="可通过vue插件形式或普通插件形式使用">
      <div class="text-center" slot="source">
          <button type="button" class="btn btn-sm btn-info" @click="info">提示</button>
          <button type="button" class="btn btn-sm btn-success" @click="success">成功</button>
          <button type="button" class="btn btn-sm btn-danger" @click="error">失败</button>
          <button type="button" class="btn btn-sm btn-warning" @click="warn">警告</button>
          <button type="button" class="btn btn-sm btn-warning" @click="notVuePlugin">常规minimsg构造函数</button>
          <button type="button" class="btn btn-sm btn-warning" @click="destroy">点击终止正在执行的弱提示</button>
      </div>
    <code-snippet slot="code">
        import Vue from 'vue';
        import MiniMsg from 'ct-adc-mini-msg';

        Vue.use(MiniMsg);
        new Vue({
            methods: {
                minimsg(){
                    this.$minimsg({
                        content: '操作成功，将为您刷新页面...',
                        type: 'success',
                        duration: 2
                    });
                }
            }
        })
        </code-snippet>
    </demo>
    <api :attrs="attrs" :events="events" :methods="methods" />
    </div>
    </div>
</template>

<script>
import Markdown from 'common/markdown';
import CodeSnippet from 'common/code-snippet';
import Vue from 'vue';
import MiniMsg from 'ct-adc-mini-msg';

Vue.use(MiniMsg);
export default {
    components: {
        Markdown,
        CodeSnippet
    },
    data() {
        return {
            currentMiniMsg: null,
            attrs: [
                {name: 'content', desc: '提示内容（支持html渲染）', type: 'String', default: '', all: '字符串'},
                {name: 'type', desc: '提示类型', type: 'String', default: 'info', all: 'success/error/warning/info'},
                {name: 'container', desc: '承载信息框的外层容器', type: 'DOM', default: 'body', all: 'dom元素'},
                {name: 'duration', desc: '信息框的停留时长，单位:秒', type: 'Number', default: '1', all: '数字'},
                {name: 'top', desc: '信息框容器顶部的最大高度', type: 'Number', default: '16', all: '数字'}
            ],
            methods: [
                {name: 'animation', params: 'callback', rt: 'minimsg实例', desc: '执行信息框动画，通过执行该方法来显示一个信息框。'},
                {name: 'destroy', params: '-', rt: 'unfefined', desc: '实时销毁minimsg'}
            ]
        };
    },
    methods: {
        info() {
            this.currentMiniMsg = this.$minimsg({
                content: '操作提示，将为您刷新页面...',
                type: 'info',
                duration: 1
            });
        },
        success() {
            this.currentMiniMsg = this.$minimsg({
                content: '操作成功，将为您刷新页面...',
                type: 'success',
                duration: 2
            });
        },
        error() {
            this.currentMiniMsg = this.$minimsg({
                content: '操作失败，将为您刷新页面...',
                type: 'error',
                duration: 2
            });
        },
        warn() {
            this.currentMiniMsg = this.$minimsg({
                content: '操作警告，将为您刷新页面...',
                type: 'warning',
                duration: 2
            });
        },
        notVuePlugin() {
            this.currentMiniMsg = new MiniMsg({
                content: 'notVuePlugin操作成功，将为您刷新页面...',
                type: 'success',
                duration: 2
            }).animation();
        },
        destroy() {
            this.currentMiniMsg.destroy();
        }
    }
};
</script>

<style lang="css">

</style>

<template lang="html">
    <div>
        <div class="page-container">
    <ds pt2="气泡" desc="在按钮周围弹出确认框" />
    <ds pt3="何时使用" desc="二次确认" />
    <demo title="基本用法" desc="可通过vue插件形式或普通插件形式使用">
      <div class="text-center" slot="source">
          <button type="button" class="btn btn-sm btn-danger" @click="popper">
              <span class="glyphicon glyphicon-arrow-remove"></span>
              删除
          </button>
      </div>
    <code-snippet slot="code">
        import Vue from 'vue';
        import Popper from 'ct-adc-popper';

        Vue.use(Popper);
        new Vue({
            methods: {
                popper(event){
                    event.stopPropagation();
                    this.$pop({
                        ref: event.target,
                        placement: 'left',
                        msg: 'hah ',
                        yes: ()=>{
                            // 确定按钮回调
                        }
                    });
                }
            }
        })
        </code-snippet>
    </demo>
    <api :attrs="attrs"/>
    </div>
    </div>
</template>

<script>
import Markdown from 'common/markdown';
import CodeSnippet from 'common/code-snippet';
import Vue from 'vue';
import Popper from 'ct-adc-popper';
import MiniMsg from 'ct-adc-mini-msg';


Vue.use(MiniMsg);
Vue.use(Popper);
export default {
    components: {
        Markdown,
        CodeSnippet
    },
    data() {
        return {
            currentMiniMsg: null,
            attrs: [
                {name: 'ref', desc: '必填项，附着的节点', type: 'DOM节点', default: '', all: ''},
                {name: 'msg', desc: '提示内容', type: 'String', default: '', all: ''},
                {name: 'placement', desc: '位置', type: 'String', default: 'left', all: 'top/right/bottom/left'},
                {name: 'offset', desc: '弹框偏移', type: 'String', default: '10px 10px', all: ''}
            ]
        };
    },
    methods: {
        popper(event){
            event.stopPropagation();
            this.$pop({
                ref: event.target,
                placement: 'left',
                msg: 'hah ',
                yes: ()=>{
                    this.$minimsg({
                        type: 'success',
                        content: '成功'
                    });
                }
            });
        }
    }
};
</script>

<style lang="css">

</style>

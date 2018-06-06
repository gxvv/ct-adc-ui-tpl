<template lang="html">
    <div>
        <div class="page-container">
    <ds pt2="定制输入框" desc="限制只能输入特定格式内容的输入框" />
    <ds pt3="何时使用" desc="搜索区域及其他一些没有完整校验流程的表单中" />
    <demo title="基本用法" desc="设置将非法的内容replace为空">
      <div class="text-center" slot="source">
          <div class="well well-sm clearfix">
              <form action="javascript:;" class="form-horizontal form-horizontal-sm">
                  <div class="col-lg-11 col-sm-11 text-nowrap">
                      <div class="col-lg-6 col-sm-8">
                         <div class="form-group form-group-sm">
                             <label class="col-sm-4 control-label">用户ID</label>
                             <div class="col-sm-8">
                                 <pattern-input class="form-control" 
                                    :reg-exp="/\D/" 
                                    placeholder="只允许数字">
                                </pattern-input>
                             </div>
                         </div>
                      </div>
                  </div>
              </form>
          </div>
          
      </div>
    <code-snippet slot="code">
        import Vue from 'vue';
        import PatternInput from 'ct-adc-pattern-input';

        new Vue({
            components: {
                PatternInput
            }
        })
        </code-snippet>
    </demo>
    <api :attrs="attrs" :events="events"/>
    </div>
    </div>
</template>

<script>
import Markdown from 'common/markdown';
import CodeSnippet from 'common/code-snippet';
import PatternInput from 'ct-adc-pattern-input';

export default {
    components: {
        Markdown,
        CodeSnippet,
        PatternInput
    },
    data() {
        return {
            attrs: [
                {name: 'regExp', desc: '通过该正则指定需要被替换的内容', type: 'RegExp', default: '', all: '字符串'},
                {name: 'replacement', desc: '被替换为的内容', type: 'String', default: 'info', all: 'success/error/warning/info'}
            ],
            events: [
                {name: 'input', params: '输入框的内容', desc: '同原生input'},
                {name: 'change', params: '输入框的内容', desc: '同原生change'}
            ]
        };
    }
};
</script>

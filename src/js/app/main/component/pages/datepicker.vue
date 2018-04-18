<template lang="html">
<div class="page-container">
    <ds pt2="时间日期选择组件" desc="选择时间日期" />
    <ds pt3="何时使用" desc="搜索时需要根据时间筛选等情况" />

    <demo title="基本用法" desc="选择日期">
          <dates slot="source" related :begin-ops="{dateFormat: 'yyyy-MM-dd'}" :end-ops="{dateFormat: 'yyyy-MM-dd'}" begin-placeholder="开始时间" end-placeholder="结束时间" ref="dates" @change="updateTime" :initialEndDate="EndDate" :initialBeginDate="BeginDate"></dates>
    <code-snippet slot="code">
    &lt;dates related :begin-ops="{dateFormat: 'yyyy-MM-dd'}" :end-ops="{dateFormat: 'yyyy-MM-dd'}"
      begin-placeholder="开始时间" end-placeholder="结束时间" ref="dates" @change="updateTime" :initialEndDate="EndDate" :initialBeginDate="BeginDate"&gt;&lt;/dates&gt;
      </code-snippet>
    </demo>
    
    <api name="Date" :attrs="attrs1" :events="events1" :methods="methods1" />
    <api name="Dates" :attrs="attrs2" :events="events2" :methods="methods2" />
</div>
</template>

<script>
import form from 'ct-adc-form';
import Markdown from 'common/markdown';
import CodeSnippet from 'common/code-snippet';
export default {
    components: {
        Markdown,
        CodeSnippet,
        dates: form.DatesInput
    },
    data() {
        return {
            EndDate: $.now(),
            BeginDate: $.now() - 30 * 24 * 36 * 1e5,
            attrs1: [
                {name: 'initialDate', desc: '开始日期初始值', type: 'String/Number', default: '-', all: '-'},
                {name: 'disabled', desc: '是否将日期控件处于禁用状态', type: 'Boolean', default: false, all: '-'},
                {name: 'ops', desc: '日期的配置项', type: 'Object', default: '{type:"date"...}详见备注', all: '-'}
            ],
            methods1: [
                {name: 'getDate', desc: '用于单一日期组件，获取当前的日期', params: 'readable 是否返回格式化的日期，如果为false，则返回时间戳', rt: '选择的日期'}
            ],
            methods2: [
                {name: 'getDates', desc: '用于单一日期组件，获取当前的日期', params: 'readable,endTransfered ', rt: '选择的日期'}
            ],
            attrs2: [
                {name: 'initialBeginDate', desc: '始日期初始值(可以是符合格式的日期或者时间戳)', type: 'String/Number', default: '-', all: '-'},
                {name: 'beginPlaceholder', desc: '开始日期的placeholder', type: 'String', default: '请选择', all: '-'},
                {name: 'beginOps', desc: '开始日期的配置项', type: 'Object', default: '{type:"date"...}详见备注', all: '-'},
                {name: 'beginDisabled', desc: '是否将开始日期控件处于禁用状态', type: 'Boolean', default: false, all: '-'},
                {name: 'initialEndDate', desc: '结束日期初始值(可以是符合格式的日期或者时间戳)', type: 'String/Number', default: '-', all: '-'},
                {name: 'endPlaceholder', desc: '结束日期的placeholder', type: 'String', default: '请选择', all: '-'},
                {name: 'endOps', desc: '结束日期的配置项', type: 'Object', default: '{type:"date"...}详见备注', all: '-'},
                {name: 'endDisabled', desc: '是否将结束日期控件处于禁用状态', type: 'Boolean', default: false, all: '-'},
                {name: 'related', desc: '开始结束日期是否要联动', type: 'Boolean', default: false, all: '-'}
            ]
        };
    },
    methods: {
        updateTime(row) {
            console.log(row);
        }
    }
};
</script>

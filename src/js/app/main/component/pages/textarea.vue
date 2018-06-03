<template>
    <div class="page-container">
        <ds pt2="限制级textarea" desc="可以自定输入规范的textarea" />
        <ds pt3="何时使用" desc="自定输入规范的textarea" />
        <demo title="基本用法" desc="可以自定输入规范的textarea">
            <ta :maxlength="limitedLength" slot="source" v-model="content">
                <template slot-scope="scope">
                    <span :class="!scope.pass.length ? 'text-danger' : 'text-success'">{{scope.length}}</span>
                    <template v-if=" limitedLength !== -1">
                        /{{limitedLength}}
                        <span class="pull-right text-danger" v-if="!scope.pass.length">
                        长度不符合要求
                    </span>
                        <span class="pull-right text-danger" v-else-if="!scope.pass.format">
                        格式不符合要求
                    </span>
                    </template>
                </template>
            </ta>
            <code-snippet slot="code">
                &lt;ta slot="source" /&gt;
                &lt;script&gt;
                    import ta from 'ct-adc-textarea';

                    export default {
                        components: {
                            ta
                        }
                    };
                    &lt;/script&gt;
            </code-snippet>
        </demo>

        <api :attrs="attrs" :events="events" :methods="methods" />
    </div>
</template>
<script>
import ta from 'ct-adc-textarea';

export default {
    data(){
        return {
            content: '',
            limitedLength: 200,
            attrs: [
                {name: 'maxLength', desc: '控制的字符长度', type: 'Number', default: '-1', all: '-'},
                {name: 'cut', desc: '超出长度时是否要截断内容', type: 'Boolean', default: false, all: '-'},
                {name: 'byByte', desc: '是否根据字节算长度', type: 'Boolean', default: false, all: '-'},
                {name: 'regexp', desc: '设置不匹配内容的正则，当匹配该正则时，被认为是非法的内容', type: 'RegExp', default: 'undefined', all: '-'},
                {name: 'replaceByEmpty', desc: '不匹配正则时是否禁止输入', type: 'Boolean', default: false, all: '-'}
            ],
            events: [
                {name: '-', desc: '-', params: '-'}
            ],
            methods: [
                {name: 'isPass', desc: '内容是否是合法的', params: '-', rt: '-'}
            ]
        };
    },
    components: {
        ta
    }
};
</script>

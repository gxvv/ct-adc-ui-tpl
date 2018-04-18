<template lang="html">
  <div class="page-container">
    <ds pt2="模糊匹配" desc="输入内容后自动匹配中某个数据源中对应的数据，实时给用户展示出来" />
    <ds pt3="何时使用" desc="需要从一个比较大的列表中查询一条数据" />
    <demo title="基本用法" desc="在写入时自动匹配到相应的数据，匹配的数据源支持匹配key，例如只匹配id，或者同时匹配id和name或更多;">
        <auto-complete style="width:300px;" slot="source" placeholder="请输入游戏ID或名称" :list="aclist" :keys="['Name', 'Id', 'Code']" :matchKeys="['Name', 'Id', 'Code']" :showKeys="['Name', 'Id', 'Code']" @change="setScopeId" autoClear></auto-complete>
        <code-snippet slot="code">
            &lt;auto-complete placeholder="请输入游戏ID或名称" :list="aclist"
                :keys="['Name', 'Id', 'Code']" :matchKeys="['Name', 'Id', 'Code']"
                :showKeys="['Name', 'Id', 'Code']" @change="setScopeId" autoClear&gt;&lt;/auto-complete&gt;

            &lt;script&gt;
                import AutoComplete from 'ct-adc-auto-complete';
                export default {
                    data() {
                        return {
                            aclist: [
                                {Name: 'Name1', Id: '1', Code: '1'},
                                {Name: 'Name2', Id: '2', Code: '2'},
                                {Name: 'Name3', Id: '3', Code: '3'},
                                {Name: 'Name4', Id: '4', Code: '4'},
                                {Name: 'Name5', Id: '5', Code: '5'},
                                {Name: 'Name6', Id: '6', Code: '6'}
                            ]
                        };
                    },
                    components: {
                        AutoComplete
                    },
                    methods: {
                        setScopeId() {}
                    }
                };
                &lt;/script&gt;
        </code-snippet>
    </demo>

    <demo title="忽略大小写" desc="忽略大小写">
            <auto-complete style="width:300px;" slot="source" caseInsensitive placeholder="请输入游戏ID或名称" :list="aclist" :keys="['Name', 'Id', 'Code']" :matchKeys="['Name', 'Id', 'Code']" :showKeys="['Name', 'Id', 'Code']" @change="setScopeId" autoClear></auto-complete>
            <code-snippet slot="code">
                &lt;auto-complete caseInsensitive placeholder="请输入游戏ID或名称" :list="aclist"
                    :keys="['Name', 'Id', 'Code']" :matchKeys="['Name', 'Id', 'Code']"
                    :showKeys="['Name', 'Id', 'Code']" @change="setScopeId" autoClear&gt;&lt;/auto-complete&gt;
    
                &lt;script&gt;
                    import AutoComplete from 'ct-adc-auto-complete';
                    export default {
                        data() {
                            return {
                                aclist: [
                                    {Name: 'Name1', Id: '1', Code: '1'},
                                    {Name: 'Name2', Id: '2', Code: '2'},
                                    {Name: 'Name3', Id: '3', Code: '3'},
                                    {Name: 'Name4', Id: '4', Code: '4'},
                                    {Name: 'Name5', Id: '5', Code: '5'},
                                    {Name: 'Name6', Id: '6', Code: '6'}
                                ]
                            };
                        },
                        components: {
                            AutoComplete
                        },
                        methods: {
                            setScopeId() {}
                        }
                    };
                    &lt;/script&gt;
            </code-snippet>
        </demo>

        <api :attrs="attrs" :events="events" :methods="methods" />
  </div>
</template>

<script>
import AutoComplete from 'ct-adc-auto-complete';
import Markdown from 'common/markdown';
import CodeSnippet from 'common/code-snippet';
export default {
    data() {
        return {
            aclist: [
                {Name: 'Name1', Id: '1', Code: '1'},
                {Name: 'Name2', Id: '2', Code: '2'},
                {Name: 'Name3', Id: '3', Code: '3'},
                {Name: 'Name4', Id: '4', Code: '4'},
                {Name: 'Name5', Id: '5', Code: '5'},
                {Name: 'Name6', Id: '6', Code: '6'}
            ],
            attrs: [
                {name: 'allForEmpty', desc: '是否在input没有输入的情况下展示所有数据', type: 'Boolean', default: true, all: '-'},
                {name: 'list', desc: '匹配需要使用的源数据，其中每一项为一个对象，对应数据源中的每一条数据', type: 'Array', default: '[]', all: '-'},
                {name: 'keys', desc: '需要在每项数据中显示出来的key值，这些值以|分隔', type: 'Array', default: '["Id","Name"]', all: '-'},
                {name: 'matchKeys', desc: '可以参与匹配的key', type: 'Array', default: '["Id","Name"]', all: '-'},
                {name: 'showKeys', desc: '选择数据后显示在input中的key值', type: 'Array', default: '["Id","Name"]', all: '-'},
                {name: 'value', desc: '该对象可以不是完整的对象，但是指定的key的值在数据源中必须唯一；如果是字符串，只有在autoClear为false时才有意义', type: 'Object', default: '{}', all: '-'},
                {name: 'placeholder', desc: '输入框的placeholder内容', type: 'String', default: '输入内容后自动匹配...', all: '-'},
                {name: 'disabled', desc: '输入框是否不可用', type: 'Boolean', default: false, all: '-'},
                {name: 'maxlength', desc: '输入框输入字数限制', type: 'Number', default: 100000, all: '-'},
                {name: 'caseInsensitive', desc: '匹配数据源中的内容时，是否忽略大小写', type: 'Boolean', default: false, all: '-'},
                {name: 'autoSelectIfOne', desc: '是否在只有一项匹配时自动选中该项', type: 'Boolean', default: false, all: '-'}
            ],
            events: [
                {name: 'select', desc: '当手动选择下方列表时，才会触发select事件', params: 'Object，选中的数据对象'},
                {name: 'change', desc: '当选中结果(selected)发生变化时，触发change事件；当数据由"空缺"状态变为"被补全"后，也会触发该事件', params: 'Object，选中的数据对象'},
                {name: 'clear', desc: '当组件中的值被清空（手动清空或点击X清空）时，触发该事件', params: '-'}
            ],
            methods: [
                {name: 'getValue', params: '-', rt: '用户选择的数据对象', desc: '得到用户最终输入或选择的内容'}
            ]
        };
    },
    components: {
        AutoComplete,
        Markdown,
        CodeSnippet
    },
    methods: {
        setScopeId() {}
    }
};
</script>


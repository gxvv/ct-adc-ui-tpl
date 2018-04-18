<template>
    <div class="page-container">
        <ds pt2="穿梭框" desc="从一个集合中选出子集合" />
        <ds pt3="何时使用" desc="从一个集合中选出子集合" />
        <demo title="基本用法" desc="从一个集合中选出子集合">
            <transfer slot="source" :dataSource="dataSource1" :showKey="['name']" :matchKey="['name', 'age']"/>
            <code-snippet slot="code">
                &lt;transfer slot="source" :dataSource="dataSource1" :showKey="['name']" :matchKey="['name', 'age']"/&gt;
                &lt;script&gt;
                    import transfer from 'ct-adc-transfers';

                    export default {
                        data(){
                            return {
                                dataSource1: [{
                                    name: '小明',
                                    age: 20
                                }, {
                                    name: '小红',
                                    age: 21
                                }]
                            };
                        },
                        components: {
                            transfer
                        }
                    };
                    &lt;/script&gt;
            </code-snippet>
        </demo>

        <api :attrs="attrs" :events="events" :methods="methods" />
    </div>
</template>
<script>
import transfer from 'ct-adc-transfers';

export default {
    data(){
        return {
            dataSource1: [{
                name: '小明',
                age: 20
            }, {
                name: '小红',
                age: 21
            }],
            attrs: [
                {name: 'dataSource', desc: '即数据集合', type: 'Array', default: '[]', all: '-'},
                {name: 'selectedItems', desc: '没有时请传[]，有值的情况下每一项需和dataSource中的一致(key可以少，但matchKey必须要有)', type: 'Array', default: '[]', all: '-'},
                {name: 'matchKey', desc: '自动匹配输入时可被匹配的key', type: 'Array', default: '[]', all: '-'},
                {name: 'showKey', desc: '显示在单个列表项中的key，如果key有多个,组件采用"-"进行分割内容', type: 'Array', default: '["Name"]', all: '-'},
                {name: 'leftLoading', desc: '左侧列表加载状态', type: 'Boolean', default: false, all: '-'},
                {name: 'rightLoading', desc: '右侧列表加载状态', type: 'Boolean', default: false, all: '-'},
                {name: 'button', desc: '按钮的html内容', type: 'Object', default: '左右箭头图标', all: '-'},
                {name: 'leftListTitle', desc: '左侧列表的title', type: 'String', default: '全部列表', all: '-'},
                {name: 'rightListTitle', desc: '右侧列表中的title', type: 'String', default: '已选择列表', all: '-'}
            ],
            events: [
                {name: 'change', desc: '当穿梭框的"向左"/"向右"被执行后触发该事件', params: '右边的列表数据'}
            ]
        };
    },
    components: {
        transfer
    }
};
</script>

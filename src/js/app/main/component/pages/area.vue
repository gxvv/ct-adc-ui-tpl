<template>
    <div class="page-container">
        <ds pt2="地区选择" desc="选择地区" />
        <ds pt3="何时使用" desc="选择地区" />
        <demo title="基本用法" desc="选择地区，省、市、区">
            <div style="width: 600px;" slot="source"><area-selector showNation /></div>
            <code-snippet slot="code">
                &lt;div style="width: 600px;" slot="source"&gt;&lt;area-selector showNation /&gt;&lt;/div/&gt;
                &lt;script&gt;
                    import AreaSelector from 'ct-adc-area-selector';

                    export default {
                        components: {
                            AreaSelector
                        }
                    };
                    &lt;/script&gt;
            </code-snippet>
        </demo>

        <api :attrs="attrs" :events="events" :methods="methods" />
    </div>
</template>
<script>
import AreaSelector from 'ct-adc-area-selector';

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
                {name: 'initialArea', desc: '初始选中的地区，以-分割如 浙江-杭州-西湖区或0601(浙江-杭州)', type: 'String', default: '-', all: '-'},
                {name: 'sep', desc: '地区名称中的分隔符', type: 'String', default: '-', all: '-'},
                {name: 'showNation', desc: '是否显示全国选项，若不显示全国选项，selector只有三个', type: 'Boolean', default: false, all: '-'},
                {name: 'codeForNation', desc: '表示"全国"的code，其他的地区都是有编码的，但"全国"没有。请配置和后端约定的地区编码', type: 'String', default: '00', all: '-'},
                {name: 'min', desc: '精确到的地区类型，例如只想选择省，就把该值配置为province', type: 'String', default: 'region', all: '-'},
                {name: 'areaList', desc: '地区源数据', type: 'Function', default: false, all: '-'}
            ],
            events: [
                {name: 'change', desc: '当选择select框且引发了数据改变时，发生该事件。参数为带有分割符(由sep属性指定)的字符串，如 浙江-杭州-西湖区', params: 'value1, value2'}
            ],
            methods: [
                {name: 'getArea', desc: '获得选择的结果', params: 'readable', rt: '当前选择的地区'}
            ]
        };
    },
    components: {
        AreaSelector
    }
};
</script>

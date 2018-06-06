<template lang="html">
    <div>
        <div class="page-container">
    <ds pt2="树" desc="具有层级关系的数据的选择和展示" />
    <ds pt3="何时使用" desc="地区(省市区)类数据、渠道数据等的选择" />
    <demo title="基本用法" desc="普通插件形式使用">
      <div slot="source">
            <div class="container-fluid">
                <div class="col-sm-4">
                <div>
                    <area-tree :selected="selected" ref="areaTree" :sep="sep" @change="change">
                    </area-tree>
                </div>
                </div>
                <div class="col-sm-4" style="word-wrap: break-word;">
                    此处展示选中的地区结果(ID | Name):
                    <p><b>ID: </b>{{resultWithId}}</p>
                    <p><b>名称：</b>{{resultWithName}}</p>
                </div>
        </div>
      </div>
    <code-snippet slot="code">
        import Vue from 'vue';
        import { areaTree, tree} from 'ct-adc-tree';

        new Vue({
            components: {
                areaTree,
                tree
            },
            data(){
                return {
                    selected: [],
                    resultWithId: '',
                    resultWithName: '',
                    sep: '_'
                };
            }
            methods: {
                change() {
                    this.resultWithName = JSON.stringify(this.$refs.areaTree.getChecked(true));
                    this.resultWithId = JSON.stringify(this.$refs.areaTree.getChecked(false));
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
import { areaTree } from 'ct-adc-tree';

export default {
    components: {
        Markdown,
        CodeSnippet,
        areaTree
    },
    data() {
        return {
            selected: [],
            resultWithId: '',
            resultWithName: '',
            sep: '_',
            attrs: [
                {
                    name: 'selected',
                    desc: '需要选中的地区',
                    type: 'String/Array/JSONstr',
                    default: '',
                    all: ''
                },
                {
                    name: 'sep',
                    desc: '地区分隔符',
                    type: 'String',
                    default: '-',
                    all: ''
                }
            ],
            methods: [
                {
                    name: 'getChecked',
                    params: 'readable',
                    rt: '选中的地区',
                    desc: '获取选中的地区。readable[Boolean]：获取的结果是否为地区中文名称'
                },
                {
                    name: 'setChecked',
                    params: 'areaList',
                    rt: 'undefined',
                    desc: '设置选中的地区。areaList[Array/String/JSON String]：选中的地区'
                }
            ],
            events: [
                {
                    name: 'change',
                    params: '当前选中的地区 （中文名称）',
                    desc: '选中内容发生改变时触发'
                }
            ]
        };
    },
    methods: {
        change() {
            this.resultWithName = JSON.stringify(this.$refs.areaTree.getChecked(true));
            this.resultWithId = JSON.stringify(this.$refs.areaTree.getChecked(false));
        }
    }
};
</script>

<style lang="css">
</style>

<template lang="html">
    <div class="page-container">

        <ds pt2="列表" desc="用于展示多条结构类似的数据"/>

        <demo title="基本用法" desc="展现一个普通的列表">
            <adc-table :data="list.data" :status="list.status" :msg="list.msg" :loading="list.loading" slot="source">
                <adc-table-column prop="Id" name="ID"></adc-table-column>
                <adc-table-column prop="Name" name="Name"></adc-table-column>
                <adc-table-column prop="Data" name="Data"></adc-table-column>
                <adc-table-column prop="Status" name="Status"></adc-table-column>
            </adc-table>
            <code-snippet slot="code">
                &lt;adc-table :data="list.data" :status="list.status" :msg="list.msg" :loading="list.loading"&gt;
                    &lt;adc-table-column prop="Id" name="ID"&gt;&lt;/adc-table-column&gt;
                    &lt;adc-table-column prop="Name" name="Name"&gt;&lt;/adc-table-column&gt;
                    &lt;adc-table-column prop="Data" name="Data"&gt;&lt;/adc-table-column&gt;
                    &lt;adc-table-column prop="Status" name="Status"&gt;&lt;/adc-table-column&gt;
                &lt;/adc-table&gt;
                &lt;script&gt;
                    import List from 'ct-adc-list';
                    export default {
                        components: {
                            'adc-table': List['adc-table'],
                            'adc-table-column': List['adc-table-column'],
                            Markdown,
                            CodeSnippet
                        },
                        data() {
                            return {
                                list: {
                                    data: [
                                        { Id: 1, Name: '物品1', Data: '数据', Status: 1 },
                                        { Id: 2, Name: '物品2', Data: '数据', Status: 2 },
                                        { Id: 3, Name: '物品3', Data: '数据', Status: 3 }
                                    ],
                                    status: true,
                                    msg: '',
                                    loading: false
                                }
                            };
                        }
                    };
                &lt;script&gt;
            </code-snippet>
        </demo>

        <demo title="没有数据" desc="没有数据，接口读取错误等情况导致无数据展示时，可以自定义显示的消息">
            <adc-table :data="list1.data" :status="list1.status" :msg="list1.msg" :loading="list1.loading" slot="source">
                    <adc-table-column prop="Id" name="ID"></adc-table-column>
                    <adc-table-column prop="Name" name="Name"></adc-table-column>
                    <adc-table-column prop="Data" name="Data"></adc-table-column>
                    <adc-table-column prop="Status" name="Status"></adc-table-column>
                </adc-table>
            <code-snippet slot="code">
                    &lt;adc-table :data="list.data" :status="list.status" :msg="list.msg" :loading="list.loading"&gt;
                        &lt;adc-table-column prop="Id" name="ID"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Name" name="Name"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Data" name="Data"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Status" name="Status"&gt;&lt;/adc-table-column&gt;
                    &lt;/adc-table&gt;
                    &lt;script&gt;
                        import List from 'ct-adc-list';
                        export default {
                            components: {
                                'adc-table': List['adc-table'],
                                'adc-table-column': List['adc-table-column'],
                                Markdown,
                                CodeSnippet
                            },
                            data() {
                                return {
                                    list1: {
                                        data: [],
                                        status: true,
                                        msg: '暂无数据',
                                        loading: false
                                    }
                                };
                            }
                        };
                    &lt;script&gt;
                </code-snippet>
        </demo>

        <demo title="自定义操作" desc="加入编辑、删除等操作">
            <adc-table :data="list2.data" :status="list2.status" :msg="list2.msg" :loading="list2.loading" slot="source">
                    <adc-table-column prop="Id" name="ID"></adc-table-column>
                    <adc-table-column prop="Name" name="Name"></adc-table-column>
                    <adc-table-column prop="Data" name="Data"></adc-table-column>
                    <adc-table-column prop="Status" name="Status"></adc-table-column>
                    <adc-table-column name="操作" :vm="list2.vm.operation" width="100"></adc-table-column>
                </adc-table>
            <code-snippet slot="code">
                    &lt;adc-table :data="list.data" :status="list.status" :msg="list.msg" :loading="list.loading"&gt;
                        &lt;adc-table-column prop="Id" name="ID"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Name" name="Name"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Data" name="Data"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Status" name="Status"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column name="操作" width="100"&gt;&lt;/adc-table-column&gt;
                    &lt;/adc-table&gt;
                    &lt;script&gt;
                        import List from 'ct-adc-list';
                        export default {
                            components: {
                                'adc-table': List['adc-table'],
                                'adc-table-column': List['adc-table-column'],
                                Markdown,
                                CodeSnippet
                            },
                            data() {
                                return {
                                    list2: {
                                        data: [
                                            { Id: 1, Name: '物品1', Data: '数据', Status: 1 },
                                            { Id: 2, Name: '物品2', Data: '数据', Status: 2 },
                                            { Id: 3, Name: '物品3', Data: '数据', Status: 3 }
                                        ],
                                        status: true,
                                        msg: '暂无数据',
                                        loading: false
                                    }
                                };
                            }
                        };
                    &lt;script&gt;
                </code-snippet>
        </demo>

        <api name="Table" :attrs="attrs1" :methods="methods1"/>
        <api name="Table-column" :attrs="attrs2" />
    </div>
</template>

<script>
import Vue from 'vue';
import {table, column} from 'ct-adc-list';
import Markdown from 'common/markdown';
import CodeSnippet from 'common/code-snippet';
import button2 from '../components/table-button';

Vue.component('button2', button2);

export default {
    components: {
        'adc-table': table,
        'adc-table-column': column,
        Markdown,
        CodeSnippet
    },
    data() {
        return {
            btn1: true,
            list: {
                data: [
                    { Id: 1, Name: '物品1', Data: '数据', Status: 1 },
                    { Id: 2, Name: '物品2', Data: '数据', Status: 2 },
                    { Id: 3, Name: '物品3', Data: '数据', Status: 3 }
                ],
                status: true,
                msg: '',
                loading: false
            },
            list1: {
                data: [],
                status: true,
                msg: '暂无数据',
                loading: false
            },
            list2: {
                data: [
                    { Id: 1, Name: '物品1', Data: '数据', Status: 1 },
                    { Id: 2, Name: '物品2', Data: '数据', Status: 2 },
                    { Id: 3, Name: '物品3', Data: '数据', Status: 3 }
                ],
                status: true,
                msg: '',
                loading: false,
                vm: {
                    operation: {
                        name: 'button2'
                    }
                }
            },
            methods1: [{
                name: 'getChecked',
                params: '-',
                desc: '获取选中项',
                rt: '{allChecked: true, checked: []}'
            }],
            attrs1: [{
                name: 'data',
                desc: '用来渲染表格的数据',
                type: 'Array',
                default: '[]',
                all: '-'
            }, {
                name: 'initialAllChecked',
                desc: '是否要全选数据 (当含有type为selection的列时可用)',
                type: 'Boolean',
                default: false,
                all: '-'
            }, {
                name: 'initialChecked',
                desc: '要选中的数据的索引集合 (当含有type为selection的列时可用)',
                type: 'Array',
                default: '[]',
                all: '-'
            }, {
                name: 'loading',
                desc: '加载状态',
                type: 'Boolean',
                default: false,
                all: '-'
            }, {
                name: 'status',
                desc: '表格数据响应状态(成功/失败)',
                type: 'Boolean',
                default: true,
                all: '-'
            }, {
                name: 'msg',
                desc: '显示信息(status为true时为提示信息(如"请点击搜索按钮"),status为false时为出错信息(如"请求失败"))',
                type: 'String',
                default: '""',
                all: '-'
            }],
            attrs2: [{
                name: 'type',
                desc: '数据被渲染为什么类型',
                type: 'String',
                default: '-',
                all: '-'
            }, {
                name: 'prop',
                desc: '对应的字段名',
                type: 'String',
                default: '-',
                all: '-'
            }, {
                name: 'name',
                desc: '表头显示名称',
                type: 'String',
                default: '-',
                all: '-'
            }, {
                name: 'width',
                desc: '列宽',
                type: 'String',
                default: '-',
                all: '-'
            }, {
                name: 'vm',
                desc: '自定义组件的配置',
                type: 'plain Object',
                default: '{name:"", config:{}}',
                all: '-'
            }, {
                name: 'visible',
                desc: '该列是否可见（为方法时取决于返回值,当为function时详见下方说明）',
                type: 'Boolean/Function',
                default: true,
                all: '-'
            }, {
                name: 'filter',
                desc: '过滤器(为字符串时会到Vue的公用filters中获取方法,当为function时详见下方说明',
                type: 'String/Function',
                default: '-',
                all: '-'
            }, {
                name: 'className',
                desc: '设置单元格td的class(当为function时详见下方说明)',
                type: 'String/Function/Array',
                default: '-',
                all: '-'
            }, {
                name: 'mapper',
                desc: '映射(将数据通过映射转换为显示内容(比如将数字1显示为"已启用"))',
                type: 'Array',
                default: '[]',
                all: '-'
            }, {
                name: 'ashtml',
                desc: '是否将内容渲染为html',
                type: 'Boolean',
                default: false,
                all: '-'
            }]
        };
    }
};
</script>

<template lang="html">
    <div class="page-container">

        <ds pt2="列表" desc="用于展示多条结构类似的数据"/>

        <!-- 基本用法 -->
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

        <!-- 没有数据的情况 -->
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

        <!-- 自定义操作 -->
        <demo title="自定义操作" desc="加入编辑、删除等操作">
            <adc-table :data="list2.data" :status="list2.status" :msg="list2.msg" :loading="list2.loading" slot="source">
                <adc-table-column prop="Id" name="ID"></adc-table-column>
                <adc-table-column prop="Name" name="Name"></adc-table-column>
                <adc-table-column prop="Data" name="Data"></adc-table-column>
                <adc-table-column prop="Status" name="Status"></adc-table-column>
                <adc-table-column name="操作" :vm="list2.vm.operation" width="100"></adc-table-column>
            </adc-table>
            <code-snippet slot="code">
                    &lt;adc-table :data="list2.data" :status="list2.status" :msg="list2.msg" :loading="list.loading"&gt;
                        &lt;adc-table-column prop="Id" name="ID"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Name" name="Name"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Data" name="Data"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Status" name="Status"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column name="操作" :vm="list2.vm.operation" width="100"&gt;&lt;/adc-table-column&gt;
                    &lt;/adc-table&gt;
                    &lt;script&gt;
                        import List from 'ct-adc-list';
                        import Button2 from '../components/table-button';

                        Vue.component('button2', Button2);

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
                                        loading: false,
                                        vm: {
                                            operation: {
                                                name: 'button2'
                                            }
                                        }
                                    }
                                };
                            }
                        };
                    &lt;script&gt;
            </code-snippet>
        </demo>

        <!-- table column 中的内容多的时候可以使用插件，显示N个字之后显示 ... -->
        <demo title="table column 中的内容过多时的显示" desc="配合自定义组件使用">
            <adc-table :data="list3.data" :status="list3.status" :msg="list3.msg" :loading="list3.loading" slot="source">
                    <adc-table-column prop="Id" name="ID"></adc-table-column>
                    <adc-table-column prop="Name" name="Name"></adc-table-column>
                    <adc-table-column prop="Data" name="Data"></adc-table-column>
                    <adc-table-column prop="Status" name="Status"></adc-table-column>
                    <adc-table-column name="备注" :vm="list3.vm.remark"></adc-table-column>
                </adc-table>
            <code-snippet slot="code">
                    &lt;adc-table :data="list3.data" :status="list3.status" :msg="list3.msg" :loading="list3.loading"&gt;
                        &lt;adc-table-column prop="Id" name="ID"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Name" name="Name"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Data" name="Data"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Status" name="Status"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column name="备注" :vm="list3.vm.remark"&gt;&lt;/adc-table-column&gt;
                    &lt;/adc-table&gt;
                    &lt;script&gt;
                        import List from 'ct-adc-list';

                        import Ellipsis from '../components/table-ellipsis';

                        Vue.component('ellipsis', Ellipsis);

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
                                            { Id: 1, Name: '物品1', Data: '数据', Status: 1, Remark: '这是备注，超过10个字会被隐藏' },
                                            { Id: 2, Name: '物品2', Data: '数据', Status: 2, Remark: '这是备注，超过10个字会被隐藏' },
                                            { Id: 3, Name: '物品3', Data: '数据', Status: 3, Remark: '这是备注，超过10个字会被隐藏' }
                                        ],
                                        status: true,
                                        msg: '暂无数据',
                                        loading: false,
                                        vm: {
                                            operation: {
                                                name: 'ellipsis',
                                                config: {
                                                    limitLength: 10
                                                }
                                            }
                                        }
                                    }
                                };
                            }
                        };
                    &lt;script&gt;
                </code-snippet>
        </demo>

        <!-- table column 中的按钮的图标 -->
        <demo title="table column 中的按钮的图标" desc="按钮的默认图标">
            <adc-table :data="list4.data" :status="list4.status" :msg="list4.msg" :loading="list4.loading" slot="source">
                <adc-table-column prop="Id" name="ID"></adc-table-column>
                <adc-table-column prop="Name" name="Name"></adc-table-column>
                <adc-table-column prop="Data" name="Data"></adc-table-column>
                <adc-table-column prop="Status" name="Status"></adc-table-column>
                <adc-table-column name="操作" :vm="list4.vm.operation" width="180"></adc-table-column>
            </adc-table>
            <code-snippet slot="code">
                    &lt;adc-table :data="list4.data" :status="list4.status" :msg="list4.msg" :loading="list.loading"&gt;
                        &lt;adc-table-column prop="Id" name="ID"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Name" name="Name"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Data" name="Data"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Status" name="Status"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column name="操作" :vm="list4.vm.operation" width="180"&gt;&lt;/adc-table-column&gt;
                    &lt;/adc-table&gt;
                    &lt;script&gt;
                        import List from 'ct-adc-list';
                        import ButtonIco from '../components/table-button-ico';

                        Vue.component('buttonIco', ButtonIco);

                        export default {
                            components: {
                                'adc-table': List['adc-table'],
                                'adc-table-column': List['adc-table-column'],
                                Markdown,
                                CodeSnippet
                            },
                            data() {
                                return {
                                    list4: {
                                        data: [
                                            { Id: 1, Name: '物品1', Data: '数据', Status: 1 },
                                            { Id: 2, Name: '物品2', Data: '数据', Status: 2 },
                                            { Id: 3, Name: '物品3', Data: '数据', Status: 3 }
                                        ],
                                        status: true,
                                        msg: '暂无数据',
                                        loading: false,
                                        vm: {
                                            operation: {
                                                name: 'buttonIco'
                                            }
                                        }
                                    }
                                };
                            }
                        };
                    &lt;script&gt;
            </code-snippet>
        </demo>

        <!-- table column 中的图片显示 -->
        <demo title="table column 中的图片显示" desc="ashtml 属性的应用">
            <adc-table :data="list5.data" :status="list5.status" :msg="list5.msg" :loading="list5.loading" slot="source">
                <adc-table-column prop="Id" name="ID"></adc-table-column>
                <adc-table-column prop="Name" name="Name"></adc-table-column>
                <adc-table-column prop="Data" name="Data"></adc-table-column>
                <adc-table-column prop="Status" name="Status"></adc-table-column>
                <adc-table-column prop="Image" name="缩略图" width="280" as-html :filter="getImage"></adc-table-column>
            </adc-table>
            <code-snippet slot="code">
                    &lt;adc-table :data="list5.data" :status="list5.status" :msg="list5.msg" :loading="list.loading"&gt;
                        &lt;adc-table-column prop="Id" name="ID"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Name" name="Name"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Data" name="Data"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Status" name="Status"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Image" name="缩略图" width="280" as-html :filter="getImage"&gt;&lt;/adc-table-column&gt;
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
                                    list5: {
                                        data: [
                                            { Id: 1, Name: '物品1', Data: '数据', Status: 1 },
                                            { Id: 2, Name: '物品2', Data: '数据', Status: 2 },
                                            { Id: 3, Name: '物品3', Data: '数据', Status: 3 }
                                        ],
                                        status: true,
                                        msg: '暂无数据',
                                        loading: false,
                                        vm: {
                                            operation: {
                                                name: 'buttonIco'
                                            }
                                        }
                                    }
                                };
                            },
                            methods: {
                                getImage(payload) {
                                    return &lt;img class="table-image img-thumbnail" src="${payload}"&gt;&lt;/img&gt;;
                                }
                            }
                        };
                    &lt;script&gt;
            </code-snippet>
        </demo>

        <!-- table 中的列表项的显示 -->
        <demo title="table 中的列表项的显示" desc="列表项的显示">
            <adc-table :data="list6.data" :status="list6.status" :msg="list6.msg" :loading="list6.loading" slot="source">
                <adc-table-column prop="Id" name="ID"></adc-table-column>
                <adc-table-column prop="Name" name="Name"></adc-table-column>
                <adc-table-column prop="Data" name="Data"></adc-table-column>
                <adc-table-column prop="Status" name="Status"></adc-table-column>
                <adc-table-column prop="DateList" name="DateList" width="280" as-html :filter="getDateList"></adc-table-column>
            </adc-table>
            <code-snippet slot="code">
                    &lt;adc-table :data="list6.data" :status="list6.status" :msg="list6.msg" :loading="list.loading"&gt;
                        &lt;adc-table-column prop="Id" name="ID"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Name" name="Name"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Data" name="Data"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Status" name="Status"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Image" name="缩略图" width="280" as-html :filter="getImage"&gt;&lt;/adc-table-column&gt;
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
                                    list6: {
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
                            },
                            methods: {
                                getImage(payload) {
                                    return &lt;img class="table-image img-thumbnail" src="${payload}"&gt;&lt;/img&gt;;
                                }
                            }
                        };
                    &lt;script&gt;
            </code-snippet>
        </demo>

        <!-- table 中的链接的显示 -->
        <demo title="table 中的链接的显示" desc="链接的显示">
            <adc-table :data="list7.data" :status="list7.status" :msg="list7.msg" :loading="list7.loading" slot="source">
                <adc-table-column prop="Id" name="ID"></adc-table-column>
                <adc-table-column prop="Name" name="Name"></adc-table-column>
                <adc-table-column prop="Data" name="Data"></adc-table-column>
                <adc-table-column prop="Status" name="Status"></adc-table-column>
                <adc-table-column prop="Link" name="Link" width="280" as-html :filter="getLink"></adc-table-column>
            </adc-table>
            <code-snippet slot="code">
                    &lt;adc-table :data="list7.data" :status="list7.status" :msg="list7.msg" :loading="list.loading"&gt;
                        &lt;adc-table-column prop="Id" name="ID"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Name" name="Name"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Data" name="Data"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Status" name="Status"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Link" name="Link" width="280" as-html :filter="getLink"&gt;&lt;/adc-table-column&gt;
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
                                    list7: {
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
                            },
                            methods: {
                                getImage(payload) {
                                    return &lt;img class="table-image img-thumbnail" src="${payload}"&gt;&lt;/img&gt;;
                                }
                            }
                        };
                    &lt;script&gt;
            </code-snippet>
        </demo>

        <!-- table 中有编辑框的情况 -->
        <demo title="table 中有编辑框的情况" desc="table 中有编辑框的情况">
            <adc-table :data="list8.data" :status="list8.status" :msg="list8.msg" :loading="list8.loading" slot="source" @operate-success="getData8">
                <adc-table-column prop="Id" name="ID"></adc-table-column>
                <adc-table-column prop="Name" name="Name"></adc-table-column>
                <adc-table-column prop="Data" name="Data" :vm="list8.vm.operation" width="280"></adc-table-column>
                <adc-table-column prop="Status" name="Status"></adc-table-column>
            </adc-table>
            <code-snippet slot="code">
                    &lt;adc-table :data="list8.data" :status="list8.status" :msg="list8.msg" :loading="list.loading"&gt;
                        &lt;adc-table-column prop="Id" name="ID"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Name" name="Name"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Data" name="Data" :vm="list8.vm.operation" width="280"&gt;&lt;/adc-table-column&gt;
                        &lt;adc-table-column prop="Status" name="Status"&gt;&lt;/adc-table-column&gt;
                    &lt;/adc-table&gt;
                    &lt;script&gt;
                        import List from 'ct-adc-list';
                        import TableInput from '../components/table-input';

                        Vue.component('tableInput', TableInput);

                        export default {
                            components: {
                                'adc-table': List['adc-table'],
                                'adc-table-column': List['adc-table-column'],
                                Markdown,
                                CodeSnippet
                            },
                            data() {
                                return {
                                    list8: {
                                        data: [
                                            { Id: 1, Name: '物品1', Data: '数据', Status: 1 },
                                            { Id: 2, Name: '物品2', Data: '数据', Status: 2 },
                                            { Id: 3, Name: '物品3', Data: '数据', Status: 3 }
                                        ],
                                        status: true,
                                        msg: '暂无数据',
                                        loading: false,
                                        vm: {
                                            name: 'tableInput'
                                        }
                                    }
                                };
                            },
                            methods: {
                                getImage(payload) {
                                    return &lt;img class="table-image img-thumbnail" src="${payload}"&gt;&lt;/img&gt;;
                                }
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
import List from 'ct-adc-list';
import Markdown from 'common/markdown';
import CodeSnippet from 'common/code-snippet';
import button2 from '../components/table-button';
import ButtonIco from '../components/table-button-ico';
import Ellipsis from '../components/table-ellipsis';
import TableInput from '../components/table-input';

Vue.component('button2', button2);
Vue.component('ellipsis', Ellipsis);
Vue.component('buttonIco', ButtonIco);
Vue.component('tableInput', TableInput);

export default {
    components: {
        'adc-table': List['adc-table'],
        'adc-table-column': List['adc-table-column'],
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
            list3: {
                data: [
                    { Id: 1, Name: '物品1', Data: '数据', Status: 1, Remark: '这是备注，超过10个字会被隐藏' },
                    { Id: 2, Name: '物品2', Data: '数据', Status: 2, Remark: '这是备注，超过10个字会被隐藏' },
                    { Id: 3, Name: '物品3', Data: '数据', Status: 3, Remark: '这是备注，超过10个字会被隐藏' }
                ],
                status: true,
                msg: '',
                loading: false,
                vm: {
                    remark: {
                        name: 'ellipsis',
                        config: {
                            limitLength: 10
                        }
                    }
                }
            },
            list4: {
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
                        name: 'buttonIco'
                    }
                }
            },
            list5: {
                data: [
                    { Id: 1, Name: '物品1', Data: '数据', Status: 1, Image: 'https://cdn.pixabay.com/photo/2018/04/27/08/55/water-3354062_960_720.jpg' },
                    { Id: 2, Name: '物品2', Data: '数据', Status: 2, Image: 'https://cdn.pixabay.com/photo/2018/04/27/08/55/water-3354062_960_720.jpg' },
                    { Id: 3, Name: '物品3', Data: '数据', Status: 3, Image: 'https://cdn.pixabay.com/photo/2018/04/27/08/55/water-3354062_960_720.jpg' }
                ],
                status: true,
                msg: '',
                loading: false
            },
            list6: {
                data: [
                    { Id: 1, Name: '物品1', Data: '数据', Status: 1, DateList: ['2016 - 2017', '2017 - 2018', '2018 - 2019'] },
                    { Id: 2, Name: '物品2', Data: '数据', Status: 2, DateList: ['2016 - 2017', '2017 - 2018', '2018 - 2019'] },
                    { Id: 3, Name: '物品3', Data: '数据', Status: 3, DateList: ['2016 - 2017', '2017 - 2018', '2018 - 2019'] }
                ],
                status: true,
                msg: '',
                loading: false
            },
            list7: {
                data: [
                    { Id: 1, Name: '物品1', Data: '数据', Status: 1, Link: 'https://cdn.pixabay.com/photo/2018/04/27/08/55/water-3354062_960_720.jpg' },
                    { Id: 2, Name: '物品2', Data: '数据', Status: 2, Link: 'https://cdn.pixabay.com/photo/2018/04/27/08/55/water-3354062_960_720.jpg' },
                    { Id: 3, Name: '物品3', Data: '数据', Status: 3, Link: 'https://cdn.pixabay.com/photo/2018/04/27/08/55/water-3354062_960_720.jpg' }
                ],
                status: true,
                msg: '',
                loading: false
            },
            list8: {
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
                        name: 'tableInput'
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
    },
    methods: {
        getImage(payload) {
            return `<img class="table-image img-thumbnail" src="${payload}"></img>`;
        },
        getDateList(payload) {
            return `
                <ul>
                    <li>${payload[0]}</li>
                    <li>${payload[1]}</li>
                    <li>${payload[2]}</li>
                </ul>
            `;
        },
        getLink(payload) {
            return `<a target="_blank" href="${payload}">链接</a>`;
        },
        getData8(payload) {
            const { index, val } = payload;

            console.log(index, val);
            this.list8.data[index].Data = val;
        }
    }
};
</script>
<style type="text/css">
    .table-image{
        max-width: 80px;
        max-height: 80px;
    }
</style>

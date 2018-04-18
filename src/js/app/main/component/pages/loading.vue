<template>
    <div class="page-container">
        <h2 class="pt2">加载层</h2>
        <p>加载动画</p>
        <h3 class="pt3">何时使用</h3>
        <p>读取信息时，展示一个状态</p>
        <h3 class="pt3">基本用法</h3>
        <p>读取列表时，以指令的方式 <code>v-loading</code> 调用</p>
        <div class="demo">
            <div class="demo-source">
                <div v-loading="loading1">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>名称</th>
                                <th>年龄</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in 3">
                                <td>xxx</td>
                                <td>20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="demo-code">
                <code-snippet>
                    &lt;template&gt;
                        &lt;div v-loading="loading1"&gt;
                            &lt;table class="table"&gt;
                                &lt;thead&gt;
                                    &lt;tr&gt;
                                        &lt;th&gt;名称&lt;/th&gt;
                                        &lt;th&gt;年龄&lt;/th&gt;
                                    &lt;/tr&gt;
                                &lt;/thead&gt;
                                &lt;tbody&gt;
                                    &lt;tr v-for="item in 6"&gt;
                                        &lt;td&gt;xxx&lt;/td&gt;
                                        &lt;td&gt;20&lt;/td&gt;
                                    &lt;/tr&gt;
                                &lt;/tbody&gt;
                            &lt;/table&gt;
                        &lt;/div&gt;

                    &lt;/template&gt;

                    &lt;script&gt;

                        export default {
                            name: 'slideout',
                            data(){
                                return {
                                    loading1: true,
                                    loading2: true
                                };
                            }
                        };
                    &lt;/script&gt;
                </code-snippet>
            </div>
        </div>

        <h3 class="pt3">自定义消息</h3>
        <p>读取列表时，自定义消息，以指令的方式 <code>v-loading</code> 调用</p>
        <div class="demo">
            <div class="demo-source">
                <div v-loading="loading2" loading-msg="加载中">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>名称</th>
                                <th>年龄</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in 3">
                                <td>xxx</td>
                                <td>20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="demo-code">
                <code-snippet>
                    &lt;template&gt;
                        &lt;div v-loading="loading2" loading-msg="加载中"&gt;
                            &lt;table class="table0"&gt;
                                &lt;thead&gt;
                                    &lt;tr&gt;
                                        &lt;th&gt;名称&lt;/th&gt;
                                        &lt;th&gt;年龄&lt;/th&gt;
                                    &lt;/tr&gt;
                                &lt;/thead&gt;
                                &lt;tbody&gt;
                                    &lt;tr v-for="item in 6"&gt;
                                        &lt;td&gt;xxx&lt;/td&gt;
                                        &lt;td&gt;20&lt;/td&gt;
                                    &lt;/tr&gt;
                                &lt;/tbody&gt;
                            &lt;/table&gt;
                        &lt;/div&gt;

                    &lt;/template&gt;

                    &lt;script&gt;

                        export default {
                            name: 'slideout',
                            data(){
                                return {
                                    loading2: true
                                };
                            }
                        };
                    &lt;/script&gt;
                </code-snippet>
            </div>
        </div>
        <api :options="options"/>
    </div>
</template>

<script>
import SlideOut from 'ct-adc-slideout';
import CodeSnippet from 'common/code-snippet';
import api from 'common/api';

export default {
    name: 'slideout',
    data(){
        return {
            isShow1: false,
            isShow2: false,
            loading1: true,
            loading2: true,
            options: [{
                name: 'v-loading',
                type: 'Boolean',
                desc: '控制显示、隐藏',
                default: '-',
                all: '-'
            }, {
                name: 'loading-msg',
                type: 'String',
                desc: '消息',
                default: '-',
                all: '-'
            }]
        };
    },
    components: {
        SlideOut,
        CodeSnippet,
        api
    },
    methods: {
        save2(){
            this.isShow2 = false;
        }
    }
};
</script>



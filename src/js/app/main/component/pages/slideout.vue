<template>
    <div class="page-container">
        <h2 class="pt2">滑出层</h2>
        <p>从屏幕右侧滑出</p>
        <h3 class="pt3">何时使用</h3>
        <p>编辑、新建、查看信息等操作</p>
        <h3 class="pt3">基本用法</h3>
        <p>内容可以自由定制</p>
        <div class="demo">
            <div class="demo-source">
                <button class="btn btn-primary" @click="isShow1=true">查看信息</button>
                <button class="btn btn-primary" @click="isShow2=true">编辑信息</button>
            </div>
            <div class="demo-code">
                <code-snippet>
                    &lt;slide-out v-model="isShow1" title="查看" width="60%" hide-on-blur is-transparent&gt;
                        &lt;div slot="body" class="form-horizontal form-horizontal-sm"&gt;
                            &lt;div class="form-group"&gt;
                                &lt;label class="col-sm-2 control-label"&gt;邮箱：&lt;/label&gt;
                                &lt;div class="col-sm-4 form-control-static"&gt;clovemx12345677@gmail.com&lt;/div&gt;
                            &lt;/div&gt;
                            &lt;div class="form-group"&gt;
                                &lt;label class="col-sm-2 control-label"&gt;密码：&lt;/label&gt;
                                &lt;div class="col-sm-4 form-control-static"&gt;123456&lt;/div&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/slide-out&gt;
                    &lt;slide-out v-model="isShow2" title="编辑" width="60%"&gt;
                        &lt;div slot="body" class="form-horizontal form-horizontal-sm"&gt;
                            &lt;div class="form-group"&gt;
                                &lt;label class="col-sm-2 control-label"&gt;邮箱：&lt;/label&gt;
                                &lt;div class="col-sm-4"&gt;&lt;input type="text" class="form-control" placeholder="邮箱"&gt;&lt;/div&gt;
                            &lt;/div&gt;
                            &lt;div class="form-group"&gt;
                                &lt;label class="col-sm-2 control-label"&gt;密码：&lt;/label&gt;
                                &lt;div class="col-sm-4"&gt;&lt;input type="text" class="form-control" placeholder="密码"&gt;&lt;/div&gt;
                            &lt;/div&gt;
                            &lt;div class="form-group"&gt;
                                &lt;div class="col-sm-offset-2 col-sm-6"&gt;
                                    &lt;button class="btn btn-primary" @click="save2"&gt;保存&lt;/button&gt;
                                    &lt;button class="btn btn-default" @click="isShow2=false"&gt;取消&lt;/button&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/slide-out&gt;
                    &lt;script&gt;
                        import SlideOut from 'ct-adc-slideout';
                        import CodeSnippet from 'common/code-snippet';

                        export default {
                            name: 'slideout',
                            data(){
                                return {
                                    isShow1: false,
                                    isShow2: false
                                };
                            },
                            components: {
                                SlideOut,
                                CodeSnippet
                            },
                            methods: {
                                save2(){
                                    this.isShow2 = false;
                                }
                            }
                        };
                    &lt;/script&gt;
                </code-snippet>
            </div>
        </div>
        <api :attrs="attrs" :events="events" :slots="slots" :methods="methods" />
        <slide-out v-model="isShow1" title="查看" width="60%" hide-on-blur is-transparent>
            <div slot="body" class="form-horizontal form-horizontal-sm">
                <div class="form-group">
                    <label class="col-sm-2 control-label">邮箱：</label>
                    <div class="col-sm-4 form-control-static">clovemx12345677@gmail.com</div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">密码：</label>
                    <div class="col-sm-4 form-control-static">123456</div>
                </div>
            </div>
        </slide-out>
        <slide-out v-model="isShow2" title="编辑" width="60%">
            <div slot="body" class="form-horizontal form-horizontal-sm">
                <div class="form-group">
                    <label class="col-sm-2 control-label">邮箱：</label>
                    <div class="col-sm-4"><input type="text" class="form-control" placeholder="邮箱"></div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">密码：</label>
                    <div class="col-sm-4"><input type="text" class="form-control" placeholder="密码"></div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-6">
                        <button class="btn btn-primary" @click="save2">保存</button>
                        <button class="btn btn-default" @click="isShow2=false">取消</button>
                    </div>
                </div>
            </div>
        </slide-out>
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
            attrs: [{
                name: 'v-model',
                type: 'Boolean',
                desc: '控制显示、隐藏',
                default: '-',
                all: '-'
            }, {
                name: 'z-index',
                type: 'Number',
                desc: '层级',
                default: 1000,
                all: '-'
            }, {

                name: 'title',
                type: 'String',
                desc: '标题',
                default: '标题',
                all: '-'
            }, {
                name: 'width',
                type: 'String',
                desc: '宽度',
                default: '50%',
                all: '-'
            }, {
                name: 'hide-on-blur',
                type: 'Boolean',
                desc: '点击遮罩层是否关闭弹出层',
                default: false,
                all: '-'
            }, {
                name: 'is-transparent',
                type: 'Boolean',
                desc: '背景是否透明',
                default: false,
                all: '-'
            }],
            events: [{
                name: 'on-show',
                desc: '显示时的回调',
                params: '-'
            }, {
                name: 'on-hide',
                desc: '隐藏时的回调',
                params: '-'
            }, {
                name: 'on-after-show',
                desc: '完全显示时的回调',
                params: '-'
            }, {
                name: 'on-after-hide',
                desc: '完全隐藏时的回调',
                params: '-'
            }],
            slots: [{
                name: 'head',
                desc: '头部slot'
            }, {
                name: 'body',
                desc: '主体slot'
            }],
            methods: [{
                name: 'scrollTo',
                desc: '控制主体的滚动位置',
                params: 'axisY'
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



<template>
    <div class="page-container">
        <ds pt2="上传组件" desc="上传图片、文件" />
        <ds pt3="何时使用" desc="上传图片、文件" />
        <demo title="上传图片" desc="上传图片，限制图片格式为png">
            <div slot="source">   
                <uploader type="img" :files="uploader1.files" :accept="uploader1.accept" @runtime-error="errorHandler1"/>                
                <div class="text-danger">{{uploader1.error}}</div>
            </div>
            <code-snippet slot="code">
                &lt;uploader type="img" :files="uploader1.files" :accept="uploader1.accept" @runtime-error="errorHandler1"/&gt;
                new Vue({
                    data(){
                        return {
                            uploader1: {
                                files: ['http://image.tcy365.net/game/pic/qzsk_108.png'],
                                accept: { extensions: 'png', mimeTypes: '.png' },
                                error: ''
                            }
                        }
                    },
                    methods: {
                        errorHandler1(error) {
                            this.uploader1.error = error.msg;
                        },
                        successHandler1() {
                            this.uploader1.error = '';
                        }
                    }
                })
            </code-snippet>
        </demo>
        <demo title="上传图片图片预览" desc="附带图片预览功能">
            <div slot="source">   
                <uploader type="img" :hasPreview="true" @runtime-error="errorHandler2"/>
                <div class="text-danger">{{uploader2.error}}</div>
            </div>
            <code-snippet slot="code">
                &lt;uploader type="img" :hasPreview="true" @runtime-error="errorHandler2"/&gt;
                new Vue({
                    data(){
                        return {
                            uploader2: {
                                error: ''
                            },
                        }
                    },
                    methods: {
                        errorHandler2(error) {
                            this.uploader2.error = error.msg;
                        },
                        successHandler2() {
                            this.uploader2.error = '';
                        }
                    }
                })
            </code-snippet>
        </demo>
        <demo title="上传图片" desc="限制单个图片尺寸不得超过100Kb，上传图片数量不大于2个">
            <div slot="source">
                <uploader type="img" :file-single-size-limit="100 * 1024" :file-num-limit="2" @runtime-error="errorHandler3" @runtime-success="successHandler3"/>
                <div class="text-danger">{{uploader3.error}}</div>
            </div>
            
            <code-snippet slot="code">
                &lt;uploader type="img" :file-single-size-limit="100 * 1024" :file-num-limit="2" @runtime-error="errorHandler3" @runtime-success="successHandler3"/&gt;
                new Vue({
                    data(){
                        return {
                            uploader3: {
                                error: ''
                            },
                        }
                    },
                    methods: {
                        errorHandler3(error) {
                            this.uploader3.error = error.msg;
                        },
                        successHandler3() {
                            this.uploader3.error = '';
                        }
                    }
                })
            </code-snippet>
        </demo>
        <demo title="导入文件" desc="导入文件">
            <div slot="source">
                <uploader type="file" :files="uploader4.files"/>
                <div class="text-danger">{{uploader4.error}}</div>
            </div>
            
            <code-snippet slot="code">
                &lt;uploader type="file" :files="uploader4.files"/&gt;
                new Vue({
                    data(){
                        return {
                            uploader4: {
                                files: ['http://onlinepackagesys.admin.ct108.org:1505/demo/ConfigTemplate.xlsx'],
                                error: ''
                            };
                        }
                    }
                })
            </code-snippet>
        </demo>
        <demo title="导入文件" desc="设置按钮不可用">
            <div slot="source">
                <uploader type="file" disabled :tip="{message: '不可用提示'}"/>
                <div class="text-danger">{{uploader5.error}}</div>
            </div>
            
            <code-snippet slot="code">
                &lt;uploader type="file" disabled :tip="{message: '不可用提示'}"/&gt;
            </code-snippet>
        </demo>
        <api :attrs="attrs" :events="events" :methods="methods" />
    </div>
</template>
<script>
import Uploader from 'ct-adc-uploader';

export default {
    data() {
        return {
            uploader1: {
                files: ['http://image.tcy365.net/game/pic/qzsk_108.png'],
                accept: { extensions: 'png', mimeTypes: '.png' },
                error: ''
            },
            uploader2: {
                error: ''
            },
            uploader3: {
                error: ''
            },
            uploader4: {
                files: ['http://onlinepackagesys.admin.ct108.org:1505/demo/ConfigTemplate.xlsx'],
                error: ''
            },
            uploader5: {
                error: ''
            },
            attrs: [
                {
                    name: 'accept',
                    desc: '上传文件类型限制',
                    type: 'Object',
                    default: 'null',
                    all: 'object/null'
                },
                {
                    name: 'auto',
                    desc: '是否自动上传文件',
                    type: 'Boolean',
                    default: 'false',
                    all: 'true/false'
                },
                {
                    name: 'chunked',
                    desc: '是否分片上传文件',
                    type: 'Boolean',
                    default: 'false',
                    all: 'true/false'
                },
                {
                    name: 'chunkSize',
                    desc: '分片大小',
                    type: 'Number',
                    default: '5242880 即5M',
                    all: '数字'
                },
                {
                    name: 'chunkRetry',
                    desc: '分片重传次数',
                    type: 'Number',
                    default: '2',
                    all: '整数'
                },
                {
                    name: 'compress',
                    desc: '是否压缩图片',
                    type: 'Object/Boolean',
                    default: 'false',
                    all: 'false或object(压缩选项)'
                },
                {
                    name: 'disabled',
                    desc: '是否禁用组件',
                    type: 'Boolean',
                    default: 'false',
                    all: 'true/false'
                },
                {
                    name: 'duplicate',
                    desc: '是否可重复上传',
                    type: 'Boolean',
                    default: 'false',
                    all: 'true/false'
                },
                {
                    name: 'fileNumLimit',
                    desc: '可上传文件数量',
                    type: 'Number',
                    default: '5',
                    all: '整数'
                },
                {
                    name: 'files',
                    desc: '已上传的文件',
                    type: 'Array',
                    default: '[]',
                    all: '每项为一个文件线上链接的数组'
                },
                {
                    name: 'fileSingleSizeLimit',
                    desc: '单个文件的大小限制',
                    type: 'Number',
                    default: '2 * 1024 * 1024',
                    all: '整数'
                },

                {
                    name: 'fileSizeLimit',
                    desc: '文件总大小限制',
                    type: 'Number',
                    default: '10 * 1024 * 1024',
                    all: '整数'
                },
                {
                    name: 'fileVal',
                    desc: '文件上传域的name',
                    type: 'String',
                    default: '"file"',
                    all: '字符串'
                },
                {
                    name: 'formData',
                    desc: '表单数据',
                    type: 'Object',
                    default: '{}',
                    all: ''
                },
                {
                    name: 'headers',
                    desc: '自定义请求hearder',
                    type: 'Object',
                    default: '{}',
                    all: '请求头'
                },
                {
                    name: 'method',
                    desc: '上传请求类型',
                    type: 'String',
                    default: 'post',
                    all: 'http方法'
                },
                {
                    name: 'multiple',
                    desc: '是否可多选',
                    type: 'Boolean',
                    default: 'false',
                    all: 'true/false'
                },
                {
                    name: 'resultFilter',
                    desc: '上传结果过滤器',
                    type: 'Function',
                    default: 'new Function()',
                    all: ''
                },
                {
                    name: 'sendAsBinary',
                    desc: '是否以二进制方式方式传输',
                    type: 'Boolean',
                    default: 'false',
                    all: 'true/false'
                },
                {
                    name: 'server',
                    desc: '接口地址',
                    type: 'String',
                    default: '""',
                    all: ''
                },
                {
                    name: 'threads',
                    desc: '上传并发数',
                    type: 'Number',
                    default: '3',
                    all: '整数'
                },
                {
                    name: 'thumbnailWidth',
                    desc: '生成缩略图的宽度(图片专有)',
                    type: 'Number',
                    default: '110',
                    all: ''
                },
                {
                    name: 'thumbnailHeight',
                    desc: '生成缩略图的高度(图片专有)',
                    type: 'Number',
                    default: '110',
                    all: ''
                },
                {
                    name: 'thumb',
                    desc: '生成缩略图的规则(图片专有)',
                    type: 'Object',
                    default: '{width: 110,height: 110,quality: 70,allowMagnify: true,crop: true,type: ""}',
                    all: ''
                },
                {
                    name: 'hasPreview',
                    desc: '是否需要预览(图片专有)',
                    type: 'Boolean',
                    default: 'false',
                    all: 'true/false'
                },
                {
                    name: 'tip',
                    desc: '禁用时提示文字(disabled为true时可用)(文件专有)',
                    type: 'String',
                    default: '""',
                    all: ''
                },
                {
                    name: 'buttonText',
                    desc: '按钮文字(文件专有)',
                    type: 'String',
                    default: '""',
                    all: ''
                }
            ],
            events: [
                { name: 'runtime-success', desc: '文件上传成功', params: '-'},
                { name: 'runtime-error', desc: '实时错误', params: '-'},
                { name: 'change-status', desc: '状态变化', params: '-'}
            ],
            methods: [
                { name: 'upload', desc: '上传文件', params: '无', rt: 'undefined'},
                { name: 'refreshUploader', desc: '刷新图片上传组件', params: '无', rt: 'undefined'},
                { name: 'resetUploader', desc: '重置图片上传组件', params: '无', rt: 'undefined' },
                { name: 'cancelUpload', desc: '取消还未上传成功的图片', params: '无', rt: '-' },
                { name: 'isPending', desc: '组件是否处于上传状态，即其中有没有正在上传的图片', params: '无', rt: 'true - 当前有正在上传的图片;false - 当前没有正在上传的图片' },
                { name: 'getUploadedFiles', desc: '获取组件中已成功上传的文件', params: '无', rt: 'Array,Array的每一项为一个file对象' },
                { name: 'getErrorFiles', desc: '获取组件中上传失败的文件', params: '无', rt: 'Array,Array的每一项为一个file对象' },
                { name: 'getPendingFiles', desc: '获取组件中正在上传的文件', params: '无', rt: 'Array,Array的每一项为一个file对象' },
                { name: 'getUrls', desc: '获取组件中上传成功的文件路径集合', params: '无', rt: 'Array,Array的每一项为一个图片在服务器上的路径' }
            ]
        };
    },
    components: {
        Uploader
    },
    methods: {
        errorHandler1(error) {
            this.uploader1.error = error.msg;
        },
        errorHandler2(error) {
            this.uploader2.error = error.msg;
        },
        errorHandler3(error) {
            this.uploader3.error = error.msg;
        },
        successHandler1() {
            this.uploader1.error = '';
        },
        successHandler2() {
            this.uploader2.error = '';
        },
        successHandler3() {
            this.uploader3.error = '';
        }
    }
};
</script>

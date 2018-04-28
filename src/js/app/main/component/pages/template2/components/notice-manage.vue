<template>
    <div>
        <slide-out ref="slideout" v-model="isShow" width="80%" is-transparent @on-after-hide="afterHide">
            <div slot="head" class="flex">
                <div>添加</div>
                <div class="flex-1"><button class="btn btn-default btn-sm pull-right" @click="hide">关闭</button></div>
            </div>
            <div slot="body" class="form-horizontal" v-loading="isLoading">
                <div class="form-group">
                    <label class="col-sm-2 control-label"><i class="red">*</i> 公告标题：</label>
                    <div class="col-sm-3" :class="{'has-error': errors.has('Title')}">
                        <input type="text" v-model="form.Title" class="form-control" placeholder="请输入公告标题" v-validate="'required'" data-vv-as="公告标题" name="Title" maxlength="20">
                        <span class="help-block" v-show="errors.has('Title')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('Title')}}</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label"><i class="red">*</i> 有效期：</label>
                    <div class="col-sm-6" :class="{'has-error': errors.has('BeginDateTime') || errors.has('EndDateTime')}">
                        <dates-input :initialBeginDate="form.BeginDateTime" :initialEndDate="form.EndDateTime" ref="di" :beginOps="{type: 'datetime'}" :endOps="{type: 'datetime'}" />
                        <span class="help-block" v-show="errors.has('BeginDateTime')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('BeginDateTime')}}</span>
                        <span class="help-block" v-show="errors.has('EndDateTime')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('EndDateTime')}}</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label"><i class="red">*</i> 排序ID：</label>
                    <div class="col-sm-2" :class="{'has-error': errors.has('OrderNo')}">
                        <input type="text" class="form-control" placeholder="请输入排序ID" v-model.number="form.OrderNo" name="OrderNo" v-validate="'required|numeric|min_value:1'" data-vv-as="排序ID" maxlength="10">
                        <span class="help-block" v-show="errors.has('OrderNo')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('OrderNo')}}</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label"><i class="red">*</i> 类型：</label>
                    <div class="col-sm-4">
                        <label class="radio-inline" v-for="item in source.noticeType" :key="item.key">
                            <input type="radio" :value="item.key" v-model="form.NoticeType"> {{item.val}}
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">跳转：</label>
                    <div class="col-sm-4">
                        <label class="checkbox-inline">
                            <input type="checkbox" v-model.number="form.IsJump"> 启用
                        </label>
                    </div>
                </div>
                <div class="form-group" v-show="form.IsJump">
                    <div class="col-sm-10 col-sm-offset-2">
                        <label class="radio-inline" v-for="item in source.jumpType" :key="item.key">
                            <input type="radio" :value="item.key" v-model="form.JumpType"> {{item.val}}
                        </label>
                    </div>
                </div>
                <div class="form-group" v-show="form.IsJump&&form.JumpType==1">
                    <div class="col-sm-2 col-sm-offset-2">
                        <select name="" class="form-control" id="" v-model="form.JumpSelectValue">
                            <option value="0">选择模块</option>
                            <option value="1">抽奖</option>
                            <option value="2">任务</option>
                            <option value="3">签到</option>
                            <option value="4">其他</option>
                        </select>
                    </div>
                    <div class="col-sm-4" v-show="form.IsJump&&form.JumpType==1&&form.JumpSelectValue==4" :class="{'has-error': errors.has('JumpOtherValue')}">
                        <input type="text" name="" class="form-control" id="" placeholder="请输入超链接" v-model="form.JumpOtherValue" maxlength="20">
                        <span class="help-block" v-show="errors.has('JumpOtherValue')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('JumpOtherValue')}}</span>
                    </div>
                </div>
                <div class="form-group" v-show="form.IsJump&&form.JumpType==2" :class="{'has-error': errors.has('JumpInputValue')}">
                    <div class="col-sm-4 col-sm-offset-2">
                        <input type="text" name="" class="form-control" id="" placeholder="请输入超链接" v-model="form.JumpInputValue" maxlength="255">
                        <span class="help-block" v-show="errors.has('JumpInputValue')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('JumpInputValue')}}</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label"><i class="red">*</i> 内容选择：</label>
                    <div class="col-sm-4">
                        <label class="radio-inline" v-for="item in source.contentType" :key="item.key">
                            <input type="radio" :value="item.key" v-model="form.ContentType"> {{item.val}}
                        </label>
                    </div>
                </div>
                <div class="form-group" v-show="form.ContentType==2">
                    <div class="col-sm-8 col-sm-offset-2">
                        <label class="radio-inline" v-for="item in source.contentSourceType" :key="item.key">
                            <input type="radio" :value="item.key" v-model="form.ContentSourceType"> {{item.val}} 
                        </label>
                    </div>
                </div>
                <div class="form-group" v-show="form.ContentType==1" :class="{'has-error': errors.has('Content')}">
                    <div class="col-sm-8 col-sm-offset-2">
                        <ueditor ref="ed" :content="form.Content" :config="editorConfig" :toolbars="[['bold', 'italic', 'forecolor', 'fontsize', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist']]" />
                        <span class="help-block" v-show="errors.has('Content')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('Content')}}</span>

                    </div>
                </div>
                <div class="form-group" v-show="form.ContentType==2&&form.ContentSourceType==1">
                    <div class="col-sm-4 col-sm-offset-2" :class="{'has-error': errors.has('imgLink')}">
                        <input type="text" name="imgLink" class="form-control" id="" placeholder="请输入图片链接" v-model="imgLink" @input="$validator.validate('imgLink')">
                        <span class="help-block" v-show="errors.has('imgLink')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('imgLink')}}</span>
                    </div>
                </div>
                <div class="form-group" v-show="form.ContentType==2&&form.ContentSourceType==2" :class="{'has-error': errors.has('uploader')}">
                    <div class="col-sm-8 col-sm-offset-2">
                        <uploader :files="files" type="img" ref="uploader" @success="$validator.validate('uploader')" />
                        <span class="help-block" v-show="errors.has('uploader')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('uploader')}}</span>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-4 col-sm-offset-2">
                        <button class="btn btn-primary" @click="isDgShow2=true">保存</button>
                        <button class="btn btn-default" @click="hide">取消</button>
                    </div>
                </div>
            </div>
        </slide-out>

        <dg v-model="isDgShow1" title="消息" content="确定要关闭吗？" @yes="yes1"/>
        <dg v-model="isDgShow2" title="消息" content="确定要保存吗？" @yes="yes2"/>
    </div>
</template>

<script>
import SlideOut from 'ct-adc-slideout';
import {DatesInput} from 'ct-adc-date';
import AutoComplete from 'ct-adc-auto-complete';
import Uploader from 'ct-adc-uploader';
import ueditor from 'ct-adc-ueditor';
import Const from 'common/const';
import Interface from 'common/interface';
import Dg from './dialog';

export default {
    name: '',
    data(){
        return {
            isDgShow1: false,
            isDgShow2: false,

            form: {
                Id: 0,
                OrderNo: '',
                NoticeGroupId: 0,
                Title: '',
                BeginDateTime: 0,
                EndDateTime: 0,
                NoticeType: 1,
                IsJump: false,
                JumpType: 1,
                JumpInputValue: '',
                JumpOtherValue: '',
                JumpSelectValue: '',
                ContentType: 1,
                ContentSourceType: 1,
                ImageUrl: '',
                Content: ''
            },
            files: [],
            imgLink: '',
            msg: '',
            
            source: {
                noticeType: Const.getData('noticeType'),
                jumpType: Const.getData('jumpType'),
                contentType: Const.getData('contentType'),
                contentSourceType: Const.getData('contentSourceType')
            },
            editorConfig: {
                maximumWords: 2000,
                enableAutoSave: false,
                autoFloatEnabled: false,
                retainOnlyLabelPasted: true,
                pasteplain: true,
                enableContextMenu: false,
                enterListSense: false
            },
            isShow: false,
            isLoading: false
        };
    },
    components: {
        SlideOut,
        DatesInput,
        AutoComplete,
        Uploader,
        ueditor,
        Dg
    },
    methods: {
        yes1(){
            this.isShow = false;
        },
        yes2(){
            this.save();
        },
        hide(){
            this.isDgShow1 = true;
        },
        afterHide(){
            this.$router.go(-1);
        },
        fetchInfo(){
            this.$http.get(Interface.notice.getInfo, {
                params: {
                    Id: this.form.Id
                }
            }).then(res => {
                this.form = res.Data;

                //图片类型为上传时，初始化上传组件的图片
                if (res.Data.ContentSourceType === 2){
                    this.files = [res.Data.ImageUrl];
                } else {
                    this.imgLink = res.Data.ImageUrl;
                }
            }).catch(msg => {
                new MiniMsg({
                    content: msg,
                    type: 'error',
                    duration: 2
                }).animation();
            });
        },
        save(){
            this.$validator.validateAll().then(result => {
                if (result){
                    this.isLoading = true;

                    if (this.form.ContentSourceType === 1){
                        this.form.ImageUrl = this.imgLink;
                    } else {
                        this.form.ImageUrl = this.$refs.uploader.getUrls[0];
                    }
                    this.form.Content = this.$refs.ed.getContent();
                    this.form.BeginDateTime = this.$refs.di.getDates(false).begin;
                    this.form.EndDateTime = this.$refs.di.getDates(false).end;

                    this.$http.post(Interface.notice.update, this.form).then(() => {
                        new MiniMsg({
                            content: '操作成功',
                            type: 'success',
                            duration: 1
                        }).animation(() => {
                            this.isShow = false;
                            this.$emit('on-save', this.$route.query.Id);
                        });
                    }).catch(msg => {
                        this.isLoading = false;
                        this.msg = msg;
                    });
                }
            });
        }
    },
    mounted(){
        this.form.NoticeGroupId = +this.$route.query.NoticeGroupId;
        if (this.$route.query.Id){
            this.form.Id = this.$route.query.Id;
            this.fetchInfo();
        }
        this.$validator.attach({
            name: 'BeginDateTime',
            rules: 'required',
            alias: '开始时间',
            getter: () => {
                return this.$refs.di.getDates().begin || '';
            }
        });
        this.$validator.attach({
            name: 'EndDateTime',
            rules: 'required',
            alias: '结束时间',
            getter: () => {
                return this.$refs.di.getDates().end || '';
            }
        });
        this.$validator.attach({
            name: 'JumpOtherValue',
            rules: 'required',
            alias: '超链接',
            getter: () => {
                if (this.form.IsJump && +this.form.JumpType === 1 && +this.form.JumpSelectValue === 4){
                    return this.form.JumpOtherValue;
                }
                return 1;
            }
        });
        this.$validator.attach({
            name: 'JumpInputValue',
            rules: 'required',
            alias: '超链接',
            getter: () => {
                if (this.form.IsJump && +this.form.JumpType === 2){
                    return this.form.JumpInputValue;
                }
                return 1;
            }
        });
        this.$validator.attach({
            name: 'imgLink',
            rules: 'required',
            alias: '图片链接',
            getter: () => {
                if (this.form.ContentType === 2 && this.form.ContentSourceType === 1){
                    return this.imgLink;
                }
                return 1;
            }
        });
        this.$validator.attach({
            name: 'uploader',
            rules: 'required',
            alias: '图片链接',
            getter: () => {
                if (this.form.ContentType === 2 && this.form.ContentSourceType === 2){
                    return this.$refs.uploader.getUrls()[0];
                }
                return 1;
            }
        });
        this.$validator.attach({
            name: 'Content',
            rules: 'required',
            alias: '文字内容',
            getter: () => {
                if (this.form.ContentType === 1){
                    return this.$refs.ed.getContent();
                }
                return 1;
            }
        });
    },
    beforeRouteEnter(to, from, next){
        next(vm => {
            vm.isShow = true;
        });
    }
};
</script>
<style scoped>
    .flex{
        display: flex;
        align-items: center;
    }
    .flex-1{
        flex: 1;
    }
    .inline{
        margin-bottom: 5px;
    }
    .inline>*{
        display: inline-block;
        font-weight: normal;
    }
</style>

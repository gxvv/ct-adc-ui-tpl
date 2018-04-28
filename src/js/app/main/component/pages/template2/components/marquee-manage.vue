<template>
    <div>
        <slide-out v-model="isShow" width="80%" is-transparent @on-after-hide="afterHide">
            <div slot="head" class="flex">
                <div>添加</div>
                <div class="flex-1"><button class="btn btn-default btn-sm pull-right" @click="hide">关闭</button></div>
            </div>
            <div slot="body" class="form-horizontal" v-loading="isLoading">
                <div class="form-group">
                    <label class="col-sm-2 control-label"><i class="red">*</i> 跑马灯标题：</label>
                    <div class="col-sm-3" :class="{'has-error': errors.has('Title')}">
                        <input type="text" class="form-control" placeholder="请输入跑马灯标题" v-model="form.Title" v-validate="'required'" data-vv-as="跑马灯标题" name="Title">
                        <span class="help-block" v-show="errors.has('Title')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('Title')}}</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label"><i class="red">*</i> 有效期：</label>
                    <div class="col-sm-6" :class="{'has-error': errors.has('BeginDateTime') || errors.has('EndDateTime')}">
                        <dates-input :initialBeginDate="form.BeginDateTime" :initialEndDate="form.BeginDateTime" ref="di" :beginOps="{type: 'datetime'}" :endOps="{type: 'datetime'}" />
                        <span class="help-block" v-show="errors.has('BeginDateTime')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('BeginDateTime')}}</span>
                        <span class="help-block" v-show="errors.has('EndDateTime')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('EndDateTime')}}</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label"><i class="red">*</i> 滚动间隔：</label>
                    <div class="col-sm-3" :class="{'has-error': errors.has('RollInterval')}">
                        <input type="text" class="form-control" placeholder="请输入滚动间隔" v-model="form.RollInterval" v-validate="'required|numeric|min_value:1'" data-vv-as="滚动间隔" name="RollInterval">
                        <span class="help-block" v-show="errors.has('RollInterval')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('RollInterval')}}</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label"><i class="red">*</i> 跑马灯内容：</label>
                    <div class="col-sm-6" :class="{'has-error': errors.has('Content')}">
                        <ueditor ref="ueditor" :content="form.Content" :config="editorConfig" :toolbars="[['bold', 'italic', 'forecolor', 'fontsize', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist']]" />
                        <span class="help-block" v-show="errors.has('Content')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('Content')}}</span>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-4 col-sm-offset-2">
                        <button class="btn btn-primary" @click="isDgShow2=true">
                            <popover></popover>
                        </button>
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
import ueditor from 'ct-adc-ueditor';
import Interface from 'common/interface';
import Dg from './dialog';
import Popover from 'common/components/popover.vue';

export default {
    name: '',
    data(){
        return {
            isDgShow1: false,
            isDgShow2: false,

            form: {
                Id: 0,
                NoticeGroupId: '',
                Title: '',
                BeginDateTime: '',
                EndDateTime: '',
                RollInterval: '',
                Content: ''
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
        ueditor,
        Dg,
        Popover
    },
    methods: {
        yes1(){
            this.isShow = false;
        },
        yes2(){
            this.save();
        },
        afterHide(){
            this.$router.go(-1);
        },
        hide(){
            this.isDgShow1 = true;
        },
        fetchInfo(){
            this.isLoading = true;

            this.$http.get(Interface.marquee.getInfo, {
                params: {
                    Id: this.form.Id
                }
            }).then((res) => {
                this.form = res.Data;
            }).catch(msg => {
                new MiniMsg({
                    content: msg,
                    type: 'error',
                    duration: 2
                }).animation();
            }).then(() => {
                this.isLoading = false;
            });
        },
        save(){
            this.$validator.validateAll().then(res => {
                if (res){
                    this.isLoading = true;

                    this.form.BeginDateTime = this.$refs.di.getDates(false).begin;
                    this.form.EndDateTime = this.$refs.di.getDates(false).end;
                    this.form.Content = this.$refs.ueditor.getContent();

                    this.$http.post(Interface.marquee.update, this.form).then(() => {
                        new MiniMsg({
                            content: '操作成功',
                            type: 'success',
                            duration: 1
                        }).animation(() => {
                            this.isShow = false;
                            this.$emit('on-save', this.$route.query.Id);
                        });
                    }, msg => {
                        this.isLoading = false;
                        this.msg = msg;
                    });
                }
            });
        }
    },
    mounted(){
        this.form.NoticeGroupId = this.$route.query.NoticeGroupId || 0;
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
            name: 'Content',
            rules: 'required',
            alias: '跑马灯内容',
            getter: () => {
                return this.$refs.ueditor.getContent();
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
<style>
    .flex{
        display: flex;
        align-items: center;
    }
    .flex-1{
        flex: 1;
    }
</style>

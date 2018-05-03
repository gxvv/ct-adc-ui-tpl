<template>
    <div>
        <slide-out v-model="isShow" width="80%" is-transparent @on-after-hide="afterHide">
            <div slot="head" class="flex">
                <div>{{title}}</div>
                <div class="flex-1"><button class="btn btn-default btn-sm pull-right" @click="hide">关闭</button></div>
            </div>
            <div slot="body" class="form-horizontal" v-loading="isLoading">
                <div class="form-group">
                    <label class="col-sm-2 control-label"><i class="red">*</i> 公告组名称：</label>
                    <div class="col-sm-4" :class="{'has-error': errors.has('NoticeName')}">
                        <input type="text" maxlength="20" class="form-control" placeholder="请输入公告组名称" v-model="form.NoticeName" v-validate="'required'" data-vv-as="公告组名称" name="NoticeName">
                        <popover content="简单的提示，格式：请输入xxx"></popover>
                        <span class="help-block" v-show="errors.has('NoticeName')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('NoticeName')}}</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label"><i class="red">*</i> 游戏选择：</label>
                    <div class="col-sm-4" :class="{'has-error': errors.has('GameCode')}">
                        <auto-complete ref="ac" :maxlength="20" :list="gameList" :keys="keys" :showKeys="keys" :matchKeys="keys" :value="acValue" autoClear />
                        <popover content="当输入不在列表中的内容时，清空输入框"></popover>
                        <span class="help-block" v-show="errors.has('GameCode')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('GameCode')}}</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label"><i class="red">*</i> 有效期：</label>
                    <div class="col-sm-6">
                      <div class="radio">
                          <label><input type="radio" v-model="form.timeMode" :value="1">永久</label>
                          <label class="ml20"><input type="radio" v-model="form.timeMode" :value="2">指定时间</label>
                          <popover content="当切换有效期模式后，已经输入的有效期会清空" @shown="startDemo"></popover>
                      </div>
                    </div>
                    <div v-show="form.timeMode === 2" class="col-sm-6 col-sm-offset-2" :class="{'has-error': errors.has('BeginDateTime') || errors.has('EndDateTime')}">
                        <dates-input :initialBeginDate="form.BeginDateTime" :initialEndDate="form.EndDateTime" ref="di" :beginOps="{type: 'datetime'}" :endOps="{type: 'datetime'}" />
                        <span class="help-block" v-show="errors.has('BeginDateTime')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('BeginDateTime')}}</span>
                        <span class="help-block" v-show="errors.has('EndDateTime')"><i class="glyphicon glyphicon-remove-sign"></i> {{errors.first('EndDateTime')}}</span>
                    </div>
                </div>
                <div class="alert alert-danger" v-show="msg">{{msg}}</div>

                <div class="form-group">
                    <div class="col-sm-4 col-sm-offset-2">
                        <button class="btn btn-primary" @click="isDgShow2=true">保存
                        </button>
                        <popover content="点击保存时，显示loading层（阻止鼠标点击）"></popover>
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
import Interface from 'common/interface';
import Dg from './dialog';
import Popover from 'common/components/popover.vue';

export default {
    name: 'GroupManage',
    data(){
        return {
            isDgShow1: false,
            isDgShow2: false,

            form: {
                Id: 0,
                NoticeName: '',
                GameId: '',
                GameCode: '',
                timeMode: 1,
                BeginDateTime: '',
                EndDateTime: ''
            },
            gameList: [],
            keys: ['GameId', 'GameName', 'GameCode'],
            acValue: '',

            isShow: false,
            isLoading: false,

            msg: ''
        };
    },
    computed: {
        title(){
            if (this.$route.query.Id){
                return '编辑公告条';
            }
            return '创建公告条';
        }
    },
    components: {
        SlideOut,
        DatesInput,
        AutoComplete,
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
        fetchGameList(){
            this.$http.get(Interface.common.getGameList).then(res => {
                this.gameList = res.Data;
            }).catch(msg => {
                new MiniMsg({
                    content: msg,
                    type: 'error',
                    duration: 2
                }).animation();
            });
        },
        fetchInfo(){
            this.isLoading = true;

            this.$http.get(Interface.group.getInfo, {
                params: {
                    Id: this.$route.query.Id
                }
            }).then(res => {
                this.form = res.Data;
                this.acValue = {
                    GameName: res.Data.GameName
                };
            }).catch(msg => {
                console.log(msg);
            }).then(() => {
                this.isLoading = false;
            });
        },
        save(){
            this.$validator.validateAll().then(res => {
                if (res){
                    this.isLoading = true;

                    this.form.GameId = this.$refs.ac.getValue().GameId;
                    this.form.GameCode = this.$refs.ac.getValue().GameCode;
                    this.form.BeginDateTime = this.$refs.di.getDates(false).begin;
                    this.form.EndDateTime = this.$refs.di.getDates(false).end;

                    this.$http.post(Interface.group.update, this.form).then(() => {
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
        },
        startDemo() {
            const self = this;
            const action = function* () {
                yield () => {
                    self.form.timeMode = 2;
                };
                yield () => {
                    self.$refs.di.changeEndDate('2018-06-06');
                };
                yield () => {
                    self.form.timeMode = 1;
                };
                yield () => {
                    self.form.timeMode = 2;
                };
            };
            const iterator = generate => {
                const instance = generate();
                const next = () => {
                    const {value, done} = instance.next();

                    if (done) {
                        return;
                    }
                    value();
                    setTimeout(() => {
                        next();
                    }, 1e3);
                };

                next();
            };

            iterator(action);
        }
    },
    created(){
        this.fetchGameList();
        if (this.$route.query.Id){
            this.fetchInfo();
        }
    },
    mounted(){
        this.$validator.attach({
            name: 'GameCode',
            rules: 'required',
            alias: '游戏',
            getter: () => {
                return this.$refs.ac.getValue().GameCode;
            }
        });
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
    },
    beforeRouteEnter(to, from, next){
        next(vm => {
            vm.isShow = true;
        });
    },
    watch: {
        'form.timeMode'() {
            this.$refs.di.initDates();
        }
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

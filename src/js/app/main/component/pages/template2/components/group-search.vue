<template>
    <div class="well well-sm clearfix">
        <form action="javascript:;" class="form-horizontal form-horizontal-sm">
            <div class="col-lg-11 col-sm-11 text-nowrap">
                <div class="col-lg-3 col-sm-4">
                    <div class="form-group form-group-sm">
                        <label class="col-sm-4 control-label">公告组名称：</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" placeholder="请输入公告组名称" v-model="form.NoticeName" maxlength="20">
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-4">
                    <div class="form-group form-group-sm">
                        <label class="col-sm-4 control-label">游戏：</label>
                        <div class="col-sm-8">
                            <auto-complete ref="ac" :list="gameList" :maxlength="20" :keys="keys" :showKeys="keys" :matchKeys="keys" autoClear :value="acValue" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-4">
                    <div class="form-group form-group-sm">
                        <label class="col-sm-4 control-label">状态：</label>
                        <div class="col-sm-8">
                        <select name="" id="" class="form-control" v-model="form.Disable">
                            <option v-for="item in source.disabled" :value="item.key" :key="item.key">{{item.val}}</option>
                        </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-1 col-sm-1 text-right">
                <div class="form-group form-group-sm">
                    <button type="submit" class="btn btn-sm btn-primary" @click="search" :disabled="isSearching">
                        <i class="glyphicon glyphicon-search" v-if="!isSearching"></i>
                        <i class="glyphicon glyphicon-refresh rotate" v-else></i>
                        搜索
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import AutoComplete from 'ct-adc-auto-complete';
import Const from 'common/const';
import Interface from 'common/interface';

const form = {
    NoticeName: '',
    GameCode: '',
    Disable: 2
};

export default {
    name: '',
    data(){
        return {
            form: {...form},
            gameList: [],
            source: {
                disabled: Const.getData('disabled')
            },
            keys: ['GameId', 'GameName', 'GameCode'],
            acValue: {}
        };
    },
    props: ['initIsSearching'],
    components: {
        AutoComplete
    },
    computed: {
        isSearching(){
            return this.initIsSearching;
        }
    },
    methods: {
        search(){
            this.form.GameCode = this.$refs.ac.getValue().GameCode || '';
            this.$emit('on-search', this.form);
        },
        reset(){
            this.acValue = {};
            this.form = {...form};
            return {...form};
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
        }
    },
    created(){
        this.fetchGameList();
    }
};
</script>


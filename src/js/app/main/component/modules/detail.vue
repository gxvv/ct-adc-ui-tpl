<template lang="html">
<div class="container">
    <a href="javascritp:;" class="page-close" @click="$router.go(-1)"></a>
    <div class="loading" style="height:100px;" v-if="loading"></div>
    <div style="height:100px;position:relative" v-else-if="!loadStatus">
        <span class="hv-center">{{loadMsg}}</span>
    </div>
    <div v-else>
        <div class="page-header col-sm-12 mt10">
            <h4 class="col-offset-1 text-muted">详情</h4>
        </div>
        <table class="table table-bordered">
            <tbody>
                <tr>
                    <th style="width: 10%;">名称</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>序号</th>
                    <td>1</td>
                </tr>
            </tbody>
        </table>
    </div>
</div></template>

<script>
export default {
    data() {
        return {
            loading: false, // 加载状态
            saving: false, // 是否保存中
            loadStatus: true, // 加载数据是否成功
            loadMsg: '', // 加载数据失败时的提示信息
            saveStatus: true, // 保存是否成功
            saveMsg: '', // 保存失败时的提示信息

            detail: {}
        };
    },
    methods: {
        getData() {
            /*$.ajax({
                url: API.getClubDetail,
                cache: false,
                data: {
                    ClubNo: this.$route.params.id
                },
                beforeSend: () => {
                    this.loading = true;
                }
            }).done(res => {
                if (res.Code === 0) {
                    this.detail = res.Data || '';
                } else {
                    this.loadStatus = false;
                    this.loadMsg = res.Message;
                }
            }).fail(() => {
                this.loadStatus = false;
                this.loadMsg = '网络错误';
            }).complete(() => {
                this.loading = false;
            });*/
        },
        back() {
            this.$router.push({path: '/'});
        }
    },
    created() {
        this.getData();
    }
};
</script>

<style lang="css">
.page-close {
    position: fixed;
    right: 35px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-top: 15px;
    z-index: 9999;
}
.page-close:before, .page-close:after {
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: -2px;
      display: block;
      content: '';
      width: 100%;
      height: 2px;
      background-color: #000;
      opacity: .2;
      transition: opacity .2s ease;
}
.page-close:hover:before, .page-close:hover:after {
      opacity: .5;
}
.page-close:before {
      -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
}
.page-close:after {
      -webkit-transform: rotate(-45deg);
              transform: rotate(-45deg);
}

</style>

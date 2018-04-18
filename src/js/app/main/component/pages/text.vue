<template lang="html">
    <div class="page-container">
        <ds pt2="Copywriting 文案" desc="系统中所有的文案展示" />
        <ds pt3="整体文案风格" desc="整体的风格" />
        <ds pt4="简洁" desc="内容简洁，字数尽量少，避免冗余" />
        <ds pt4="易懂" desc="文字易理解，拒绝个性化或不统一" />
        
        <api name="操作" :texts="texts1" desc="默认情况下，当有以下类型操作时，请使用下面列出的文本，避免出现类似的文本；当不足以表现其作用时，可以根据业务添加一些文字，如 添加XXXX、编辑XXXX" />
        <api name="前端验证" :texts="texts2" desc="当表单字段未通过前端验证时显示的消息" />
        <api name="其他" :texts="texts3" desc="" />

    </div>
</template>

<script>
export default {
    data(){
        return {
            texts1: [
                {name: '添加', desc: '新增一项数据'},
                {name: '编辑', desc: '编辑一项数据；“编辑”即编辑该项数据，或“编辑XXXX”编辑该项数据的局部数据或其中的某个属性数据，如“编辑标签”'},
                {name: '查看[XXXX]', desc: '查看一项数据的详细信息'},
                {name: '启用', desc: '将一项数据的状态变为“可使用”的状态'},
                {name: '禁用', desc: '将一项数据的状态变为“禁用中”'},
                {name: '删除', desc: '删除一项数据'},
                {name: '保存', desc: '保存一个表单，保存内容，一般都要进行数据提交'},
                {name: '取消', desc: '取消编辑，关闭弹窗，经常和“保存”一起出现'},
                {name: '补发', desc: '一般是奖品的补发'},
                {name: '导入XXXX', desc: '导入一个文件，如“导入CSV文件”'},
                {name: '导出', desc: '将信息导出为一个文件'},
                {name: '搜索', desc: '搜索符合条件的内容'},
                {name: '预览', desc: '预览数据时，一般为数据配置后对前台产生的影响'},
                {name: '切换[XXXX]', desc: '两种状态间的实时转换'},
                {name: 'XXXX配置', desc: '对数据进行另一维度的配置，如当前是补丁数据列表，加入“补丁投放配置”操作对单个补丁做投放的配置'}
            ],
            texts2: [
                {name: '必填', desc: 'xxx 是必须的'},
                {name: '待完善', desc: '-'}
            ],
            texts3: [
                {name: '日期', desc: '24小时制，精确到秒，如2018-04-18 20:00:00'},
                {name: '状态类', desc: '可用状态: 如已启用、已生效、已通过；不可用状态: 如已禁用、未生效、已驳回；挂起状态: 如测试中、待领取'},
                {name: '并列信息(id/name同时展示)', desc: '两个信息: 对于两个信息并列的情况，采用id | name；多信息 对于多个信息并列的情况，采用id | code | name'},
                {name: 'select第一项', desc: '推荐根据场景使用如下三项：不限 全部 请选择'},
                {name: '数据为空', desc: '前端默认展示为空，而非 - 等。例如表格中有些信息后端返回是空的'}
            ]
        };
    }
};
</script>

<style lang="css">
</style>

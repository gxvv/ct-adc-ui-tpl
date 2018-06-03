<template lang="html">
    <div class="page-container">
        <ds pt2="Copywriting 文案" desc="系统中所有的文案展示" />
        <ds pt3="整体文案风格" desc="整体的风格" />
        <ds pt4="简洁" desc="内容简洁，字数尽量少，避免冗余" />
        <ds pt4="易懂" desc="文字易理解，拒绝个性化或不统一" />
        
        <api name="操作" :texts="texts1" desc="默认情况下，当有以下类型操作时，请使用下面列出的文本，避免出现类似的文本；当不足以表现其作用时，可以根据业务添加一些文字，如 添加XXXX、编辑XXXX" />
        <api name="placeholder" :texts="texts2" desc="表单元素的placeholder(占位灰色提示信息)" />
        <api name="前端验证" :texts="texts3" desc="当表单字段未通过前端验证时显示的消息" />
        <api name="其他" :texts="texts4" desc="" />

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
                {name: '启用', desc: '将一项数据的状态变为“启用”的状态'},
                {name: '禁用', desc: '将一项数据的状态变为“禁用”状态'},
                {name: '删除', desc: '删除一项数据'},
                {name: '保存', desc: '保存一个表单，保存内容，一般都要进行数据提交'},
                {name: '取消', desc: '取消编辑，关闭弹窗，经常和“保存”一起出现'},
                {name: '导入[XXXX]', desc: '导入一个文件，如“导入CSV文件”'},
                {name: '导出', desc: '将信息导出为一个文件'},
                {name: '搜索', desc: '搜索符合条件的内容'},
                {name: '预览', desc: '预览数据时，一般为数据配置后对前台产生的影响'},
                {name: '切换[XXXX]', desc: '两种状态间的实时转换'},
                {name: '[XXXX]配置', desc: '对数据进行另一维度的配置，如当前是补丁数据列表，加入“补丁投放配置”操作对单个补丁做投放的配置'}
            ],
            texts2: [
                {name: '只允许XXX', desc: '只允许某些文本类型。如 只允许数字'},
                {name: '不允许XXX', desc: '不允许某种情况发生。 如 不允许列表中的内容重复'},
                {name: '[引导性逻辑描述]', desc: '内容不能随便编辑，需遵循某些约定。如 只能从xxx处复制'}
            ],
            texts3: [
                {name: 'alpha_dash', desc: '${field}必须在${target}之后'},
                {name: 'alpha_num', desc: '${field} 只能包含字母数字字符.'},
                {name: 'alpha_spaces', desc: '${field} 只能包含字母字符，包括空格.'},
                {name: 'alpha', desc: '${field} 只能包含字母字符.'},
                {name: 'before', desc: '${field} 必须在${target} 之前.'},
                {name: 'between', desc: '${field} 必须在${min} ${max}之间.'},
                {name: 'confirmed', desc: '${field} 不能和${confirmedField}匹配.'},
                {name: 'date_between', desc: '${field}必须在${min}和${max}之间.'},
                {name: 'date_format', desc: '${field}必须在在${format}格式中.'},
                {name: 'decimal', desc: '${field} 必须是数字的而且能够保留${decimals === \'*\' ? \'\' : decimals} 位小数.'},
                {name: 'digits', desc: '${field} 必须是数字，且精确到 ${length}数'},
                {name: 'dimensions', desc: '${field}必须是 ${width} 像素到 ${height} 像素.'},
                {name: 'email', desc: '${field} 必须是有效的邮箱.'},
                {name: 'ext', desc: '${field} 必须是有效的文件.'},
                {name: 'image', desc: '${field} 必须是图片.'},
                {name: 'included', desc: '${field} 必须是一个有效值.'},
                {name: 'ip', desc: '${field} 必须是一个有效的地址.'},
                {name: 'max', desc: '${field} 不能大于${length}字符.'},
                {name: 'max_value', desc: '${field} 必须小于或等于${max}.'},
                {name: 'mimes', desc: '${field} 必须是有效的文件类型.'},
                {name: 'min', desc: '${field} 必须至少有 ${length} 字符.'},
                {name: 'min_value', desc: '${field} 必须大于或等于${min}.'},
                {name: 'excluded', desc: '${field}必须是一个有效值.'},
                {name: 'numeric', desc: '${field} 只能包含数字字符.'},
                {name: 'regex', desc: '${field} 格式无效.'},
                {name: 'required', desc: '${field} 是必须的.'},
                {name: 'size', desc: '${field} 必须小于 ${formatFileSize(size)}.'},
                {name: 'url', desc: '${field}不是有效的url.'}
            ],
            texts4: [
                {name: '日期', desc: '24小时制，精确到秒，如2018-04-18 20:00:00'},
                {name: '状态类', desc: '可用状态: 如已启用、已生效、已通过；不可用状态: 如已禁用、未生效、已驳回；挂起状态: 如测试中、待领取'},
                {name: '并列信息(id/name同时展示)', desc: '两个信息: 对于两个信息并列的情况，采用id | name；多信息 对于多个信息并列的情况，采用id | code | name'},
                {name: 'select第一项', desc: '推荐根据场景使用如下：不限：一般用于搜索表单中 请选择：一般用于编辑表单中；select第一项为默认项，建议该项为必须项，即使在select为必填的情况下。'},
                {name: '数据为空', desc: '展示为空，而非 - / 等。例如表格中有些信息后端返回是空的'},
                {name: '数据在因逻辑限制为空', desc: '默认显示为 / ，推荐区别于正文。如数据未提交审核时，审核结果显示为灰色的/'},
                {name: '数据匹配不到对应的状态', desc: '显示为原始数据，例如针对某一状态，前后端定义了数字1表示成功，数字2表示失败；因某种原因数据中有3，此时直接显示为 3'}
            ]
        };
    }
};
</script>

<style lang="css">
</style>

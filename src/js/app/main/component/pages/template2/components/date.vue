<template>
    <div>
        {{item.BeginDateTime|dateTimeFormat}} 至 {{item.EndDateTime|dateTimeFormat}}
    </div>
</template>
<script>
    // import Interface from 'common/interface';

    export default{
        name: '',
        props: {
            prop: {
                // 对应的源数据中的字段名
                type: String,
                default: ''
            },
            item: {
                // 所在行的数据信息
                type: Object,
                default(){
                    return {};
                }
            },
            index: {
                // 所在行的索引
                type: Number,
                default(){
                    return -1;
                }
            },
            data: {
                // 源全局数据，即表格对应的源数据
                type: Array,
                default(){
                    return [];
                }
            }
        }
    };
</script>

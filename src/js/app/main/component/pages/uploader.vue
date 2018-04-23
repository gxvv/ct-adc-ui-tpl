<template>
    <div class="page-container">
        <ds pt2="上传组件" desc="上传图片、文件" />
        <ds pt3="何时使用" desc="上传图片、文件" />
        <demo title="基本用法" desc="上传文件">
            <uploader slot="source" type="img" />
            <code-snippet slot="code">
                &lt;div style="width: 600px;" slot="source"&gt;&lt;area-selector showNation /&gt;&lt;/div/&gt;
                &lt;script&gt;
                    import AreaSelector from 'ct-adc-area-selector';

                    export default {
                        components: {
                            AreaSelector
                        }
                    };
                    &lt;/script&gt;
            </code-snippet>
        </demo>

        <api :attrs="attrs" :events="events" :methods="methods" />
    </div>
</template>
<script>
import Uploader from 'ct-adc-uploader';

export default {
    data(){
        return {
            attrs: [
                {name: '-', desc: '-', type: '-', default: '-', all: '-'}
            ],
            events: [
                {name: '-', desc: '', params: '-'}
            ],
            methods: [
                {name: '-', desc: '-', params: '-', rt: '-'}
            ]
        };
    },
    components: {
        Uploader
    }
};
</script>

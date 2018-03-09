<template lang="html">
    <div>
      <markdown>

### 释义

设计风格决定了页面给人的第一印象

### 范围

风格包含但不限于页面色调、空间间距、内容排布、字体等

### 整体风格

页面的整体风格使用bootstrap风格，页面使用公司通用的后台主题。

---

![](/assets/颜色.png)

**保存、 编辑 、导入、 导出 、查询** 等无害操作使用 **蓝色**

**生效、启用** 等具有激活作用的操作使用 **绿色**

**停用、删除** 等有害操作使用 **红色**

---

![](/assets/文字.png)

---

### 原则

* 间距一般是5px的整数倍

* 无关联区块间距(一般15px)大于关联区块内部间距(一般5px/10px)
      </markdown>
    </div>
</template>

<script>
import Markdown from 'common/markdown';
export default {
    components: {
        Markdown
    }
};
</script>

<style lang="css">
</style>

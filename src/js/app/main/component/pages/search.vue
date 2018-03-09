<template lang="html"><div>
  <h1 class="page-header">搜索组件</h1>
  <p>通用型搜索组件。应用于所有需要搜索的表。</p>
  <h3>UI规范</h3>
  <p>当搜索条件不超过一行时，搜索按钮采用跟随展示（<a href="javascript:;" @click="scrollTo('#example1')">例子1</a>）。反之则采用固定搜索按钮展示（<a href="javascript:;" @click="scrollTo('#example2')">例子2</a>）。</p>
  <h5 id="example1" class="pt20">例子1</h5>
  <div class="well well-sm clearfix">
    <form action="javascript:;" class="form-horizontal">
        <div class="row">
            <div class="col-sm-4">
                <div class="form-group form-group-sm">
                    <label class="control-label col-sm-4">自动完成:</label>
                    <div class="col-sm-8">
                        <auto-complete placeholder="请输入姓名，或ID" :list="list" :keys="['Name', 'Id']" :matchKeys="['Name', 'Id']"
                          :showKeys="['Name', 'Id']" @change="setName"></auto-complete>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-group form-group-sm">
                    <label class="control-label col-sm-4">状态:</label>
                    <div class="col-sm-8">
                        <select class="form-control" v-model="searchForm.Status">
                            <option value="">全部</option>
                            <option value="1">正常</option>
                            <option value="2">解散</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-sm-2">
                <button class="btn btn-sm btn-primary" @click="search" :disabled="isSearching">
                <i class="glyphicon glyphicon-search" v-if="!isSearching"></i>
                <i class="glyphicon glyphicon-refresh rotate" v-else></i>
                搜索</button>
            </div>
        </div>
    </form>
</div>
<p>
    <blockquote class="clip-b">
        <a href="javascript:;" class="clip">
          复制Template代码
        </a>
    </blockquote>
    <div class="highlight"><pre><code class="html">
&lt;div class="well well-sm clearfix"&gt;
    &lt;form action="javascript:;" class="form-horizontal"&gt;
        &lt;div class="row"&gt;
            &lt;div class="col-sm-4"&gt;
                &lt;div class="form-group form-group-sm"&gt;
                    &lt;label class="control-label col-sm-4"&gt;自动完成:&lt;/label&gt;
                    &lt;div class="col-sm-8"&gt;
                        &lt;auto-complete placeholder="请输入姓名，或ID" :list="list" :keys="['Name', 'Id']" :matchKeys="['Name', 'Id']"
                          :showKeys="['Name', 'Id']" @change="setName"&gt;&lt;/auto-complete&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="col-sm-3"&gt;
                &lt;div class="form-group form-group-sm"&gt;
                    &lt;label class="control-label col-sm-4"&gt;状态:&lt;/label&gt;
                    &lt;div class="col-sm-8"&gt;
                        &lt;select class="form-control" v-model="searchForm.Status"&gt;
                            &lt;option value=""&gt;全部&lt;/option&gt;
                            &lt;option value="1"&gt;正常&lt;/option&gt;
                            &lt;option value="2"&gt;解散&lt;/option&gt;
                        &lt;/select&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="col-sm-3"&gt;
                &lt;div class="form-group form-group-sm"&gt;
                    &lt;label class="control-label col-sm-4"&gt;序号:&lt;/label&gt;
                    &lt;div class="col-sm-8"&gt;
                        &lt;input type="text" class="form-control" v-model="searchForm.Id"&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="col-sm-2 text-right"&gt;
                &lt;button class="btn btn-sm btn-primary" @click="search" :disabled="isSearching"&gt;
                &lt;i class="glyphicon glyphicon-search" v-if="!isSearching"&gt;&lt;/i&gt;
                &lt;i class="glyphicon glyphicon-refresh rotate" v-else&gt;&lt;/i&gt;
                搜索&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/form&gt;
&lt;/div&gt;
    </code></pre></div>
    <blockquote class="clip-b">
        <a href="javascript:;" class="clip">
          复制Script代码
        </a>
    </blockquote>
    <div class="highlight"><pre><code class="javascript">
      import AutoComplete from 'ct-adc-auto-complete';
      export default {
          props: {
          },
          components: {
              AutoComplete
          },
          data() {
              return {
                  list: [],
                  searchForm: {
                      Name: '',
                      Status: '',
                      Id: ''
                  },
                  isSearching: false
              };
          },
          methods: {
              setName(row) {
                  this.searchForm.Name = row.Name || '';
              },
              search() {
                  // this.$emit('search');
                  this.isSearching = true;

                  setTimeout(() => {
                      this.isSearching = false;
                  }, 2e3);
              },
              setList() {
                  this.list = [
                      {Id: 1, Name: '打算看了假发'},
                      {Id: 2, Name: '打算看了假发'},
                      {Id: 3, Name: '打算看了假发'}
                  ];
              }
          },
          created() {
              this.setList();
          },
          mounted() {
              const {hljs} = window;

              $('pre code').each(function(i, block) {
                  hljs.highlightBlock(block);
              });

              const clipboard = new window.Clipboard('.clip', {
                  text: function() {
                      return $('.html').text();
                  }
              });

              clipboard.on('success', function(e) {
                  new MiniMsg({content: '复制成功'}).animation();
                  e.clearSelection();
              });
          }
      };
    </code></pre></div>
</p>
<h5 id="example2" class="pt20">例子2</h5>
<div class="well well-sm clearfix">
  <form action="javascript:;" class="form-horizontal">
      <div class="row">
          <div class="col-sm-10"><div class="col-sm-4">
              <div class="form-group form-group-sm">
                  <label class="control-label col-sm-4">自动完成:</label>
                  <div class="col-sm-8">
                      <auto-complete placeholder="请输入姓名，或ID" :list="list" :keys="['Name', 'Id']" :matchKeys="['Name', 'Id']"
                        :showKeys="['Name', 'Id']" @change="setName"></auto-complete>
                  </div>
              </div>
          </div>
          <div class="col-sm-4">
              <div class="form-group form-group-sm">
                  <label class="control-label col-sm-4">状态:</label>
                  <div class="col-sm-8">
                      <select class="form-control" v-model="searchForm.Status">
                          <option value="">全部</option>
                          <option value="1">正常</option>
                          <option value="2">解散</option>
                      </select>
                  </div>
              </div>
          </div>
          <div class="col-sm-4">
              <div class="form-group form-group-sm">
                  <label class="control-label col-sm-4">序号:</label>
                  <div class="col-sm-8">
                      <input type="text" class="form-control" v-model="searchForm.Id">
                  </div>
              </div>
          </div>
          <div class="col-sm-4">
              <div class="form-group form-group-sm">
                  <label class="control-label col-sm-4">标签:</label>
                  <div class="col-sm-8">
                      <input type="text" class="form-control" v-model="searchForm.Id">
                  </div>
              </div>
          </div></div>
          <div class="col-sm-2 text-right">
              <button class="btn btn-sm btn-primary" @click="search" :disabled="isSearching">
              <i class="glyphicon glyphicon-search" v-if="!isSearching"></i>
              <i class="glyphicon glyphicon-refresh rotate" v-else></i>
              搜索</button>
          </div>
      </div>
  </form>
</div>
<p>
    <blockquote class="clip-b">
        <a href="javascript:;" class="clip">
          复制Template代码
        </a>
    </blockquote>
    <div class="highlight"><pre><code class="html">
&lt;div class="well well-sm clearfix"&gt;
    &lt;form action="javascript:;" class="form-horizontal"&gt;
        &lt;div class="row"&gt;
            &lt;div class="col-sm-4"&gt;
                &lt;div class="form-group form-group-sm"&gt;
                    &lt;label class="control-label col-sm-4"&gt;自动完成:&lt;/label&gt;
                    &lt;div class="col-sm-8"&gt;
                        &lt;auto-complete placeholder="请输入姓名，或ID" :list="list" :keys="['Name', 'Id']" :matchKeys="['Name', 'Id']"
                          :showKeys="['Name', 'Id']" @change="setName"&gt;&lt;/auto-complete&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="col-sm-3"&gt;
                &lt;div class="form-group form-group-sm"&gt;
                    &lt;label class="control-label col-sm-4"&gt;状态:&lt;/label&gt;
                    &lt;div class="col-sm-8"&gt;
                        &lt;select class="form-control" v-model="searchForm.Status"&gt;
                            &lt;option value=""&gt;全部&lt;/option&gt;
                            &lt;option value="1"&gt;正常&lt;/option&gt;
                            &lt;option value="2"&gt;解散&lt;/option&gt;
                        &lt;/select&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="col-sm-3"&gt;
                &lt;div class="form-group form-group-sm"&gt;
                    &lt;label class="control-label col-sm-4"&gt;序号:&lt;/label&gt;
                    &lt;div class="col-sm-8"&gt;
                        &lt;input type="text" class="form-control" v-model="searchForm.Id"&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="col-sm-2 text-right"&gt;
                &lt;button class="btn btn-sm btn-primary" @click="search" :disabled="isSearching"&gt;
                &lt;i class="glyphicon glyphicon-search" v-if="!isSearching"&gt;&lt;/i&gt;
                &lt;i class="glyphicon glyphicon-refresh rotate" v-else&gt;&lt;/i&gt;
                搜索&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/form&gt;
&lt;/div&gt;
    </code></pre></div>
    <blockquote class="clip-b">
        <a href="javascript:;" class="clip">
          复制Script代码
        </a>
    </blockquote>
    <div class="highlight"><pre><code class="javascript">
      import AutoComplete from 'ct-adc-auto-complete';
      export default {
          props: {
          },
          components: {
              AutoComplete
          },
          data() {
              return {
                  list: [],
                  searchForm: {
                      Name: '',
                      Status: '',
                      Id: ''
                  },
                  isSearching: false
              };
          },
          methods: {
              setName(row) {
                  this.searchForm.Name = row.Name || '';
              },
              search() {
                  // this.$emit('search');
                  this.isSearching = true;

                  setTimeout(() => {
                      this.isSearching = false;
                  }, 2e3);
              },
              setList() {
                  this.list = [
                      {Id: 1, Name: '打算看了假发'},
                      {Id: 2, Name: '打算看了假发'},
                      {Id: 3, Name: '打算看了假发'}
                  ];
              }
          },
          created() {
              this.setList();
          },
          mounted() {
              const {hljs} = window;

              $('pre code').each(function(i, block) {
                  hljs.highlightBlock(block);
              });

              const clipboard = new window.Clipboard('.clip', {
                  text: function() {
                      return $('.html').text();
                  }
              });

              clipboard.on('success', function(e) {
                  new MiniMsg({content: '复制成功'}).animation();
                  e.clearSelection();
              });
          }
      };
    </code></pre></div>
</p>
</div></template>

<script>
import AutoComplete from 'ct-adc-auto-complete';
import CodeSnippet from 'common/code-snippet';
export default {
    props: {
    },
    components: {
        AutoComplete,
        CodeSnippet
    },
    data() {
        return {
            list: [],
            searchForm: {
                Name: '',
                Status: '',
                Id: ''
            },
            isSearching: false
        };
    },
    methods: {
        setName(row) {
            this.searchForm.Name = row.Name || '';
        },
        search() {
            // this.$emit('search');
            this.isSearching = true;

            setTimeout(() => {
                this.isSearching = false;
            }, 2e3);
        },
        setList() {
            this.list = [
                {Id: 1, Name: 'item1'},
                {Id: 2, Name: 'item2'},
                {Id: 3, Name: 'item3'}
            ];
        },
        scrollTo(id) {
            $('body,html').scrollTop($(id).offset().top - 55);
        }
    },
    created() {
        this.setList();
    },
    mounted() {
        const {hljs} = window;

        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });

        const clipboard = new window.Clipboard('.clip', {
            text: function(...args) {
                console.log(args);
                return $('.html').text();
            }
        });

        clipboard.on('success', function(e) {
            new MiniMsg({content: '复制成功'}).animation();
            e.clearSelection();
        });
    }
};
</script>

<style lang="css">
</style>

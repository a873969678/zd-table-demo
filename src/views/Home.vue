<template>
  <div class="home">
    <div id="water-mark">
      <div style="width:15%;float:left;" class="left-menu">
        <h3>开发指南</h3>
        <p><a href="#使用方法">使用方法</a></p>
        <p><a href="#初始实例">初始实例</a></p>
        <p><a href="#斑马线与边框">斑马线与边框</a></p>
        <p><a href="#固定列">固定列</a></p>
        <!-- <h3>链接</h3> -->
        <!-- <a><a href="https://github.com/a873969678/linshengji-ui">git仓库地址</a></p> -->
      </div>
      <div style="width:75%;float:left;padding:0 10px" class="right-menu">
        <div>
          <h2 id="使用方法">Table</h2>
          <h3>使用方法</h3>
          <div class="hljs">
            <p>import ZdTable from '@/components/ZdTable.vue'</p>
            <p>import ZdTableHead from '@/components/ZdTableHead.vue'</p>
            <p>import ZdTableBody from '@/components/ZdTableBody.vue'</p>
          </div>
          <h3 id="初始实例">初始实例</h3>
          <div>
            <zd-table :data='data'>
              <!-- 表头 -->
              <zd-table-head label='字段1' />
              <zd-table-head label='字段2' />
               <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body prop='name' :data="scope.row" />
                <zd-table-body prop='name2' :data="scope.row" />
              </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{datareset}}
          </p>

          <h3 id="斑马线与边框">斑马线与边框</h3>
          <p class="tip">传入border striped即可实现斑马线与边框</p>
          <div>
            <zd-table border striped :data='data'>
              <!-- 表头 -->
              <zd-table-head label='字段1' />
              <zd-table-head label='字段2' v-for="(item,index) in 100" :key="index" />

              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body prop='name' :data="scope.row" />
                <zd-table-body prop='name2' :data="scope.row" v-for="(item,index) in 100" :key="index" />
            </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{databmx}}
          </p>

          <h3 id="固定列">固定列</h3>
          <p class="tip">fixed="left"向左固定 fixed="right" 向右固定</p>
          <div>
            <zd-table border striped :data='data'>
              <!-- 表头 -->
              <zd-table-head label='固定left' fixed="left" />
              <zd-table-head label='固定left' fixed="left" />
              <zd-table-head label='字段2' v-for="(item,index) in 100" :key="index" />
              <!-- <zd-table-head label='固定right' fixed="right" /> -->
              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body prop='name' fixed="left" :data="scope.row" />
                <zd-table-body prop='name' fixed="left" :data="scope.row" />
                <zd-table-body prop='name2' :data="scope.row" v-for="(item,index) in 100" :key="index" />
                <!-- <zd-table-body prop='name' fixed="right" :data="scope.row" /> -->
            </template>
            </zd-table>
          </div>
          <!-- <p class="hljs">
            {{databmx}}
          </p> -->

          <h3>Table Param</h3>
          <table class="table">
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>可选值</th>
              <th>默认值</th>
              <th>回调参数</th>
              <th>是否必传</th>
            </tr>
            <tr v-for="(item,index) in paramTable" :key="index">
              <td>{{item.a}}</td>
              <td>{{item.b}}</td>
              <td>{{item.c}}</td>
              <td>{{item.d}}</td>
              <td>{{item.e}}</td>
              <td>{{item.f}}</td>
              <td>{{item.g}}</td>
            </tr>
          </table>

          <h3>zd-table-head Param</h3>
          <table class="table">
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>可选值</th>
              <th>默认值</th>
              <th>回调参数</th>
              <th>是否必传</th>
            </tr>
            <tr v-for="(item,index) in paramTableTh" :key="index">
              <td>{{item.a}}</td>
              <td>{{item.b}}</td>
              <td>{{item.c}}</td>
              <td>{{item.d}}</td>
              <td>{{item.e}}</td>
              <td>{{item.f}}</td>
              <td>{{item.g}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ZdTable from '@/components/ZdTable.vue'
import ZdTableHead from '@/components/ZdTableHead.vue'
import ZdTableBody from '@/components/ZdTableBody.vue'

export default {
  name: 'home',
  components: {
    ZdTable,
    ZdTableHead,
    ZdTableBody
  },
  data () {
    return {
      data: [],
      paramTable: [{
        a: 'border',
        b: '添加边框',
        c: 'Boolean',
        d: 'true/false',
        e: '--',
        f: '--',
        g: '--'
      }, {
        a: 'striped',
        b: '添加斑马线',
        c: 'Boolean',
        d: 'true/false',
        e: '--',
        f: '--',
        g: '--'
      }],
      paramTableTh: [{
        a: 'fixed',
        b: '固定列,向左固定或者向右固定',
        c: 'String',
        d: 'left/right',
        e: '--',
        f: '--',
        g: '--'
      }],
      databmx: `<zd-table border striped :data='data'>
  <zd-table-head label='字段1' />
  <zd-table-head label='字段2' v-for="(item,index) in 100" :key="index" />
  <template #tbody="scope">
    <zd-table-body prop='name' :data="scope.row" />
    <zd-table-body prop='name2' :data="scope.row" v-for="(item,index) in 100" :key="index" />
  </template>
</zd-table>`,
      datareset: `<zd-table :data='data'>
  <zd-table-head label='字段1' />
  <zd-table-head label='字段2' />

  <template #tbody="scope">
    <zd-table-body prop='name' :data="scope.row" />
    <zd-table-body prop='name2' :data="scope.row" />
  </template>
</zd-table>`,
      loading: true
    }
  },
  mounted () {
    this.data = [
      { name: 'test1', name2: 'test2' },
      { name: 'test3', name2: 'test4' },
      { name: 'test5', name2: 'test6' },
      { name: 'test7', name2: 'test8' }
    ]
    // setTimeout(() => {
    //   this.data = [
    //     { name: 'test5', name2: 'test7' },
    //     { name: 'test6', name2: 'test8' }
    //   ]
    // }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.home{
  width:80%;
  position: relative;
  margin: 0 auto;
}
  body{
    width:80%;
    margin: 0 auto;
  }
  #water-mark{
    zoom: 1;
  }
  .left-menu{
    margin-top: 50px;
    height: 100%;
    overflow-x: auto;
    position: fixed;
  }
  .left-menu a{
    display: block;
    height: 40px;
    color: #444;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
    text-decoration: none;
  }
  .left-menu a:hover{
    color: #409eff;
  }
  .right-menu{
    margin-top: 50px;
    color: #1f2f3d;
    margin-left: 15%;
  }
  .hljs {
    line-height: 1.8;
    font-family: Menlo,Monaco,Consolas,Courier,monospace;
    font-size: 12px;
    padding: 18px 24px;
    background-color: #fafafa;
    border: 1px solid #eaeefb;
    margin-bottom: 25px;
    border-radius: 4px;
    -webkit-font-smoothing: auto;
    display: inline-block;
    white-space: pre-wrap;
  }
  p{
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }
  .tip {
    padding: 8px 16px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    margin: 20px 0;
  }
  .table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
  }
  .table td:first-child, .table th:first-child {
    padding-left: 10px;
  }
  .table th {
    text-align: left;
    white-space: nowrap;
    color: #909399;
    font-weight: 400;
  }
  .table th {
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }
  .table td,.table th {
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }
  .table td {
    color: #606266;
  }
  .demo{
    border: 1px solid #ebebeb;
    border-radius: 3px;
    padding: 10px;
  }
  </style>

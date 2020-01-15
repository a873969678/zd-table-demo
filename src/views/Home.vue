<template>
  <div class="home">
    <div id="water-mark">
      <div style="width:15%;float:left;" class="left-menu">
        <h3>开发指南</h3>
        <p><a href="#使用方法">使用方法</a></p>
        <p><a href="#初始实例">初始实例</a></p>
        <p><a href="#斑马线与边框">斑马线与边框</a></p>
        <p><a href="#固定列">固定列</a></p>
        <p><a href="#间隔固定列">间隔固定列</a></p>
        <p><a href="#固定表头">固定表头</a></p>
        <p><a href="#自定义宽度">自定义宽度</a></p>
        <p><a href="#超出省略">超出省略</a></p>
        <h3>链接</h3>
        <p><a href="https://github.com/a873969678/zd-table-demo">git仓库地址</a></p>
        <!-- <h3>链接</h3> -->
        <!-- <a><a href="https://github.com/a873969678/linshengji-ui">git仓库地址</a></p> -->
      </div>
      <div style="width:75%;float:left;padding:0 10px" class="right-menu">
        <div>
          <h2 id="使用方法">Table(如果有什么不会的，请熟读并背诵文档)</h2>
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
              <zd-table-head label='字段2' v-for="(item,index) in 20" :key="index" />
              <zd-table-head label='固定right' fixed="right" />
              <zd-table-head label='固定right' fixed="right" />
              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body prop='name' fixed="left" :data="scope.row" />
                <zd-table-body prop='name' fixed="left" :data="scope.row" />
                <zd-table-body prop='name2' :data="scope.row" v-for="(item,index) in 20" :key="index" />
                <zd-table-body prop='name' fixed="right" :data="scope.row" />
                <zd-table-body prop='name' fixed="right" :data="scope.row" />
            </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{ datajggdl }}
          </p>

          <h3 id="间隔固定列">间隔固定列</h3>
          <p class="tip">在需要的地方加上fixed固定，拖动到指定位置时会自动合并</p>
          <div>
            <zd-table border striped :data='data'>
              <!-- 表头 -->
              <zd-table-head label='固定left' fixed="left" />
              <zd-table-head label='固定left' fixed="left" />
              <zd-table-head label='字段1' v-for="(item,index) in 4" :key="index+'a'" />
              <zd-table-head label='我也是固定' fixed="left" />
              <zd-table-head label='字段2' v-for="(item,index) in 20" :key="index" />
              <zd-table-head label='固定right' fixed="right" />
              <zd-table-head label='固定right' fixed="right" />
              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body prop='name' fixed="left" :data="scope.row" />
                <zd-table-body prop='name' fixed="left" :data="scope.row" />
                <zd-table-body prop='name' :data="scope.row" v-for="(item,index) in 4" :key="index+'a'" />
                <zd-table-body prop='name' fixed="left" :data="scope.row" />
                <zd-table-body prop='name2' :data="scope.row" v-for="(item,index) in 20" :key="index" />
                <zd-table-body prop='name' fixed="right" :data="scope.row" />
                <zd-table-body prop='name' fixed="right" :data="scope.row" />
              </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{datajggdl1}}
          </p>

          <h3 id="固定表头">固定表头</h3>
          <p class="tip">传入height即可固定表头，height为max-height</p>
          <div>
            <zd-table border striped :data='data1' height='300px'>
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
            {{datafixbiaotou}}
          </p>

          <h3 id="自定义宽度">自定义宽度</h3>
          <p class="tip">zd-table-head或者zd-table-body传入width，实际为min-width,内容太少时会自动撑开，内容多时会变成max-width，多余会超出省略，th与td同时设置时，宽度大的会覆盖小的</p>
          <div>
            <zd-table border striped :data='data'>
              <!-- 表头 -->
              <zd-table-head label='字段1' />
              <zd-table-head label='这个是比较长的宽度'/>
              <zd-table-head label='字段K'/>
              <zd-table-head label='字段2' v-for="(item,index) in 100" :key="index" />
              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body prop='name' :data="scope.row" />
                <zd-table-body prop='name3' :data="scope.row" width="200px" />
                <zd-table-body prop='name4' :data="scope.row" />
                <zd-table-body prop='name2' :data="scope.row" v-for="(item,index) in 100" :key="index" />
              </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{datawidth}}
          </p>

          <h3 id="超出省略">超出省略</h3>
          <p class="tip">zd-table-head或者zd-table使用show-overflow-tooltip，必须设置width或者min-width，会超出省略并且显示悬浮内容，需要使用el-tooltip</p>
          <div>
            <zd-table border striped :data='data'>
              <!-- 表头 -->
              <zd-table-head label='字段1' />
              <zd-table-head label='这个是比较长的宽度这个是比较长的宽度这个是比较长的宽度'/>
              <zd-table-head label='这个是比较长的宽度会超出省略这个是比较长的宽度会超出省略' width="200px" show-overflow-tooltip/>
              <zd-table-head label='字段2' v-for="(item,index) in 100" :key="index" />
              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body prop='name' :data="scope.row" />
                <zd-table-body prop='name5' :data="scope.row" width="200px" show-overflow-tooltip />
                <zd-table-body prop='name5' :data="scope.row" width="200px" show-overflow-tooltip />
                <zd-table-body prop='name2' :data="scope.row" v-for="(item,index) in 100" :key="index" />
              </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{datatooltip}}
          </p>

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

          <h3>table-head Param</h3>
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

          <h3>table-body Param</h3>
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
            <tr v-for="(item,index) in paramTableTd" :key="index">
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
      }, {
        a: 'height',
        b: '最大高度，会固定表头',
        c: 'String',
        d: 'px/百分比',
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
      }, {
        a: 'width',
        b: 'th的最小宽度，内容太少时会自动撑开，内容多时会变成max-width',
        c: 'String',
        d: 'px/百分比',
        e: '--',
        f: '--',
        g: '--'
      }],
      paramTableTd: [{
        a: 'fixed',
        b: '固定列，向左固定或者向右固定',
        c: 'String',
        d: 'left/right',
        e: '--',
        f: '--',
        g: '--'
      }, {
        a: 'width',
        b: 'td的最小宽度，内容太少时会自动撑开，内容多时会变成max-width，并且会换行',
        c: 'String',
        d: 'px/百分比',
        e: '--',
        f: '--',
        g: '--'
      }, {
        a: 'show-overflow-tooltip',
        b: '超出省略，需要配合width或者min-width',
        c: 'Boolean',
        d: 'true/false',
        e: 'false',
        f: '--',
        g: '--'
      }],
      databmx: `<zd-table border striped :data='data'>
  <!-- 表头 -->
  <zd-table-head label='字段1' />
  <zd-table-head label='字段2' v-for="(item,index) in 100" :key="index" />
  <!-- 主体 -->
  <template #tbody="scope">
    <zd-table-body prop='name' :data="scope.row" />
    <zd-table-body prop='name2' :data="scope.row" v-for="(item,index) in 100" :key="index" />
  </template>
</zd-table>`,
      datareset: `<zd-table :data='data'>
  <!-- 表头 -->
  <zd-table-head label='字段1' />
  <zd-table-head label='字段2' />
  <!-- 主体 -->
  <template #tbody="scope">
    <zd-table-body prop='name' :data="scope.row" />
    <zd-table-body prop='name2' :data="scope.row" />
  </template>
</zd-table>`,
      datajggdl: `<zd-table border striped :data='data'>
  <!-- 表头 -->
  <zd-table-head label='固定left' fixed="left" />
  <zd-table-head label='固定left' fixed="left" />
  <zd-table-head label='字段2' v-for="(item,index) in 20" :key="index" />
  <zd-table-head label='固定right' fixed="right" />
  <zd-table-head label='固定right' fixed="right" />
  <!-- 主体 -->
  <template #tbody="scope">
    <zd-table-body prop='name' fixed="left" :data="scope.row" />
    <zd-table-body prop='name' fixed="left" :data="scope.row" />
    <zd-table-body prop='name2' :data="scope.row" v-for="(item,index) in 20" :key="index" />
    <zd-table-body prop='name' fixed="right" :data="scope.row" />
    <zd-table-body prop='name' fixed="right" :data="scope.row" />
  </template>
</zd-table>`,
      datajggdl1: `<zd-table border striped :data='data'>
  <!-- 表头 -->
  <zd-table-head label='固定left' fixed="left" />
  <zd-table-head label='固定left' fixed="left" />
  <zd-table-head label='字段1' v-for="(item,index) in 4" :key="index+'a'" />
  <zd-table-head label='我也是固定' fixed="left" />
  <zd-table-head label='字段2' v-for="(item,index) in 20" :key="index" />
  <zd-table-head label='固定right' fixed="right" />
  <zd-table-head label='固定right' fixed="right" />
  <!-- 主体 -->
  <template #tbody="scope">
    <zd-table-body prop='name' fixed="left" :data="scope.row" />
    <zd-table-body prop='name' fixed="left" :data="scope.row" />
    <zd-table-body prop='name' :data="scope.row" v-for="(item,index) in 4" :key="index+'a'" />
    <zd-table-body prop='name' fixed="left" :data="scope.row" />
    <zd-table-body prop='name2' :data="scope.row" v-for="(item,index) in 20" :key="index" />
    <zd-table-body prop='name' fixed="right" :data="scope.row" />
    <zd-table-body prop='name' fixed="right" :data="scope.row" />
  </template>
</zd-table>`,
      datafixbiaotou: `<zd-table border striped :data='data' :height='300px'>
  <zd-table-head label='字段1' />
  <zd-table-head label='字段2' />
  <template #tbody="scope">
    <zd-table-body prop='name' :data="scope.row" />
    <zd-table-body prop='name2' :data="scope.row" />
  </template>
</zd-table>`,
      datawidth: `<zd-table border striped :data='data'>
  <!-- 表头 -->
  <zd-table-head label='字段1' />
  <zd-table-head label='这个是比较长的宽度'/>
  <zd-table-head label='字段K'/>
  <zd-table-head label='字段2' v-for="(item,index) in 100" :key="index" />
  <!-- 主体 -->
  <template #tbody="scope">
    <zd-table-body prop='name' :data="scope.row" />
    <zd-table-body prop='name3' :data="scope.row" width="200px" />
    <zd-table-body prop='name4' :data="scope.row" />
    <zd-table-body prop='name2' :data="scope.row" v-for="(item,index) in 100" :key="index" />
  </template>
</zd-table>`,
      datatooltip: `<zd-table border striped :data='data'>
  <!-- 表头 -->
  <zd-table-head label='字段1' />
  <zd-table-head label='这个是比较长的宽度这个是比较长的宽度这个是比较长的宽度'/>
  <zd-table-head label='这个是比较长的宽度会超出省略这个是比较长的宽度会超出省略' width="200px" show-overflow-tooltip/>
  <zd-table-head label='字段2' v-for="(item,index) in 100" :key="index" />
  <!-- 主体 -->
  <template #tbody="scope">
    <zd-table-body prop='name' :data="scope.row" />
    <zd-table-body prop='name5' :data="scope.row" width="200px" show-overflow-tooltip />
    <zd-table-body prop='name5' :data="scope.row" width="200px" show-overflow-tooltip />
    <zd-table-body prop='name2' :data="scope.row" v-for="(item,index) in 100" :key="index" />
  </template>
</zd-table>`,
      loading: true,
      data1: []
    }
  },
  mounted () {
    this.data = [
      { name: 'test1', name2: 'test2', name3: '如果th设置了宽度，那么td不会跟着内容去撑，达到设置的宽度后会换行', name4: '因为我没有设置宽度，所以我跟着内容自动撑开了，而且不换行', name5: '我的内容比较多，所以超出省略悬浮上去会有悬浮框显示所有内容呢' },
      { name: 'test3', name2: 'test4', name3: '', name5: '内容比较少不用悬浮' },
      { name: 'test5', name2: 'test6', name3: '' },
      { name: 'test7', name2: 'test8', name3: '' }
    ]
    this.data1 = []
    for (let i = 0; i < 100; i++) {
      this.data1.push({ name: 'test1', name2: 'test2' })
    }
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

<template>
  <div class="home">
    <div id="water-mark">
      <div style="float:left;" class="left-menu">
        <h3>开发指南</h3>
        <p><a href="#使用方法">使用方法</a></p>
        <p><a href="#初始实例">初始实例</a></p>
        <p><a href="#斑马线与边框">斑马线与边框</a></p>
        <p><a href="#固定列">固定列</a></p>
        <p><a href="#间隔固定列">间隔固定列</a></p>
        <p><a href="#固定表头">固定表头</a></p>
        <p><a href="#自定义宽度">自定义宽度</a></p>
        <p><a href="#超出省略">超出省略</a></p>
        <p><a href="#合计">合计</a></p>
        <p><a href="#排序">排序</a></p>
        <p><a href="#动态列宽">动态列宽</a></p>
        <h3>方法</h3>
        <p><a href="#获取某一行数据">获取某一行数据</a></p>
        <p><a href="#设置某一行样式">设置某一行样式</a></p>
        <h3>链接</h3>
        <p><a href="https://github.com/a873969678/zd-table-demo">git仓库地址</a></p>
        <!-- <h3>链接</h3> -->
        <!-- <a><a href="https://github.com/a873969678/linshengji-ui">git仓库地址</a></p> -->
      </div>
      <div style="width:75%;float:right;" class="right-menu">
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
            <zd-table :data="data">
              <!-- 表头 -->
              <zd-table-head label="字段1" />
              <zd-table-head label="字段2" />
              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body prop="name" :data="scope.row" />
                <zd-table-body prop="name2" :data="scope.row" />
              </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{ datareset }}
          </p>

          <h3 id="斑马线与边框">斑马线与边框</h3>
          <p class="tip">传入border striped即可实现斑马线与边框</p>
          <div>
            <zd-table border striped :data="data">
              <!-- 表头 -->
              <zd-table-head label="字段1" />
              <zd-table-head v-for="(item,index) in 100" :key="index" label="字段2" />

              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body prop="name" :data="scope.row" />
                <zd-table-body v-for="(item,index) in 100" :key="index" prop="name2" :data="scope.row" />
              </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{ databmx }}
          </p>

          <h3 id="固定列">固定列</h3>
          <p class="tip">在table指定使用fixed功能，fixed="left"向左固定 fixed="right" 向右固定</p>
          <div>
            <zd-table border striped :data="data">
              <!-- 表头 -->
              <zd-table-head label="固定left" fixed="left" />
              <zd-table-head label="固定left" fixed="left" />
              <zd-table-head v-for="(item,index) in 20" :key="index" label="字段2" />
              <zd-table-head label="固定right" fixed="right" />
              <zd-table-head label="固定right" fixed="right" />
              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body prop="name" fixed="left" :data="scope.row" />
                <zd-table-body prop="name" fixed="left" :data="scope.row" />
                <zd-table-body v-for="(item,index) in 20" :key="index" prop="name2" :data="scope.row" />
                <zd-table-body prop="name" fixed="right" :data="scope.row" />
                <zd-table-body prop="name" fixed="right" :data="scope.row" />
              </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{ datajggdl }}
          </p>

          <h3 id="间隔固定列">间隔固定列</h3>
          <p class="tip">在table指定使用fixed功能，在需要的地方加上fixed固定，拖动到指定位置时会自动合并</p>
          <div>
            <zd-table border striped :data="data">
              <!-- 表头 -->
              <zd-table-head label="固定left" fixed="left" />
              <zd-table-head label="固定left" fixed="left" />
              <zd-table-head v-for="(item,index) in 4" :key="index+'a'" label="字段1" />
              <zd-table-head label="我也是固定" fixed="left" />
              <zd-table-head v-for="(item,index) in 20" :key="index" label="字段2" />
              <zd-table-head label="固定right" fixed="right" />
              <zd-table-head label="固定right" fixed="right" />
              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body prop="name" fixed="left" :data="scope.row" />
                <zd-table-body prop="name" fixed="left" :data="scope.row" />
                <zd-table-body v-for="(item,index) in 4" :key="index+'a'" prop="name" :data="scope.row" />
                <zd-table-body prop="name" fixed="left" :data="scope.row" />
                <zd-table-body v-for="(item,index) in 20" :key="index" prop="name2" :data="scope.row" />
                <zd-table-body prop="name" fixed="right" :data="scope.row" />
                <zd-table-body prop="name" fixed="right" :data="scope.row" />
              </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{ datajggdl1 }}
          </p>

          <h3 id="固定高度">固定高度</h3>
          <p class="tip">传入height即可固定表头，height为max-height</p>
          <div>
            <zd-table border striped :data="data1" height="300px">
              <!-- 表头 -->
              <zd-table-head label="字段1" />
              <zd-table-head label="字段2" />

              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body prop="name" :data="scope.row" />
                <zd-table-body prop="name2" :data="scope.row" />
              </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{ datafixbiaotou }}
          </p>

          <h3 id="自定义宽度">自定义宽度</h3>
          <p class="tip">zd-table-head或者zd-table-body传入width，实际为min-width,内容太少时会自动撑开，内容多时会变成max-width，多余会超出省略，th与td同时设置时，宽度大的会覆盖小的</p>
          <div>
            <zd-table border striped :data="data">
              <!-- 表头 -->
              <zd-table-head label="字段1" />
              <zd-table-head label="这个是比较长的宽度" width="200px" />
              <zd-table-head label="字段K" />
              <zd-table-head v-for="(item,index) in 100" :key="index" label="字段2" />
              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body prop="name" :data="scope.row" />
                <zd-table-body prop="name3" :data="scope.row" />
                <zd-table-body prop="name4" :data="scope.row" />
                <zd-table-body v-for="(item,index) in 100" :key="index" prop="name2" :data="scope.row" />
              </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{ datawidth }}
          </p>

          <h3 id="超出省略">超出省略</h3>
          <p class="tip">zd-table-head或者zd-table使用show-overflow-tooltip，必须设置width或者min-width，会超出省略并且显示悬浮内容，需要使用el-tooltip</p>
          <div>
            <zd-table border striped :data="data">
              <!-- 表头 -->
              <zd-table-head label="字段1" />
              <zd-table-head label="这个是比较长的宽度这个是比较长的宽度这个是比较长的宽度" />
              <zd-table-head label="这个是比较长的宽度会超出省略这个是比较长的宽度会超出省略" width="200px" show-overflow-tooltip />
              <zd-table-head v-for="(item,index) in 100" :key="index" label="字段2" />
              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body prop="name" :data="scope.row" />
                <zd-table-body prop="name5" :data="scope.row" width="200px" show-overflow-tooltip />
                <zd-table-body prop="name5" :data="scope.row" width="200px" show-overflow-tooltip />
                <zd-table-body v-for="(item,index) in 100" :key="index" prop="name2" :data="scope.row" />
              </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{ datatooltip }}
          </p>

          <h3 id="合计">合计</h3>
          <p class="tip">使用插槽sumAppend与sumPrepend可以设置合计列位置，移动端ios尾部合集不能正常固定，如果移动端需要，请使用头部合计</p>
          <div>
            <zd-table border striped :data="data1" height="300px">
              <!-- 表头 -->
              <zd-table-head label="字段1" fixed="left" />
              <zd-table-head v-for="(item,index) in 50" :key="index" label="字段2" />

              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body prop="name" fixed="left" :data="scope.row" />
                <zd-table-body v-for="(item,index) in 50" :key="index" prop="name2" :data="scope.row" />
              </template>
              <!-- 头部合计 -->
              <template #sumPrepend>
                <zd-table-body fixed="left">合计头部</zd-table-body>
                <zd-table-body v-for="(item,index) in 50" :key="index"> 1 </zd-table-body>
              </template>
              <!-- 尾部合计 -->
              <template #sumAppend>
                <zd-table-body fixed="left">合计尾部</zd-table-body>
                <zd-table-body v-for="(item,index) in 50" :key="index"> 1 </zd-table-body>
              </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{ datam3 }}
          </p>

          <h3 id="排序">排序</h3>
          <p class="tip">传入sortable指定排序 :sort-method="sortMethod"接收排序方法</p>
          <div>
            <zd-table border striped :data="data5" height="300px">
              <!-- 表头 -->
              <zd-table-head label="字段1" />
              <zd-table-head label="排序" sortable :sort-method="sortMethod" />
              <zd-table-head label="排序2" sortable :sort-method="sortMethod" />
              <zd-table-head v-for="(item,index) in 6" :key="index" label="字段2" />

              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body prop="name" :data="scope.row" />
                <zd-table-body prop="name2" :data="scope.row" />
                <zd-table-body prop="name2" :data="scope.row" />
                <zd-table-body v-for="(item,index) in 6" :key="index" prop="name2" :data="scope.row" />
              </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{ datam5 }}
          </p>

          <h3 id="动态列宽">动态列宽</h3>
          <p class="tip">指定header-dragend可拖拽列宽,鼠标悬浮在表头的边框中，可以拖拽</p>
          <div>
            <zd-table border striped :data="data" header-dragend>
              <!-- 表头 -->
              <zd-table-head label="字段1" />
              <zd-table-head label="这个是比较长的宽度这个是比较长的宽度这个是比较长的宽度" />
              <zd-table-head label="这个是比较长的宽度会超出省略这个是比较长的宽度会超出省略" width="200px" show-overflow-tooltip />
              <zd-table-head v-for="(item,index) in 100" :key="index" label="字段2" />
              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body prop="name" :data="scope.row" />
                <zd-table-body prop="name5" :data="scope.row" width="200px" show-overflow-tooltip />
                <zd-table-body prop="name5" :data="scope.row" width="200px" show-overflow-tooltip />
                <zd-table-body v-for="(item,index) in 100" :key="index" prop="name2" :data="scope.row" />
              </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{ datam6 }}
          </p>

          <h3 id="获取某一行数据">获取获取某一行数据</h3>
          <p class="tip">设置row-click点击方法获取某一行数据，row-dblclick双击获取数据，设置cell-mouse-enter与cell-mouse-leave获取移入移出某一行数据</p>
          <div>
            <zd-table border striped :data="data" :row-click="rowClick" :cell-mouse-enter="cellMouseEnter" :cell-mouse-leave="cellMouseLeave" :row-dblclick="rowDblclick">
              <!-- 表头 -->
              <zd-table-head label="序号" />
              <zd-table-head label="字段1" />
              <zd-table-head v-for="(item,index) in 100" :key="index" label="字段2" />

              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body> {{ scope.$index }} </zd-table-body>
                <zd-table-body prop="name" :data="scope.row" />
                <zd-table-body v-for="(item,index) in 100" :key="index" prop="name2" :data="scope.row" />
              </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{ datam1 }}
          </p>

          <h3 id="设置某一行样式">设置某一行样式</h3>
          <p class="tip">指定 Table 组件的 row-class-name 属性来为 Table 中的某一行添加 class</p>
          <div>
            <zd-table border striped :data="data" :row-class-name="rowClassName">
              <!-- 表头 -->
              <zd-table-head label="序号" />
              <zd-table-head label="字段1" />
              <zd-table-head v-for="(item,index) in 100" :key="index" label="字段2" />

              <!-- 主体 -->
              <template #tbody="scope">
                <zd-table-body> {{ scope.$index }} </zd-table-body>
                <zd-table-body prop="name" :data="scope.row" />
                <zd-table-body v-for="(item,index) in 100" :key="index" prop="name2" :data="scope.row" />
              </template>
            </zd-table>
          </div>
          <p class="hljs">
            {{ datam2 }}
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
              <td>{{ item.a }}</td>
              <td>{{ item.b }}</td>
              <td>{{ item.c }}</td>
              <td>{{ item.d }}</td>
              <td>{{ item.e }}</td>
              <td>{{ item.f }}</td>
              <td>{{ item.g }}</td>
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
              <td>{{ item.a }}</td>
              <td>{{ item.b }}</td>
              <td>{{ item.c }}</td>
              <td>{{ item.d }}</td>
              <td>{{ item.e }}</td>
              <td>{{ item.f }}</td>
              <td>{{ item.g }}</td>
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
              <td>{{ item.a }}</td>
              <td>{{ item.b }}</td>
              <td>{{ item.c }}</td>
              <td>{{ item.d }}</td>
              <td>{{ item.e }}</td>
              <td>{{ item.f }}</td>
              <td>{{ item.g }}</td>
            </tr>
          </table>

          <h3>table Methods</h3>
          <table class="table">
            <tr>
              <th>方法名</th>
              <th>说明</th>
              <th>类型</th>
              <th>回调参数</th>
              <th>参数说明</th>
            </tr>
            <tr v-for="(item,index) in tableMethods" :key="index">
              <td>{{ item.a }}</td>
              <td>{{ item.b }}</td>
              <td>{{ item.c }}</td>
              <td>{{ item.d }}</td>
              <td>{{ item.e }}</td>
            </tr>
          </table>

          <h3>tHead Methods</h3>
          <table class="table">
            <tr>
              <th>方法名</th>
              <th>说明</th>
              <th>类型</th>
              <th>回调参数</th>
              <th>参数说明</th>
            </tr>
            <tr v-for="(item,index) in theadMethods" :key="index">
              <td>{{ item.a }}</td>
              <td>{{ item.b }}</td>
              <td>{{ item.c }}</td>
              <td>{{ item.d }}</td>
              <td>{{ item.e }}</td>
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
  name: 'Home',
  components: {
    ZdTable,
    ZdTableHead,
    ZdTableBody
  },
  data() {
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
      tableMethods: [{
        a: 'rowClick',
        b: '点击某一行触发',
        c: 'Function',
        d: 'rowIndex，rowData，event',
        e: 'rowIndex下标，rowData 整行数据，event节点信息'
      }, {
        a: 'cellMouseEnter',
        b: '鼠标进入某一行触发',
        c: 'Function',
        d: 'rowIndex，rowData，event',
        e: 'rowIndex下标，rowData 整行数据，event节点信息'
      }, {
        a: 'cellMouseLeave',
        b: '鼠标离开某一行触发',
        c: 'Function',
        d: 'rowIndex，rowData，event',
        e: 'rowIndex下标，rowData 整行数据，event节点信息'
      }, {
        a: 'rowClassName',
        b: '设置某一行样式',
        c: 'Function',
        d: 'rowIndex，rowData',
        e: 'rowIndex下标，rowData 整行数据'
      }],
      theadMethods: [{
        a: 'sortMethod',
        b: '排序方法回调，需要结合sortable',
        c: 'Function',
        d: 'type，label',
        e: 'type升序ascending或者降序descending，label那一列排序'
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
      }, {
        a: 'show-overflow-tooltip',
        b: '超出省略，需要配合width或者min-width',
        c: 'Boolean',
        d: 'true/false',
        e: 'false',
        f: '--',
        g: '--'
      }, {
        a: 'sortable',
        b: '是否需要排序',
        c: 'Boolean',
        d: 'true/false',
        e: 'false',
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
      datam1: `<zd-table border striped :data='data' :row-click='rowClick' :row-dblclick="rowDblclick" :cell-mouse-enter="cellMouseEnter" :cell-mouse-leave="cellMouseLeave" >
  <!-- 表头 -->
  <zd-table-head label='序号' />
  <zd-table-head label='字段1' />
  <zd-table-head label='字段2' v-for="(item,index) in 100" :key="index" />
  <!-- 主体 -->
  <template #tbody="scope">
    <zd-table-body> {{scope.$index}} </zd-table-body>
    <zd-table-body prop='name' :data="scope.row" />
    <zd-table-body prop='name2' :data="scope.row" v-for="(item,index) in 100" :key="index" />
  </template>
</zd-table>

rowClick (rowIndex, rowData, event) {
  console.log(rowIndex, rowData, event)
},
rowDblclick(rowIndex, rowData, event) {
  console.log(rowIndex, rowData, event, '双击')
},
cellMouseEnter (rowIndex, rowData, event) {
  console.log(rowIndex, rowData, event)
},
cellMouseLeave (rowIndex, rowData, event) {
  console.log(rowIndex, rowData, event)
}`,
      datam2: `<zd-table border striped :data='data' :row-class-name='rowClassName' >
  <!-- 表头 -->
  <zd-table-head label='序号' />
  <zd-table-head label='字段1' />
  <zd-table-head label='字段2' v-for="(item,index) in 100" :key="index" />
  <!-- 主体 -->
  <template #tbody="scope">
    <zd-table-body> {{scope.$index}} </zd-table-body>
    <zd-table-body prop='name' :data="scope.row" />
    <zd-table-body prop='name2' :data="scope.row" v-for="(item,index) in 100" :key="index" />
  </template>
</zd-table>

rowClassName (rowIndex, rowData) {
  if (rowIndex === 2) {
    return 'light'
  }
}`,
      datam3: `<zd-table border striped :data="data1" height="300px">
  <!-- 表头 -->
  <zd-table-head label="字段1" fixed="left" />
  <zd-table-head v-for="(item,index) in 50" :key="index" label="字段2" />

  <!-- 主体 -->
  <template #tbody="scope">
    <zd-table-body prop="name" fixed="left" :data="scope.row" />
    <zd-table-body v-for="(item,index) in 50" :key="index" prop="name2" :data="scope.row" />
  </template>
  <!-- 头部合计 -->
  <template #sumPrepend>
    <zd-table-body fixed="left">合计头部</zd-table-body>
    <zd-table-body v-for="(item,index) in 50" :key="index"> 1 </zd-table-body>
  </template>
  <!-- 尾部合计 -->
  <template #sumAppend>
    <zd-table-body fixed="left">合计尾部</zd-table-body>
    <zd-table-body v-for="(item,index) in 50" :key="index"> 1 </zd-table-body>
  </template>
</zd-table>`,
      datam5: `<zd-table border striped :data="data5" height="300px">
  <!-- 表头 -->
  <zd-table-head label="字段1" />
  <zd-table-head label="排序" sortable :sort-method="sortMethod" />
  <zd-table-head label="排序2" sortable :sort-method="sortMethod" />
  <zd-table-head v-for="(item,index) in 6" :key="index" label="字段2" />

  <!-- 主体 -->
  <template #tbody="scope">
    <zd-table-body prop="name" :data="scope.row" />
    <zd-table-body prop="name2" :data="scope.row" />
    <zd-table-body prop="name2" :data="scope.row" />
    <zd-table-body v-for="(item,index) in 6" :key="index" prop="name2" :data="scope.row" />
  </template>
</zd-table>


sortMethod(type, label) {
  console.log('升序或者降序：' + type, '那一行排序 ：' + label)
  this.data5.sort((a, b) => {
    if (type === 'ascending') {
      // 降序
      return a['name2'] > b['name2'] ? 1 : -1
    } else {
      // 升序
      return a['name2'] < b['name2'] ? 1 : -1
    }
  })
}`,
      datam6: `<zd-table border striped :data="data" header-dragend>
<!-- 表头 -->
<zd-table-head label="字段1" />
<zd-table-head label="这个是比较长的宽度这个是比较长的宽度这个是比较长的宽度" />
<zd-table-head label="这个是比较长的宽度会超出省略这个是比较长的宽度会超出省略" width="200px" show-overflow-tooltip />
<zd-table-head v-for="(item,index) in 100" :key="index" label="字段2" />
<!-- 主体 -->
<template #tbody="scope">
  <zd-table-body prop="name" :data="scope.row" />
  <zd-table-body prop="name5" :data="scope.row" width="200px" show-overflow-tooltip />
  <zd-table-body prop="name5" :data="scope.row" width="200px" show-overflow-tooltip />
  <zd-table-body v-for="(item,index) in 100" :key="index" prop="name2" :data="scope.row" />
</template>
</zd-table>`,
      loading: true,
      data1: [],
      data5: []
    }
  },
  mounted() {
    this.data = [
      { name: 'test1', name2: 'test2', name3: '如果th设置了宽度，那么td不会跟着内容去撑，达到设置的宽度后会换行', name4: '因为我没有设置宽度，所以我跟着内容自动撑开了，而且不换行', name5: '我的内容比较多，所以超出省略悬浮上去会有悬浮框显示所有内容呢' },
      { name: 'test3', name2: 'test4', name3: '', name5: '内容比较少不用悬浮' },
      { name: 'test5', name2: 'test6', name3: '' },
      { name: 'test7', name2: 'test8', name3: '' }
    ]
    this.data1 = []
    for (let i = 0; i < 100; i++) {
      this.data1.push({ name: 'test1', name2: Math.ceil(Math.random(100) * 100) })
    }
    this.data5 = []
    for (let i = 0; i < 20; i++) {
      this.data5.push({ name: 'test1', name2: Math.ceil(Math.random(100) * 100) })
    }
    // setTimeout(() => {
    //   this.data = [
    //     { name: 'test5', name2: 'test7' },
    //     { name: 'test6', name2: 'test8' }
    //   ]
    // }, 2000)
  },
  methods: {
    rowClick(rowIndex, rowData, event) {
      console.log(rowIndex, rowData, event, '单击')
    },
    cellMouseEnter(rowIndex, rowData, event) {
      console.log(rowIndex, rowData, event)
    },
    cellMouseLeave(rowIndex, rowData, event) {
      console.log(rowIndex, rowData, event)
    },
    rowDblclick(rowIndex, rowData, event) {
      console.log(rowIndex, rowData, event, '双击')
    },
    rowClassName(rowIndex, rowData) {
      if (rowIndex === 2) {
        return 'light'
      }
    },
    sortMethod(type, label) {
      console.log('升序或者降序：' + type, '那一行排序 ：' + label)
      this.data5.sort((a, b) => {
        if (type === 'ascending') {
          // 降序
          return a['name2'] > b['name2'] ? 1 : -1
        } else {
          // 升序
          return a['name2'] < b['name2'] ? 1 : -1
        }
      })
    }
  }
}
</script>

<style lang="scss">
.home{
  width:100%;
  position: relative;
  margin: 0 auto;
  overflow: auto;
}
.light{
  background: oldlace!important;
}
  body{
    width:80%;
    margin: 0 auto;
  }
  #water-mark{
    zoom: 1;
  }
  .left-menu{
    width: 15%;
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

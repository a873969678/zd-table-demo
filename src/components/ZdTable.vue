<template>
  <div :class="{'zd-table':true, [className]:true ,'zd-table-border-div': border}" :style="{'max-height':height}">
    <!-- zd-table-striped 间隔色 zd-table-border 边框 -->
    <table :class="{'zd-table-wrapper':true,'zd-table-striped':striped,'zd-table-border':border}">
      <thead>
        <tr class="zd-table-cloumn-tr zd-table-cloumn-tr-th">
          <slot />
        </tr>
        <tr class="zd-table-cloumn-tr zd-table-cloumn-tr-th sum-cloumn sum-cloumn-prepend">
          <!-- 尾部合计 -->
          <slot name="sumPrepend" />
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index" :class="{'zd-table-cloumn-tr':true, [rowClassName(index, item) || '']:true}" @dblclick.stop="rowDblclick(index, item, $event)" @click.stop="rowClick(index, item, $event)" @mouseenter="cellMouseEnter(index, item, $event)" @mouseleave="cellMouseLeave(index, item, $event)">
          <slot name="tbody" :row="item" :$index="index" />
        </tr>
        <tr class="zd-table-cloumn-tr sum-cloumn sum-cloumn-append">
          <!-- 头部合计 -->
          <slot name="sumAppend" />
        </tr>
      </tbody>
      <tbody v-if="data.length === 0">
        <tr>
          <td class="fixed-left-th" colspan="20">暂无数据</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { setFixedWidthHead } from './table'
export default {
  name: 'ZdTable',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    height: {
      type: String,
      default: () => ''
    },
    striped: {
      type: Boolean,
      default: false // 是否间隔色
    },
    border: {
      type: Boolean,
      default: false // 是否边框
    },
    rowClick: {
      type: Function, // 点击某一行
      default: () => {}
    },
    rowDblclick: {
      type: Function, // 双击某一行
      default: () => {}
    },
    cellMouseEnter: {
      type: Function, // 鼠标移入
      default: () => {}
    },
    cellMouseLeave: {
      type: Function, // 鼠标移出
      default: () => {}
    },
    rowClassName: {
      type: Function, // 设置每一行的样式
      default: () => { return '' }
    }
  },
  data() {
    return {
      className: (new Date().getTime()).toString() // 独一无二类名，防止一个页面多个table冲突
    }
  },
  watch: {
    data(newValue, oldValue) {
      this.data = newValue
    }
  },
  mounted() {
    const domTable = document.getElementsByClassName(this.className)[0]
    // 首次判断右边是否固定并且有滚动条
    if (domTable.clientWidth !== domTable.scrollWidth - domTable.scrollLeft) {
      setTimeout(() => {
        this.addOrRemoveClass(domTable, 'add', 'right')
      }, 200)
    }
    domTable.addEventListener('scroll', this.getScroll)
    // 固定，多表表头与合计的位置
    setFixedWidthHead(this.className)
  },
  methods: {
    getScroll(e) {
      // 滚动条事件 固定列添加阴影效果
      if (e.target.scrollLeft > 0) {
        this.addOrRemoveClass(e.target, 'add')
      } else {
        this.addOrRemoveClass(e.target, 'remove')
      }
      if (e.target.clientWidth === e.target.scrollWidth - e.target.scrollLeft) {
        // 到达最右边取消阴影
        this.addOrRemoveClass(e.target, 'remove', 'right')
      } else {
        // 未到达最右边增加阴影
        this.addOrRemoveClass(e.target, 'add', 'right')
      }
    },
    addOrRemoveClass(e, type, fixed = 'left') {
      // 删除或者添加节点
      const tr = e.getElementsByClassName('zd-table-cloumn-tr')
      for (let i = 0; i < tr.length; i++) {
        const fixedLeftTh = tr[i].getElementsByClassName('fixed-' + fixed + '-th')// 只加在每一个tr的固定列最后一个
        const fixedLeftTd = tr[i].getElementsByClassName('fixed-' + fixed + '-td')// 只加在每一个td的固定列最后一个
        if (fixedLeftTh.length > 0) {
          const num = fixed === 'left' ? fixedLeftTh.length - 1 : 0
          if (type === 'add') {
            fixedLeftTh[num].classList.add('fixed-' + fixed + '-shadow')
          } else if (type === 'remove') {
            fixedLeftTh[num].classList.remove('fixed-' + fixed + '-shadow')
          }
        }
        if (fixedLeftTd.length > 0) {
          const num = fixed === 'left' ? fixedLeftTd.length - 1 : 0
          if (type === 'add') {
            fixedLeftTd[num].classList.add('fixed-' + fixed + '-shadow')
          } else if (type === 'remove') {
            fixedLeftTd[num].classList.remove('fixed-' + fixed + '-shadow')
          }
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.zd-table {
  position: relative;
  overflow: auto;
  // max-height: 300px;
  border-bottom: 1px solid #EBEEF5;
  table {
    border-collapse: collapse;
    position: relative;
    min-width: 100%;
    th,
    td {
      background: inherit;
      min-width: 50px;
      padding: 5px;
      text-align: center;
      padding: 10px 10px;
    }
    .white-space-nowrap{
      white-space: nowrap;
    }

    th:first-child,
    td:first-child {
      border-left: 0;
    }
    th:last-child,
    td:last-child {
      border-right: 0;
    }
    tr {
      border-left: 0;
      border-bottom: 1px solid #EBEEF5;
    }
    tr:hover td{
      background: rgb(245,247,250)
    }
    thead {
      color: #909399;
      font-weight: 500;
      tr{
        background-color: rgb(245, 247, 250);
      }
      tr:first-child{
        th{
          border-top: 0;
          top: 0px;
        }
      }
      th {
        color: #909399;
        position: sticky;
        font-size: 13px;
        position: -webkit-sticky;
        z-index: 2;

        .cell {
          display: inline-block;
          box-sizing: border-box;
          position: relative;
          vertical-align: middle;
          width: 100%;
        }
      }
    }

    tbody {
      position: relative;
      tr{
        background: #fff;
      }
      td {
        color:#606266;
        font-size: 12px;
      }
    }
    .sum-cloumn{
      background: oldlace!important;
    }
    .sum-cloumn-prepend td{
      position: sticky;
      position: -webkit-sticky;
      font-size: 12px;
      z-index: 2;
    }

    .sum-cloumn-append td{
      position: sticky;
      position: -webkit-sticky;
      bottom: 0px;
      font-size: 12px;
      z-index: 5;
    }

    .fixed-left-td,
    .fixed-left-th {
      position: sticky;
      position: -webkit-sticky;
      left: 0px;
    }

    .fixed-left-td,
    .fixed-right-td {
      z-index: 3!important;
    }

    .fixed-left-th,
    .fixed-right-th {
      z-index: 4!important;
    }
    .sum-cloumn-prepend .fixed-left-td{
      z-index: 4!important;
    }
    .sum-cloumn-append .fixed-left-td{
      z-index: 9!important;
    }

    .fixed-right-td,
    .fixed-right-th {
      position: sticky;
      position: -webkit-sticky;
      right: 0px;
    }
    .fixed-left-shadow{
      // 固定列悬浮阴影
      box-shadow: 6px 0 5px -2px rgba(0,0,0,.12); //右边阴影
    }
    .fixed-right-shadow{
       // 固定列悬浮阴影
      box-shadow: -6px 0 5px -2px rgba(0,0,0,.12); //右边阴影
    }

  }
  .zd-table-striped{
    // 间隔色
    tbody{
      tr:nth-child(odd){
        background: rgb(245,247,250);
      }
    }
  }
  .zd-table-border{
    th,td{
      border: 1px solid #EBEEF5;
    }
  }
  .showOverflowTooltip{
    display:inline-block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
  }
}
.zd-table-border-div{
  border-left:1px solid #EBEEF5;
  border-top:1px solid #EBEEF5;
  border-right:1px solid #EBEEF5;
}

// @media (max-height: 1000px) and (max-width: 1000px) {
//   // 横屏微调
//   .sum-cloumn-append td {
//       bottom: 50px;
//   }
// }

</style>

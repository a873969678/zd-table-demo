<template>
  <div id="zd-table" :ref="'zdZable'+className" :class="{'zd-table':true, [className]:true ,'zd-table-border-div': border}" :style="{'max-height':height,'height':height}" @scroll="handleScroll">
    <!-- zd-table-striped 间隔色 zd-table-border 边框 -->
    <table
      :class="{'zd-table-wrapper':true,['zd-table-wrapper'+className]: true, 'zd-table-striped':striped,'zd-table-border':border}"
      style="position:relative"
      :style="{
        height: contentHeight
      }"
    >
      <thead>
        <tr class="zd-table-cloumn-tr zd-table-cloumn-tr-th">
          <slot />
        </tr>
        <!-- // 多级表头 -->
        <tr v-for="index in multisHead -1" :key="index" class="zd-table-cloumn-tr zd-table-cloumn-tr-th">
          <slot name="multisTh" />
        </tr>
        <tr class="zd-table-cloumn-tr zd-table-cloumn-tr-th sum-cloumn sum-cloumn-prepend">
          <!-- 头部合计 -->
          <slot name="sumPrepend" />
        </tr>
      </thead>
      <tbody ref="content" style="position: absolute;">
        <tr v-for="(item, index) in visibleData" :key="index" :class="{'zd-table-cloumn-tr':true, [rowClassName(index, item) || '']:true}" @dblclick.stop="rowDblclick(index, item, $event)" @click.stop="rowClick(index, item, $event)" @mouseenter="cellMouseEnter(index, item, $event)" @mouseleave="cellMouseLeave(index, item, $event)">
          <slot name="tbody" :row="item" :$index="index" />
        </tr>
        <tr class="zd-table-cloumn-tr sum-cloumn sum-cloumn-append">
          <!-- 尾部合计 -->
          <slot name="sumAppend" />
        </tr>
      </tbody>
      <tbody v-if="visibleData.length === 0">
        <tr>
          <td class="fixed-left-th" colspan="20">暂无数据</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { setFixedWidthHead } from './table'
/**
  *
  * @param fn {Function}   实际要执行的函数
  * @param delay {Number}  延迟时间，也就是阈值，单位是毫秒（ms）
  *
  * @return {Function}     返回一个“去弹跳”了的函数
  */
function debounce(fn, delay) {
  // 定时器，用来 setTimeout
  var timer

  // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
  return function() {
    // 保存函数调用时的上下文和参数，传递给 fn
    var context = this
    var args = arguments

    // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
    clearTimeout(timer)

    // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
    // 再过 delay 毫秒就执行 fn
    timer = setTimeout(function() {
      fn.apply(context, args)
    }, delay)
  }
}
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
    },
    headerDragend: {
      type: Boolean,
      default: false // 是否拖拽宽度
    },
    multisHead: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      visibleData: [],
      coumnHeight: 0,
      contentHeight: 0,
      className: (new Date().getTime()).toString() // 独一无二类名，防止一个页面多个table冲突
    }
  },
  computed: {

  },
  watch: {
    data(newValue, oldValue) {
      this.data = newValue
      const SI = setInterval(() => {
        this.coumnHeight = this.getCoumnHeight()
        this.contentHeight = this.getContentHeight()
        if (this.coumnHeight > 0) {
          clearInterval(SI)
        }
      }, 1000)
      this.visibleData = this.data.slice(0, 20)
    }
  },
  mounted() {
    // const domTable = document.getElementsByClassName(this.className)[0]
    // // 首次判断右边是否固定并且有滚动条
    // if (domTable.clientWidth !== domTable.scrollWidth - domTable.scrollLeft) {
    //   this.addOrRemoveClass(domTable, 'add', 'right')
    // }
    // domTable.addEventListener('scroll', this.getScroll)
    // 固定，多表表头与合计的位置
    setFixedWidthHead(this.className)
  },
  methods: {
    handleScroll: debounce(function() {
      const scrollTop = this.$el.scrollTop
      this.updateVisibleData(scrollTop)
    }, 8),
    updateVisibleData(scrollTop) {
      scrollTop = scrollTop || 0
      const visibleCount = Math.ceil(this.$el.clientHeight / this.coumnHeight)
      const start = Math.floor(scrollTop / this.coumnHeight)
      const end = start + visibleCount
      this.visibleData = this.data.slice(start, end)
      this.$refs.content.style.webkitTransform = `translate3d(0, ${start * this.coumnHeight}px, 0)`
    },
    getContentHeight() {
      const tableDom = this.$refs['zdZable' + this.className]
      const onlyColumnHeightTheader = tableDom.getElementsByTagName('thead')
      if (onlyColumnHeightTheader.length > 0) {
        const height = onlyColumnHeightTheader[0].clientHeight // 表头高度
        return this.data.length * this.coumnHeight + height + 'px'
      } else {
        return 0
      }
    },
    getCoumnHeight() {
      const tableDom = this.$refs['zdZable' + this.className]
      const onlyColumnHeight = tableDom.getElementsByClassName('zd-table-cloumn-tr-tbody')
      if (onlyColumnHeight.length > 0) {
        return onlyColumnHeight[0].clientHeight + 1
      } else {
        return 34
      }
    },
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
      tr:nth-child(even){
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
  #zd-table-cloumn-tr-content{
    position: relative;
  }
  #zd-table-cloumn-tr-hover-box:after{
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-color: #000000;
    position: absolute;
    right: 20px;
    top: -13px;
    content: ""
  }
  #zd-table-cloumn-tr-hover-box:before{
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-color: white;
    position: absolute;
    right: 20px;
    top: -12px;
    content: "";
    z-index: 9999;
  }
  #zd-table-cloumn-tr-hover-box{
    display: none;
    position: absolute;
    top: calc(135%);
    left: 20%;
    border: 1px solid #000000;
    border-radius: 5px;
    padding: 5px;
    z-index: 999;
    background: #fff;
    color: #666;
    text-align: left;
  }
  #zd-table-cloumn-tr-content:hover #zd-table-cloumn-tr-hover-box{
    display:block;
  }
  .col-resize-container {
    height: 0px;
    position: relative;
  }
  .col-resize-container + .table-col-resizer:first-of-type {
    // table-layout: fixed;
  }
  .col-resize-container .active-drag .icon {
    visibility: visible;
  }
  .col-resize-container .last-handle {
    display: none;
  }
  .col-resize-container .drag-handle {
   margin-left: -5px;
    position: absolute;
    z-index: 5;
    width: 10px;
    cursor: col-resize;
  }
  .col-resize-container .drag-handle .icon {
    color: #40b0dc;
    top: -1px;
    position: absolute;
    visibility: hidden;
  }
  .col-resize-container .drag-handle .icon:first-child {
    left: -2px;
  }
  .col-resize-container .drag-handle .icon:last-child {
    left: 6px;
  }
  .col-resize-container .drag-handle:hover .icon {
    visibility: visible;
  }
  .col-resize-container .drag-handle:hover .col-resizer {
    border: 1px solid #50bfff;
  }
  .col-resize-container .drag-handle.disabled-drag {
    cursor: default;
    display: none;
  }
  .col-resize-container .drag-handle .col-resizer {
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0px;
    left: 3px;
  }
}
.zd-table-border-div{
  border-left:1px solid #EBEEF5;
  border-top:1px solid #EBEEF5;
  border-right:1px solid #EBEEF5;
}

</style>

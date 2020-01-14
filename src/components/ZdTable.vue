<template>
  <div :class="{'zd-table':true, [className]:true ,'zd-table-border-div': border}">
    <!-- zd-table-striped 间隔色 zd-table-border 边框 -->
    <table :class="{'zd-table-wrapper':true,'zd-table-striped':striped,'zd-table-border':border}">
      <thead>
        <tr class="zd-table-cloumn-tr">
          <slot></slot>
        </tr>
       </thead>
       <tbody>
        <tr class="zd-table-cloumn-tr" v-for="(item,index) in data" :key="index">
          <slot name="tbody" :row='item'>
          </slot>
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
export default {
  name: 'ZdTable',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    striped: {
      type: Boolean,
      default: false // 是否间隔色
    },
    border: {
      type: Boolean,
      default: false // 是否边框
    }
  },
  watch: {
    data (newValue, oldValue) {
      this.data = newValue
    }
  },
  data () {
    return {
      className: (new Date().getTime()).toString() // 独一无二类名，防止一个页面多个table冲突
    }
  },
  mounted () {
    let domTable = document.getElementsByClassName(this.className)[0]
    domTable.addEventListener('scroll', this.getScroll)
  },
  methods: {
    getScroll (e) {
      // 滚动条事件 固定列添加阴影效果
      if (e.target.scrollLeft > 0) {
        this.addOrRemoveClass(e, 'add')
      } else {
        this.addOrRemoveClass(e, 'remove')
      }
    },
    addOrRemoveClass (e, type) {
      // 删除或者添加节点
      let tr = e.target.getElementsByClassName('zd-table-cloumn-tr')
      for (let i = 0; i < tr.length; i++) {
        let fixedLeftTh = tr[i].getElementsByClassName('fixed-left-th')// 只加在每一个tr的固定列最后一个
        let fixedLeftTd = tr[i].getElementsByClassName('fixed-left-td')// 只加在每一个td的固定列最后一个
        if (fixedLeftTh.length > 0) {
          if (type === 'add') {
            fixedLeftTh[fixedLeftTh.length - 1].classList.add('fixed-left-shadow')
          } else if (type === 'remove') {
            fixedLeftTh[fixedLeftTh.length - 1].classList.remove('fixed-left-shadow')
          }
        }
        if (fixedLeftTd.length > 0) {
          if (type === 'add') {
            fixedLeftTd[fixedLeftTd.length - 1].classList.add('fixed-left-shadow')
          } else if (type === 'remove') {
            fixedLeftTd[fixedLeftTd.length - 1].classList.remove('fixed-left-shadow')
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
  table {
    border-collapse: collapse;
    overflow: auto;
    table-layout: fixed;
    min-width: 100%;
    th,
    td {
      padding: 5px;
      text-align: center;
      white-space: nowrap;
      padding: 10px 10px;
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
      tr:first-child{
        th{
          border-top: 0;
        }
      }
      th {
        background-color: rgb(245, 247, 250);
        color: #909399;
        position: sticky;
        font-size: 13px;
        position: -webkit-sticky;
        top: 0px;
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
      td {
        background: #fff;
        color:#606266;
        font-size: 12px;
      }
    }

    .fixed-left-td,
    .fixed-left-th {
      position: sticky;
      position: -webkit-sticky;
      left: 0px;
    }

    .fixed-left-td,
    .fixed-right-td {
      z-index: 3
    }

    .fixed-left-th,
    .fixed-right-th {
      z-index: 4
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

  }
  .zd-table-striped{
    // 间隔色
    tbody{
      tr:nth-child(even) td{
        background: rgb(245,247,250);
      }
    }
  }
  .zd-table-border{
    th,td{
      border: 1px solid #EBEEF5;
    }
  }
}
.zd-table-border-div{
  border-left:1px solid #EBEEF5;
  border-top:1px solid #EBEEF5;
  border-right:1px solid #EBEEF5;
}

</style>

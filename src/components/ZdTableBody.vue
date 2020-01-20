<template>
  <td
    :class="{'zd-table-cloumn-tr-td':true,'fixed-left-td':fixed==='left','fixed-right-td':fixed==='right','white-space-nowrap':!minWidth && !width}"
    :style="{'min-width':minWidth || width, 'width':minWidth || width}"
    :colspan="colspan"
    :rowspan="rowspan"
  >
    <div id="zd-table-cloumn-tr-content" class="zd-table-cloumn-tr-content">
      <span :class="{'showOverflowTooltip':showOverflowTooltip}" :style="{'width':'inherit'}"><slot>{{ data ? data[prop] || '' : '' }}</slot></span>
      <!-- // 悬浮显示 -->
      <div v-if="showOverflowTooltip && widthValue && getTextLength(data ? data[prop] || '' : '') * tdFontSize > widthValue" id="zd-table-cloumn-tr-hover-box">{{ data ? data[prop]+'' || '' : '' }}</div>
    </div>
  </td>
</template>

<script>
import { setFixedWidthTd, getTextLength } from './table'
export default {
  name: 'ZdTableBody',
  props: {
    prop: {
      type: String, // 数据key
      default: ''
    },
    data: {
      type: Object,
      default: () => {} // 指定行的数据
    },
    minWidth: {
      type: String, // 表头最小宽度
      default: ''
    },
    width: {
      type: String, // 表头宽度
      default: ''
    },
    fixed: {
      type: String,
      default: () => '' // td固定
    },
    showOverflowTooltip: {
      type: Boolean,
      default: () => false // 超出省略
    },
    colspan: {
      type: Number, // 行合并
      default: 1
    },
    rowspan: {
      type: Number, // 列合并
      default: 1
    }
  },
  data() {
    return {
      tdFontSize: 12, // td 字体大小
      widthValue: ''
    }
  },
  watch: {
    data(newValue, oldValue) {
      // 监听table值的变化
      this.data = newValue
    },
    fixed(newValue, oldValue) {
      if (newValue) {
        setFixedWidthTd(this.$parent.className, newValue) // 设置多个固定列的距离
      }
    }
  },
  mounted() {
    this.resetFun()
  },
  methods: {
    getTextLength,
    resetFun() {
      this.widthValue = (this.minWidth || this.width).replace('px', '')
      if (this.fixed) {
        setFixedWidthTd(this.$parent.className, this.fixed) // 设置多个固定列的距离
      }
      if (this.showOverflowTooltip) {
        if (document.getElementsByTagName('td').length > 0) {
          // 用来判断什么时候超出省略
          this.tdFontSize = window.getComputedStyle(document.getElementsByTagName('td')[0]).fontSize.replace('px', '')
        }
      }
    }
  }
}
</script>

<style  lang="scss">
</style>

<template>
  <th
    :class="{'fixed-left-th':fixed==='left','fixed-right-th':fixed==='right'}"
    :style="{'min-width':minWidth || width, 'width':minWidth || width}"
  >
    <el-tooltip :content="label" :disabled="!(showOverflowTooltip && widthValue && getTextLength(label) * tdFontSize > widthValue)" placement="top"  effect="light">
      <span :class="{'showOverflowTooltip':showOverflowTooltip}" :style="{'width':minWidth || width}"> <slot>{{label}}</slot> </span>
    </el-tooltip>
  </th>
</template>

<script>
import { setFixedWidthTh, getTextLength } from './table'
export default {
  name: 'ZdTableHead',
  props: {
    label: {
      type: String, // 表头名称
      default: ''
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
      default: () => '' // 表头是否固定
    },
    showOverflowTooltip: {
      type: Boolean,
      default: () => false // 超出省略
    }
  },
  data () {
    return {
      data: [], // 列表数据
      tdFontSize: 12, // td 字体大小
      widthValue: ''
    }
  },
  created () {
  },
  watch: {
    '$parent.data' (newValue, oldValue) {
      // 监听table值的变化
      this.data = newValue
    },
    fixed (newValue, oldValue) {
      if (newValue) {
        setTimeout(() => {
          setFixedWidthTh(this.$parent.className, newValue) // 设置多个固定列的距离
        }, 200)
      }
    }
  },
  mounted () {
    this.data = this.$parent.data
    this.widthValue = (this.minWidth || this.width).replace('px', '')
    if (this.fixed) {
      setTimeout(() => {
        setFixedWidthTh(this.$parent.className, this.fixed) // 设置多个固定列的距离
      }, 200)
    }
    if (document.getElementsByTagName('td').length > 0) {
      // 用来判断什么时候超出省略
      this.tdFontSize = window.getComputedStyle(document.getElementsByTagName('th')[0]).fontSize.replace('px', '')
    }
  },
  methods: {
    getTextLength
  }
}
</script>

<style  lang="scss">
</style>

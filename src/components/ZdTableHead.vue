<template>
  <th
    :class="{'fixed-left-th':fixed==='left','fixed-right-th':fixed==='right'}"
    :style="{'min-width':minWidth || width}"
  >
  <!-- style="min-width: 250px;" -->
    <span>{{ label }}</span>
  </th>
</template>

<script>
import { setFixedWidthTh } from './table'
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
    }
  },
  data () {
    return {
      data: [] // 列表数据
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
    if (this.fixed) {
      setTimeout(() => {
        setFixedWidthTh(this.$parent.className, this.fixed) // 设置多个固定列的距离
      }, 200)
    }
  }
}
</script>

<style  lang="scss">
</style>

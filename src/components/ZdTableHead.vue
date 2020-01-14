<template>
  <th
    :class="{'fixed-left-th':fixed==='left','fixed-right-th':fixed==='right'}"
  >
    {{ label }}
  </th>
</template>

<script>
import { setFixedWidthTh } from './table'
export default {
  name: 'ZdTableHead',
  props: {
    label: {
      type: String,
      default: ''
    },
    fixed: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      data: [] // 列表数据
    }
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

<template>
  <td :class="{'fixed-left-td':fixed==='left','fixed-right-td':fixed==='right'}">
    {{ data[prop] }}
  </td>
</template>

<script>
import { setFixedWidthTd } from './table'
export default {
  name: 'ZdTableBody',
  props: {
    prop: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      default: () => {}
    },
    fixed: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
    }
  },
  watch: {
    data (newValue, oldValue) {
      // 监听table值的变化
      this.data = newValue
    },
    fixed (newValue, oldValue) {
      if (newValue) {
        setTimeout(() => {
          setFixedWidthTd(this.$parent.className, newValue) // 设置多个固定列的距离
        }, 200)
      }
    }
  },
  mounted () {
    if (this.fixed) {
      setTimeout(() => {
        setFixedWidthTd(this.$parent.className, this.fixed) // 设置多个固定列的距离
      }, 200)
    }
  }
}
</script>

<style  lang="scss">
</style>

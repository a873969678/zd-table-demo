<template>
  <th
    :class="{'fixed-left-th':fixed==='left','fixed-right-th':fixed==='right'}"
    :style="{'min-width':minWidth || width, 'width':minWidth || width}"
  >
    <el-tooltip :content="label" :disabled="!(showOverflowTooltip && widthValue && getTextLength(label) * tdFontSize > widthValue)" placement="top" effect="light">
      <span :class="{'showOverflowTooltip':showOverflowTooltip}" :style="{'width':minWidth || width}"> <slot>{{ label }}</slot></span>
    </el-tooltip>
    <div v-if="sortable" class="sort">
      <!-- 排序 -->
      <!-- 从小到大 -->
      <div :class="'ascending '+classNameSort+'ascending'" @click="sortChange('ascending',classNameSort+'ascending')" />
      <!-- 从大到小 -->
      <div :class="'descending '+classNameSort+'descending'" @click="sortChange('descending',classNameSort+'descending')" />
      <!-- border-top-color: #409eff; -->

    </div>
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
    },
    sortable: {
      type: Boolean,
      default: () => false // 排序
    },
    sortMethod: {
      type: Function,
      default: () => {} // 排序方法
    }
  },
  data() {
    return {
      data: [], // 列表数据
      tdFontSize: 12, // td 字体大小
      widthValue: '',
      classNameSort: (new Date().getTime()) + Math.ceil(Math.random(100) * 100).toString()
    }
  },
  watch: {
    '$parent.data'(newValue, oldValue) {
      // 监听table值的变化
      this.data = newValue
    },
    fixed(newValue, oldValue) {
      if (newValue) {
        setTimeout(() => {
          setFixedWidthTh(this.$parent.className, newValue) // 设置多个固定列的距离
        }, 200)
      }
    }
  },
  created() {
  },
  mounted() {
    this.data = this.$parent.data
    this.widthValue = (this.minWidth || this.width).replace('px', '')
    if (this.fixed) {
      setTimeout(() => {
        setFixedWidthTh(this.$parent.className, this.fixed) // 设置多个固定列的距离
      }, 200)
    }
    if (this.showOverflowTooltip) {
      if (document.getElementsByTagName('td').length > 0) {
      // 用来判断什么时候超出省略
        this.tdFontSize = window.getComputedStyle(document.getElementsByTagName('th')[0]).fontSize.replace('px', '')
      }
    }
  },
  methods: {
    getTextLength,
    sortChange(type, className) {
      // 取消所有排序图标的颜色
      const domDesc = document.getElementsByClassName(this.$parent.className)[0].getElementsByClassName('descending')
      const domAsc = document.getElementsByClassName(this.$parent.className)[0].getElementsByClassName('ascending')
      for (let i = 0; i < domDesc.length; i++) {
        domDesc[i].style.borderTopColor = '#c0c4cc'
      }
      for (let i = 0; i < domAsc.length; i++) {
        domAsc[i].style.borderBottomColor = '#c0c4cc'
      }
      const dom = document.getElementsByClassName(this.$parent.className)[0].getElementsByClassName(className)
      for (let i = 0; i < dom.length; i++) {
        if (type === 'descending') {
          dom[i].style.borderTopColor = '#409eff'
        }
        if (type === 'ascending') {
          dom[i].style.borderBottomColor = '#409eff'
        }
      }
      this.sortMethod(type, this.label)
    }
  }
}
</script>

<style  lang="scss">
.zd-table{
  .sort{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    vertical-align: middle;
    cursor: pointer;
    margin-left: 4px;
    overflow: initial;
    position: relative;
  }
  .descending{
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: solid;
    border-color:#c0c4cc transparent transparent transparent;
    cursor: pointer;
  }
  .ascending{
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #c0c4cc transparent;
    margin-bottom: 2px;
    cursor: pointer;
  }
}
</style>

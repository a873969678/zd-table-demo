export function setFixedWidthTh(className, fixValue) {
  // table类名 需要计算固定的类名
  const fixClassName = fixValue === 'left' ? 'fixed-left-th' : 'fixed-right-th'
  // 设置多个固定th的距离
  const dom = document.getElementsByClassName(className)[0].getElementsByClassName('zd-table-cloumn-tr')
  setWidth(fixValue, dom, fixClassName)
}

export function setFixedWidthTd(className, fixValue) {
  // table类名 需要计算固定的类名
  const fixClassName = fixValue === 'left' ? 'fixed-left-td' : 'fixed-right-td'
  // 设置多个固定td的距离
  const dom = document.getElementsByClassName(className)[0].getElementsByClassName('zd-table-cloumn-tr') // 获取对应的类名
  setWidth(fixValue, dom, fixClassName)
}

export function setWidth(fixValue, dom, fixClassName) {
  if (dom.length > 0) {
    for (let i = 0; i < dom.length; i++) {
      const fixName = dom[i].getElementsByClassName(fixClassName)
      let num = 0
      if (fixValue === 'left') {
        for (let j = 0; j < fixName.length; j++) {
        // offsetTop距离左边距离
          fixName[j].style.left = fixName[j].offsetLeft - j + 'px'
        }
      } else {
        for (let j = fixName.length - 1; j >= 0; j--) {
        // 后面为前面宽度之和
          if (j < fixName.length - 1) {
          // console.log(num)
            fixName[j].style.right = num - 1 + 'px'
            num += fixName[j].clientWidth
          } else {
            num = fixName[j].clientWidth
          }
        }
      }
    }
  }
}
// 表头固定值计算
export function setFixedWidthHead(className) {
  // table类名 需要计算固定的类名
  // 设置多个固定td的距离
  const dom = document.getElementsByClassName(className)[0].getElementsByClassName('zd-table-cloumn-tr-th') // 获取对应的类名
  // 多级表头
  if (dom.length > 1) {
    for (let i = 0; i < dom.length; i++) {
      const thName = dom[i].getElementsByClassName('zd-table-cloumn-tr-th-only')
      const fixName = dom[i].getElementsByClassName('zd-table-cloumn-tr-td')
      const number = i === 0 ? 0 : 1
      for (let j = 0; j < thName.length; j++) {
        // offsetTop距离顶部距离 （多级表头）
        thName[j].style.top = thName[i].offsetTop - number + 'px'
      }
      for (let j = 0; j < fixName.length; j++) {
        // offsetTop距离顶部距离 （合计）
        fixName[j].style.top = fixName[i].offsetTop - number + 'px'
      }
    }
  }
}

export function getTextLength(value) {
  // 计算字体长度 用来判断什么时候超出省略
  // 中文、中文标点、全角字符按1长度，英文、英文符号、数字按0.5长度计算
  if (value) {
    value = String(value)
    const cnReg = /([\u4e00-\u9fa5]|[\u3000-\u303F]|[\uFF00-\uFF60])/g
    const mat = value.match(cnReg)
    if (mat) {
      return (mat.length + (value.length - mat.length) * 0.5)
    } else {
      return (value.length * 0.5)
    }
  } else {
    return 0
  }
}

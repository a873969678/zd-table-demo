export function setFixedWidthTh (className, fixName) {
  // table类名 需要计算固定的类名
  let fixClassName = fixName === 'left' ? 'fixed-left-th' : 'fixed-right-th'
  // 设置多个固定th的距离
  let dom = document.getElementsByClassName(className) // 获取对应的类名
  if (dom.length > 0) {
    let fixName = dom[0].getElementsByClassName(fixClassName)
    let num = 0
    if (fixName === 'left') {
      for (let i = 0; i < fixName.length; i++) {
        // 后面为前面宽度之和
        if (i > 0) {
          // console.log(num)
          fixName[i].style.left = num - 1 + 'px'
          num += fixName[i].clientWidth
        } else {
          num = fixName[i].clientWidth
        }
      }
    } else {
      for (let i = fixName.length - 1; i >= 0; i--) {
        // 后面为前面宽度之和
        if (i > 0) {
          // console.log(num)
          fixName[i].style.right = num - 1 + 'px'
          num += fixName[i].clientWidth
        } else {
          num = fixName[i].clientWidth
        }
      }
    }
  }
}

export function setFixedWidthTd (className, fixName) {
  // table类名 需要计算固定的类名
  let fixClassName = fixName === 'left' ? 'fixed-left-td' : 'fixed-right-td'
  // 设置多个固定td的距离
  let dom = document.getElementsByClassName(className)[0].getElementsByClassName('zd-table-cloumn-tr') // 获取对应的类名
  if (dom.length > 0) {
    for (let i = 0; i < dom.length; i++) {
      let fixName = dom[i].getElementsByClassName(fixClassName)
      let num = 0
      for (let j = 0; j < fixName.length; j++) {
      // 后面为前面宽度之和
        if (j > 0) {
        // console.log(num)
          fixName[j].style.left = num - 1 + 'px'
          num += fixName[j].clientWidth
        } else {
          num = fixName[j].clientWidth
        }
      }
    }
  }
}

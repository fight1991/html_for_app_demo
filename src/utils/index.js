/**
 * 日期格式化 yyyy-MM-dd HH:mm:ss
 * @param date
 * @returns {*}
 */

export function formatDate (date, pattern = 'yyyy-MM-dd HH:mm:ss') {
  if (!date) return
  switch (typeof date) {
    case 'string':
      // 火狐浏览器日期-转换为/
      date = new Date(date.replace(/-/g, '/'))
      break
    case 'number':
      date = new Date(date)
      break
  }
  if (!(date instanceof Date)) return
  let dict = {
    'yyyy': date.getFullYear(),
    'M': date.getMonth() + 1,
    'd': date.getDate(),
    'H': date.getHours(),
    'm': date.getMinutes(),
    's': date.getSeconds(),
    'MM': ('' + (date.getMonth() + 101)).substr(1),
    'dd': ('' + (date.getDate() + 100)).substr(1),
    'HH': ('' + (date.getHours() + 100)).substr(1),
    'mm': ('' + (date.getMinutes() + 100)).substr(1),
    'ss': ('' + (date.getSeconds() + 100)).substr(1)
  }
  return pattern.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function () {
    return dict[arguments[0]]
  })
}
// 获取N天后的日期
export function getNdayDate (startDay, days) {
  var d = startDay
  var year = d.getFullYear()
  var mon = d.getMonth() + 1
  var day = d.getDate()
  if (day <= days) {
    if (mon > 1) {
      mon = mon - 1
    } else {
      year = year - 1
      mon = 12
    }
  }
  d.setDate(d.getDate() + days)
  year = d.getFullYear()
  mon = d.getMonth() + 1
  day = d.getDate()
  return year + '/' + (mon < 10 ? ('0' + mon) : mon) + '/' + (day < 10 ? ('0' + day) : day)
}

/**
 * 计算两个日期之间的天数
 * @param dateString1  开始日期 yyyy-MM-dd
 * @param dateString2  结束日期 yyyy-MM-dd
 * @returns {number} 如果日期相同 返回一天 开始日期大于结束日期，返回0
 */
export function getDaysBetween (dateString1, dateString2) {
  let startDate = new Date(dateString1 + ' 00:00:00').getTime()
  let endDate = new Date(dateString2 + ' 23:59:59').getTime()
  let days = null
  if (startDate > endDate) {
    days = 0
  } else {
    days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000)
  }
  return Math.ceil(days)
}
/**
 * 金额格式化
 * @param value 要格式化的数字
 * @param currency 货币前缀 默认''
 * @param  decimals 保留几位小数 默认2
 * @param  unit 单位 默认''
 * @returns {string}
 */
const digitsRE = /(\d{3})(?=\d)/g
export function formatCurrency (value, decimals = 2, currency = '', unit = '') {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified
  var i = _int.length % 3
  var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : ''
  var _float = decimals ? stringified.slice(-1 - decimals) : ''
  var sign = value < 0 ? '-' : ''
  return (
    sign +
    currency +
    head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float +
    unit
  )
}
// 判断是否是json格式的字符串
export function isJSON (str) {
  if (typeof str === 'string') {
    try {
      var obj = JSON.parse(str)
      if (typeof obj === 'object' && obj) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  } else {
    return false
  }
}
// 响应200时 业务状态码处理
export function bussinessBundle (res, other, success, store) {
  if (res.errno === store.state.successCode) {
    success && success(res)
    return
  }
  if (other) {
    other(res)
  }
}

// 开启loading
export function startLoading (store, tabId, globalLoading) {
  // 页签组件的loading
  if (globalLoading) {
    // 全局loading
    store.commit('changeLoading', true)
  } else {
    if (store.state.tab.currentTab !== 'tab-index') {
      store.dispatch('setCurrentTabLoading', { tabId, flag: true })
    }
  }
}
// 关闭loading
export function closeLoading (store, tabId, globalLoading) {
  // 页签组件的loading
  if (globalLoading) {
    // 全局loading
    store.commit('changeLoading', false)
  } else {
    if (store.state.tab.currentTab !== 'tab-index') {
      store.dispatch('setCurrentTabLoading', { tabId, flag: false })
    }
  }
}

// url编码解码
export function encodeData (obj) {
  return encodeURIComponent(JSON.stringify(obj))
}
export function decodeData (obj) {
  return JSON.parse(decodeURIComponent(obj))
}

// 判断终端
export function judgeClient () {
  let u = navigator.userAgent
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // 判断是否是 android终端
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // 判断是否是 iOS终端
  if (isAndroid) {
    return 'android'
  } else if (isIOS) {
    return 'ios'
  } else {
    return 'pc'
  }
}
// 判断是否是微信打开的
export function isWeiXin () {
  let ua = window.navigator.userAgent.toLowerCase()
  if (ua.indexOf('micromessenger') > -1) {
    return true // 是微信端
  } else {
    return false
  }
}

/**
 * @description: 将带时区的字符串转换成时间戳(以后可用时间工具库)
 */
export function getTimespan (time) {
  // 解决Date.parse在火狐浏览器中解析yyyy-MM-dd日期格式时返回NaN
  // edge浏览器中解析不了带时区的
  let tempArr = time.split(' ')
  let timeStr = tempArr.slice(0, 2).join()
  let res = Date.parse(timeStr.replace('-', '/').replace('-', '/'))
  return res
}
// 深拷贝
export function deepCopy (obj) {
  return JSON.parse(JSON.stringify(obj))
}
// 字体缩放
export function echartsSize (size, defalteWidth = 1920) {
  let docEl = document.documentElement
  let clientWidth = window.innerWidth || docEl.clientWidth || document.body.clientWidth
  if (!clientWidth) return
  let fontSize = (clientWidth / defalteWidth)
  return Number((size * fontSize).toFixed(3))
}
// 设置系统缩放比，适配各分辨率
export function refreshScale (id = 'max-app') {
  // 设计图为1920*1080
  let dom = document.getElementById(id)
  if (!dom) return
  let appStyle = dom.style
  let designW = 1920
  let designH = 1080
  let docEl = document.documentElement
  let baseWidth = docEl.clientWidth
  let baseHeight = docEl.clientHeight
  // 实际窗口宽高比
  let realRatio = baseWidth / baseHeight
  // 设计稿宽高比
  let designRatio = designW / designH
  // 缩放比率
  let scaleRate = baseWidth / designW
  if (realRatio > designRatio) {
    scaleRate = baseHeight / designH
  }
  appStyle.transformOrigin = 'left top'
  appStyle.transform = `scale(${scaleRate}) translateX(-50%)`
  appStyle.width = `${baseWidth / scaleRate}px`
}
// 防抖
export function debounce (callback, timeout = 100) {
  if (window.debounceTimer) {
    clearTimeout(window.debounceTimer)
  }
  window.debounceTimer = setTimeout(() => {
    callback && callback()
  }, timeout)
}

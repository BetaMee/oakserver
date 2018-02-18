/** 
 * date.getDay()映射到日期
*/
const WeekDay = [
  '星期日',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六'
]

/** 
 * 获取当前时间字符串 2018-2-18 14:30
*/
const getNowTimeStr = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()} ${WeekDay[date.getDay()]}`
}

export {
  getNowTimeStr
}
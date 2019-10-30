
// 2019/10/28 13:56:31
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

// 前导0
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 20191027
const formatBefore = n =>{
  const nowDate = new Date();
  const getDate = nowDate.getDate();
  const newDate = new Date(nowDate.setDate(getDate - n));
  const formatYear = newDate.getFullYear();
  const formatMonth = formatNumber(newDate.getMonth() + 1);
  const formatDate = formatNumber(newDate.getDate());
  return formatYear + formatMonth + formatDate;
}


module.exports = {
  formatTime: formatTime,
  formatBefore: formatBefore,
  formatNumber: formatNumber
}

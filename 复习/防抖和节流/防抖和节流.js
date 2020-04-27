// 根据实际情况选择是用节流还是防抖
// 监听窗口滚动 滚动的时候会触发回调多次 使用函数防抖 可以减少调用频率
// 监听窗口resize
// search搜索联想，用户在不断输入值时，用防抖来节约请求资源
// 防抖  如果触发多次  会等到停止触发才会触发  每次触发重新计时
const debouce = (fn) => {
  let timer;
  return function () {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn();
      timer = null
    })
  }
}

// 节流 一定时间内只会触发一次 如果重复触发 无效
const throttle = (fn) => {
  let timer;
  return function(){
    if(timer) return;
    else {
      timer = setTimeout(() => {
        fn();
        timer = null
      })
    }
  }
}
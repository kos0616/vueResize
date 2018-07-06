// 此為mixins 為VUE使用 計算視窗的寬度或回傳目前的模式為行動版或桌機版
// 讓使用者可以從this.$root.screenWidth取得視窗寬度數據
// 回傳值統一為screenWidth

// TODO:建一個git求救

function screenWidth () {
  return window.addEventListener('resize', getWidth, false)
}

function getWidth () {
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || screen.width
  console.log(windowWidth)
  return windowWidth
}

export default screenWidth

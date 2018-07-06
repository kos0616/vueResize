// 此為mixins 為VUE使用 計算視窗的寬度或回傳目前的模式為行動版或桌機版
// 讓使用者可以從this.$root.screenWidth取得視窗寬度數據
// 回傳值統一為screenWidth
export default {
  data: function () {
    return {
      screenWidth: this.getWidth
    }
  },
  methods: {
    getWidth: function () {
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || screen.width
      // console.log(windowWidth)
      this.screenWidth = windowWidth
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getWidth()
      window.addEventListener('resize', this.getWidth)
    })
  }
  // updated: function () {
  //   this.$nextTick(function () {
  //     this.getWidth()
  //     window.addEventListener('resize', this.getWidth)
  //   })
  // }
}

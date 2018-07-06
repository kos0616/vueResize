// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Mixin，讓使用者可以從this.$root.screenWidth取得視窗寬度數據
import screenWidthMixin from './mixin'

// prototype版本
import screenWidthProto from './prototype'

Vue.prototype.$screenWidth = screenWidthProto

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  mixins: [screenWidthMixin],
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
//$mount('#app')是手动挂载的意思，
//当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；

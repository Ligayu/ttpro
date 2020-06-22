import Vue from 'vue'
import App from './App.vue'
import router from './router'


// 1. 导入组件库
import Vant from 'vant'
// 2. 引入组件 css 文件
import 'vant/lib/index.css'
// 3. 注册 vant ui 组件库的标签
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
//$mount('#app')是手动挂载的意思，
//当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；

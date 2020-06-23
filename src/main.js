import Vue from 'vue'
import App from './App.vue'
import router from './router' //会自动找路径下的js文件，匹配到index.js


// 1. 导入组件库
import Vant from 'vant'
// 2. 引入组件 css 文件
import 'vant/lib/index.css'
// 3. 注册 vant ui 组件库的标签
Vue.use(Vant)


import axios from "axios";
// 绑定到原型
Vue.prototype.$axios = axios;


//引入弹出层
import { Popup } from 'vant';
Vue.use(Popup);

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
//$mount('#app')是手动挂载的意思，
//当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；

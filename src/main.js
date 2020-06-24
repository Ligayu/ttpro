import Vue from 'vue'
import App from './App.vue'
import router from './router' //会自动找路径下的js文件，匹配到index.js


// 1. 导入组件库
import Vant from 'vant'
// 2. 引入组件 css 文件
import 'vant/lib/index.css'
// 3. 注册 vant ui 组件库的标签
Vue.use(Vant)

// 引入请求库 axios
// 1. 引入库
import axios from "axios";
// 绑定到原型
Vue.prototype.$axios = axios;


//引入弹出层
import { Popup } from 'vant';
Vue.use(Popup);

Vue.config.productionTip = false





// 设置基准路径
//组件模板渲染时，使用$axios.defaults.baseURL，因为Vue.prototype.$axios = axios
//axios在Vue的原型链上，赋值给了$axios
axios.defaults.baseURL = 'http://127.0.0.1:3000'

router.beforeEach((to, from, next) => {

  //进入个人中心必须带有token
  if (to.meta.permit) {
    const permitKey = localStorage.getItem('token')
    if (permitKey) next()
    else {
      console.log("请先登录");
      router.push('/login')
    }
  } else next()
})


//单独引入一个toast，在还没挂载前，this.$toast用不了
import { Toast } from 'vant';
//axios拦截器，拦截有错误信息的请求
axios.interceptors.response.use(res => {

  // 对获取的数据进行处理
  const { statusCode, message } = res.data
  if (statusCode && statusCode == 401) {
    Toast.fail(res.data.message)
  }
  return res
})

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
//$mount('#app')是手动挂载的意思，
//当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；

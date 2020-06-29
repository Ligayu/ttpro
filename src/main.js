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


//上弹输入框
import { ActionSheet } from 'vant';
Vue.use(ActionSheet);

//图片上传
import { Uploader } from 'vant';
Vue.use(Uploader);


//列表加载
// import { List } from 'vant'
// Vue.use(List);
//已经引入了import Vant from 'vant'，这里写不写没关系


// 设置基准路径
//组件模板渲染时，使用$axios.defaults.baseURL，因为Vue.prototype.$axios = axios
//axios在Vue的原型链上，赋值给了$axios
axios.defaults.baseURL = 'http://127.0.0.1:3000'


// 全局设置请求头
// axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
// axios.defaults.headers.post['Content-Type'] = 'application/json'; //x-www-form-urlencoded


//路由守卫
//进入个人中心必须带有token
router.beforeEach((to, from, next) => {
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
    Toast.fail("账户失效，请重新登录")
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
    router.replace('/login')
  }
  return res
})

//设置一个全局过滤器,用来筛选合适的地址
Vue.filter("fixImgUrl", function () {
  const fullUrlReg = /^http/
  if (fullUrlReg.test(url)) {
    return url
  } else {
    return axios.defaults.baseURL + url
  }
})



// 全局设置请求头
// 判断如果本地储存有 token 但是请求配置没有, 就要加上
axios.interceptors.request.use((config) => {
  if (!config.headers.Authorization && localStorage.getItem('token')) {
    config.headers.Authorization = localStorage.getItem('token'); //这里可以不加Bearer，浏览器有兼容性
  }
  return config;
})


new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
//$mount('#app')是手动挂载的意思，
//当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


// 在 webpack 入口文件注册路由的情况下, 
// 默认 router-view router-link 不会自动带上
// 路由第五步 手动进行注册组件标签
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

]

const router = new VueRouter({
  routes
})

export default router

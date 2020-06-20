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
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router

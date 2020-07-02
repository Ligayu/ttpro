import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login.vue";
import Register from '@/views/Register.vue'
import index from "@/views/index.vue"
import articleList from "@/views/articleList.vue"
import MoreComment from "@/views/MoreComment"
//个人中心板块
import User from "@/views/UserAdm/User.vue"
import Edit from "@/views/UserAdm/Edit"
import Focus from "@/views/UserAdm/Focus"
import Replay from "@/views/UserAdm/Replay"
import Collection from "@/views/UserAdm/Collection"

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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },

  {
    path: '/index',
    name: index,
    component: index

  },
  {
    path: '/articleList/:id',
    name: 'articleList',
    component: articleList
  },
  {
    path: '/MoreComment/:id',
    name: 'MoreComment',
    component: MoreComment
  },
  //用户个人中心组件
  {
    path: "/User",
    name: "User",
    component: User,
    meta: {
      permit: true
    },
  },
  {
    path: '/Edit',
    name: "Edit",
    component: Edit,
  },
  {
    path: '/Focus',
    name: 'Focus',
    component: Focus
  },
  {
    path: '/Replay',
    name: "Replay",
    component: Replay
  },
  {
    path: '/Collection',
    name: "Collection",
    component: Collection
  }
]

const router = new VueRouter({
  routes
})

export default router

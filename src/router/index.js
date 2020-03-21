import Vue from 'vue'
import VueRouter from 'vue-router'

//1.安装插件
Vue.use(VueRouter)

const home = () => import('views/home/Home')
const category = () => import('views/category/Category')
const profile = () => import('views/profile/Profile')
const cart = () => import('views/cart/Cart')
const detail = () => import('views/details/Detail')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/detail',
    component: detail
  }
]

//2.创建router
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
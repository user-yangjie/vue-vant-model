import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
     component: () => import(/* webpackChunkName: "about" */ '../views/Home/Home.vue')
  },
  {
    path: '/list',
    name: 'List',
     component: () => import(/* webpackChunkName: "about" */ '../views/List/List.vue')
  },
  {
    path: '/car',
    name: 'Car',
     component: () => import(/* webpackChunkName: "about" */ '../views/Car/Car.vue')
  },
  {
    path: '/my',
    name: 'My',
     component: () => import(/* webpackChunkName: "about" */ '../views/My/My.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName:'home' */'../views/home/Home.vue')
  },
  {
    path: '/cart',
    component: () => import(/* webpackChunkName:'cart' */'../views/cart/Cart.vue')
  },
  {
    path: '/order',
    component: () => import(/* webpackChunkName:'order' */'../views/order/Order.vue')
  },
  {
    path: '/my',
    component: () => import(/* webpackChunkName:'my' */'../views/my/My.vue')
  },
  {
    path: '/shopDetail/:id',
    component: () => import(/* webpackChunkName:'shopDetail' */'../views/shopDetail/ShopDetail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

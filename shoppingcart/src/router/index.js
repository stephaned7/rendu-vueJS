import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ShoppingCart from '../views/ShoppingCart.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCart
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

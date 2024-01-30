import { createRouter, createWebHistory } from 'vue-router'
import TriviaApp from '../views/TriviaApp.vue'

const routes = [
  {
    path: '/',
    name: 'TriviaApp',
    component: TriviaApp
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

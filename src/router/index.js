import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index/index.vue'
import Login from '@/pages/login/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
  ],
})

export default router

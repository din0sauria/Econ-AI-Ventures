import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index/index.vue'
import Login from '@/pages/login/login.vue'
import Expert from '@/pages/expert/expert.vue'

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
    {
      path: '/expert',
      component: Expert,
    },
  ],
})

export default router

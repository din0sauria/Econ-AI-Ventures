import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/index/index.vue'
import Login from '@/pages/index/login.vue'
import Expert from '@/pages/expert/expert.vue'
import ExpertVideo from '@/pages/expert/expertVideo.vue'
import Cor from '@/pages/cor/cor.vue'
import Newproj from '@/pages/cor/newproj.vue'
import Corhome from '@/pages/cor/corhome.vue'
import Skv from '@/pages/skv/skv.vue'
import Skvhome from '@/pages/skv/skvhome.vue'
import Meet from '@/pages/meet/meet.vue'
import Proj from '@/pages/proj/proj.vue'
import Zhihui from '@/pages/zhihui/zhihui.vue'
import Company from '@/pages/company/company.vue'
import Canvas from '@/pages/cor/canvas.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    {
      path: '/expertVideo',
      component: ExpertVideo,
    },
    {
      path: '/cor',
      component: Cor,
    },
    {
      path: '/corhome',
      component: Corhome,
    },
    {
      path: '/skv',
      component: Skv,
    },
    {
      path: '/skvhome',
      component: Skvhome,
    },
    {
      path: '/meet',
      component: Meet,
    },
    {
      path: '/proj',
      component: Proj,
    },
    {
      path: '/company',
      component: Company,
    },
    {
      path: '/newproj',
      component: Newproj,
    },
    {
      path: '/zhihui',
      component: Zhihui,
    },
    {
      path: '/canvas',
      component: Canvas,
    },
  ],
})

export default router

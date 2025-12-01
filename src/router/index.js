import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home.vue') 
    },
    {
      path: '/blog/:slug',
      name: 'BlogDetail', 
      component: () => import('@/pages/BlogDetail.vue')
    }
  ]
})

export default router
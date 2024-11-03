import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import middleware from '@/middlewares/auth'

const requiresAuth = true
const requiresGuest = true

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth/login',
      component: () => import('../views/auth/login.vue'),
      meta: { requiresGuest },
      name: 'Login',
    },
    {
      path: '/auth/register',
      component: () => import('../views/auth/register.vue'),
      meta: { requiresGuest },
      name: 'Register',
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth },
    },
  ],
})

middleware(router)

export default router

import { useAuthStore } from '@/stores/modules/auth/auth'
import axios from 'axios'

export default function middleware(router) {
  router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore()
    if (to.meta.requiresAuth && !authStore.isLoggedIn) {
      next({ name: 'Login' })
    } else {
      next()
    }
  })

  router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    if (
      authStore.isLoggedIn &&
      (to.name === 'Login' || to.name === 'Register')
    ) {
      next({ name: 'Home' })
    } else {
      next()
    }
  })
}

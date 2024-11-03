import router from '@/router'
import { useApi } from '@/stores/api'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('authStore', () => {
  const apiConfig = useApi()
  const router = useRouter()
  const load = ref(false)
  const loading = ref(false)
  const user = ref(undefined)
  const tasks = ref([])
  const errors = ref({})
  const notify = ref({
    status: false,
    type: '',
    text: '',
  })
  const accessToken = useStorage('access_token', '')
  const verify = ref({
    message: '',
    status: null,
  })
  const credentials = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    token: '',
  })
  

  const isLoggedIn = computed(
    () => accessToken.value != undefined && accessToken.value !== '',
  )

  function setUser(newUser) {
    user.value = newUser
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  function getUserStorage() {
    user.value = JSON.parse(localStorage.getItem('user'))
    return user.value
  }

  function setToken(newToken) {
    accessToken.value = newToken
  }

  async function login() {
    loading.value = true
    try {
      errors.value = {}
      const response = await apiConfig.post('api/auth/login', credentials.value)
      const token = response.data.accessToken
      setToken(token)
      await getUser()
      loading.value = false
      router.push('/')
    } catch (error) {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors
      } else if (error.response.status === 401) {
        errors.value = error.response.data.message
        loading.value = false
      } else {
        throw error
      }

      loading.value = false
    }
    loading.value = false
  }

  async function register() {
    loading.value = true
    try {
      errors.value = {}

      const response = await apiConfig.post(
        'api/auth/register',
        credentials.value,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )

      loading.value = false
      router.push({ path: '/auth/login' })
    } catch (error) {
      console.log('error', error)
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors
      } else if (error.response.status !== 402) {
        errors.value = error.response.data.message
          ? error.response.data.message
          : "Une erreur s'est produite, veuillez réessayer plus tard merci !"
        loading.value = false
      } else {
        errors.value =
          "Une erreur s'est produite, veuillez réessayer plus tard merci !"
        throw error
      }
      loading.value = false
    }
  }

  async function getUser() {
    load.value = true
    try {
      const response = await apiConfig.get('api/auth/user')
      setUser(response.data.datas)
      console.log(user.value)
      load.value = false
    } catch (error) {
      load.value = false
    }
    load.value = false
  }

  async function getAllTasks() {
    load.value = true
    try {
      const response = await apiConfig.get('api/tasks')
      tasks.value = response.data
      console.log(tasks.value)

      load.value = false
    } catch (error) {
      load.value = false
    }
    load.value = false
  }

  async function logOut() {
    try {
      const response = await apiConfig.get('api/auth/logout')
      localStorage.clear()
      isLoggedIn.value = false
      router.push({ path: '/auth/login' })
      window.location.reload()
    } catch (error) {}
  }

  return {
    apiConfig,
    router,
    load,
    loading,
    user,
    errors,
    notify,
    accessToken,
    verify,
    credentials,
    isLoggedIn,
    setUser,
    getUserStorage,
    getAllTasks,
    setToken,
    login,
    register,
    getUser,
    logOut,
  }
})

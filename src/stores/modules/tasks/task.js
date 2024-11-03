import { useApi } from '@/stores/api'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import Swal from 'sweetalert2'

export const useTasksStore = defineStore('tasksStore', () => {
  const apiConfig = useApi()
  const loading = ref(false)
  const tasks = ref([])
  const dialog = ref(false)
  const dialogDelete = ref(false)
  const editedIndex = ref(-1)
  const forms = ref({
    id: null,
    title: '',
    date: '',
    description: '',
    status: 0,
  })
  const errors = ref({})

  const headers = ref([
    { title: 'ID', key: 'id', align: 'start', sortable: false },
    { title: 'Titre', key: 'title', align: 'start', sortable: false },
    { title: 'Description', key: 'description' },
    { title: "Date d'échéance", key: 'date' },
    { title: 'Actions', key: 'actions', align: 'end', sortable: false },
  ])

  async function getAllTasks() {
    loading.value = true
    try {
      const response = await apiConfig.get('api/tasks')
      tasks.value = response.data.data
    } finally {
      loading.value = false
    }
  }

  function initialize() {
    getAllTasks()
  }

  function editItem(item) {
    editedIndex.value = item.id
    forms.value = { ...item }
    dialog.value = true
  }

  function deleteItem(item) {
    editedIndex.value = item.id
    forms.value = { ...item }
    dialogDelete.value = true
  }

  async function deleteItemConfirm(id) {
    try {
      await apiConfig.delete(`api/tasks/delete/${id}`)
      getAllTasks()
      Swal.fire({
        title: 'Supprimer!',
        text: 'Tâche supprimer avec succès.',
        icon: 'success',
      })
    } finally {
      closeDelete()
    }
  }

  function close() {
    dialog.value = false
    errors.value = {}
    forms.value = {
      id: null,
      title: '',
      date: '',
      description: '',
      status: 0,
    }
  }

  function closeDelete() {
    forms.value = { ...forms.value }
    editedIndex.value = -1
    dialogDelete.value = false
  }

  async function createTask() {
    loading.value = true
    try {
      errors.value = {}
      const payload = {
        title: forms.value.title,
        description: forms.value.description,
        status: forms.value.status,
        date: forms.value.date,
      }
      await apiConfig.post('api/tasks/store', payload)
      getAllTasks()
      dialog.value = false
      Swal.fire({
        title: 'Succès!',
        text: 'Tâche ajouter avec succès.',
        icon: 'success',
      })
    } catch (error) {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors
        dialog.value = true
      }
    } finally {
      loading.value = false
    }
  }

  async function updateTask() {
    loading.value = true
    try {
      errors.value = {}
      const payload = {
        title: forms.value.title,
        description: forms.value.description,
        status: forms.value.status,
        date: forms.value.date,
      }
      await apiConfig.put(`api/tasks/update/${forms.value.id}`, payload)
      getAllTasks()
      dialog.value = false
      Swal.fire({
        title: 'Succès!',
        text: 'Tâche modifier avec succès.',
        icon: 'success',
      })
    } catch (error) {
      if (error.response && error.response.status === 422) {
        errors.value = error.response.data.errors
        dialog.value = true
      }
    } finally {
      loading.value = false
    }
  }

  const formTitle = computed(() =>
    editedIndex.value === -1 ? 'Nouvelle Tâche' : 'Modifier Tâche',
  )
  const btnSubmit = computed(() =>
    editedIndex.value === -1 ? 'Sauvegarder' : 'Modifier',
  )

  return {
    apiConfig,
    loading,
    tasks,
    dialog,
    dialogDelete,
    editedIndex,
    forms,
    errors,
    headers,
    getAllTasks,
    initialize,
    editItem,
    deleteItem,
    deleteItemConfirm,
    close,
    closeDelete,
    createTask,
    updateTask,
    formTitle,
    btnSubmit,
  }
})

<template>
  <nav
    class="navbar is-info is-hovered"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <svg
          width="640"
          height="160"
          viewBox="0 0 640 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409V62.961L488.493 96.5545C486.985 99.354 484.616 100.754 481.386 100.754C478.264 100.754 475.949 99.354 474.441 96.5545L455.868 61.6689V132.409C455.868 134.455 454.818 136.07 452.719 137.254C450.619 138.439 448.17 139.031 445.37 139.031C442.463 139.031 439.987 138.439 437.941 137.254C435.895 136.07 434.872 134.455 434.872 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z"
            fill="black"
            class="bd-svg-black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z"
            fill="#00D1B2"
          />
        </svg>
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="authStore.logOut()"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="14"
            height="14"
          >
            <path
              fill="red"
              d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
            />
          </svg>
        </span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light is-small" @click="authStore.logOut()"
              >Se déconnecter</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>

  <section class="mt-8">
    <div class="container">
      <h1 class="title is-3 mt-4">
        Bonjour, {{ authStore.user ? authStore.user.name : 'N/A' }}
      </h1>
      <div>
        <button class="button is-info is-small" @click="openModal">
          Ajouter une tâche
        </button>
        <div class="table-container">
          <table
            class="table table is-bordered is-striped is-narrow is-hoverable is-fullwidth mt-4"
          >
            <thead style="background-color: #66d1ff">
              <tr>
                <th>Date</th>
                <th>Titre</th>
                <th>Description</th>
                <th>Status</th>
                <th class="is-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="task in taskStore.tasks" :key="task.id">
                <td>{{ task.date }}</td>
                <td>{{ task.title }}</td>
                <td>{{ task.description }}</td>
                <td>
                  <span
                    :class="{
                      'has-text-success': task.status,
                      'has-text-danger': !task.status,
                    }"
                  >
                    {{ task.status ? 'Complétée' : 'En cours' }}
                  </span>
                </td>
                <td class="is-right">
                  <div
                    class="dropdown"
                    :class="{ 'is-active': activeDropdown === task.id }"
                  >
                    <div class="dropdown-trigger">
                      <button
                        class="button is-small"
                        @click="toggleDropdown(task.id)"
                        aria-haspopup="true"
                      >
                        <span>Action</span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                      <div class="dropdown-content">
                        <a
                          href="#"
                          class="dropdown-item is-center"
                          @click="editTask(task)"
                          >Modifier</a
                        >
                        <a
                          href="#"
                          class="dropdown-item is-center"
                          @click="confirmDelete(task.id)"
                          >Supprimer</a
                        >
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <div class="modal" :class="{ 'is-active': taskStore.dialog }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ taskStore.formTitle }}</p>
        <button
          class="delete"
          aria-label="close"
          @click="taskStore.close"
        ></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label">Date</label>
          <div class="control">
            <input
              class="input is-small"
              type="date"
              v-model="taskStore.forms.date"
              :class="{ 'is-danger': errors.date }"
            />
            <p v-if="errors.date" class="help is-danger">
              {{ Array.isArray(errors.date) ? errors.date[0] : errors.date }}
            </p>
          </div>
        </div>
        <div class="field">
          <label class="label">Titre</label>
          <div class="control">
            <input
              class="input is-small"
              type="text"
              v-model="taskStore.forms.title"
              :class="{ 'is-danger': errors.title }"
            />
            <p v-if="errors.title" class="help is-danger">
              {{ Array.isArray(errors.title) ? errors.title[0] : errors.title }}
            </p>
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea
              class="textarea is-small"
              v-model="taskStore.forms.description"
              :class="{ 'is-danger': errors.description }"
            ></textarea>
            <p v-if="errors.description" class="help is-danger">
              {{
                Array.isArray(errors.description)
                  ? errors.description[0]
                  : errors.description
              }}
            </p>
          </div>
        </div>
        <div class="field">
          <label class="checkbox">
            <input type="checkbox" v-model="taskStore.forms.status" />
            Terminer
          </label>
        </div>
      </section>
      <footer class="modal-card-foot">
        <div class="buttons">
          <button
            class="button is-small is-success"
            @click="saveTask"
            :class="{ 'is-loading': loading }"
            :disabled="loading"
          >
            {{ taskStore.btnSubmit }}
          </button>
          <button class="button is-small" @click="taskStore.close">
            Annuler
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/modules/tasks/task'
import { ref, computed, onMounted } from 'vue'
import Swal from 'sweetalert2'
import { useAuthStore } from '@/stores/modules/auth/auth'

const taskStore = useTasksStore()
const authStore = useAuthStore()

const activeDropdown = ref(null)
const loading = computed(() => taskStore.loading)
const errors = computed(() => taskStore.errors)

onMounted(() => {
  taskStore.initialize()
  authStore.getUser()
})

function openModal() {
  taskStore.forms = {
    id: null,
    title: '',
    date: '',
    description: '',
    status: 0,
  }
  taskStore.editedIndex = -1
  taskStore.dialog = true
}

function editTask(task) {
  taskStore.forms = { ...task }
  taskStore.editedIndex = task.id
  taskStore.dialog = true
}

function saveTask() {
  if (taskStore.editedIndex === -1) {
    taskStore.createTask()
  } else {
    taskStore.updateTask()
  }
}

function toggleDropdown(id) {
  activeDropdown.value = activeDropdown.value === id ? null : id
}

function confirmDelete(id) {
  Swal.fire({
    title: 'Attention !',
    text: 'Êtes-vous sûr de vouloir supprimer cette tâche ?!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, je veux!',
    cancelButtonText: 'Annuler',
  }).then(result => {
    if (result.isConfirmed) {
      taskStore.deleteItemConfirm(id)
    }
  })
}
</script>

<style scoped>
.is-right {
  text-align: right !important;
}

.dropdown-menu {
  right: 0;
  left: auto;
  min-width: 5px !important;
}
</style>

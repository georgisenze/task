<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-8 is-variable">
          <div class="column is-two-thirds has-text-left">
            <h1 class="title is-1">TASK MANAGER</h1>
            <p class="is-size-4">
              L'endroit idéal pour assurer la gestion de vos tâches.
            </p>
          </div>
          <div class="column box is-one-third has-text-left">
            <h1 class="title">Connexion</h1>
            <h5 class="subtitle is-6">Accéder à vos tâches.</h5>
            <form @submit.prevent="handleLogin">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    v-model="authStore.credentials.email"
                    class="input is-small"
                    type="email"
                    placeholder="Entrez votre email"
                    :class="{ 'is-danger': errors.email }"
                  />
                  <p v-if="errors.email" class="help is-danger">
                    {{
                      Array.isArray(errors.email)
                        ? errors.email[0]
                        : errors.email
                    }}
                  </p>
                </div>
              </div>
              <div class="field">
                <label class="label">Mot de passe</label>
                <div class="control">
                  <input
                    v-model="authStore.credentials.password"
                    class="input is-small"
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    :class="{ 'is-danger': errors.password }"
                  />
                </div>
                <p v-if="errors.password" class="help is-danger">
                  {{
                    Array.isArray(errors.password)
                      ? errors.password[0]
                      : errors.password
                  }}
                </p>
              </div>
              <div class="control">
                <button
                  type="submit"
                  class="button is-link is-fullwidth has-text-weight-medium is-small"
                  :class="{ 'is-loading': loading }"
                  :disabled="loading"
                >
                  Se connecter
                </button>
              </div>

              <p v-if="hasErrors" class="help is-danger mt-3">
                Erreur de connexion, vérifiez vos informations.
              </p>

              <p class="mt-4 has-text-centered">
                Vous n'avez pas de compte ?
                <router-link to="/auth/register" class="has-text-link">
                  Créez-en un ici
                </router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/modules/auth/auth'

// Utilisation du store pour l'authentification
const authStore = useAuthStore()

// Récupère le statut de chargement et les erreurs du store
const loading = computed(() => authStore.loading)
const errors = computed(() => authStore.errors)
const hasErrors = computed(() => Object.keys(authStore.errors).length > 0)

// Fonction de gestion de la soumission du formulaire
const handleLogin = async () => {
  await authStore.login()
}
</script>

<template>
  <FormContainer>
    <template #title>login</template>
    <template #form>
      <LoginForm v-model:email="loginModel.email" v-model:password="loginModel.password"/>
    </template>
    <template #links>
      <div class="links-box">
        <a href="#">Mots de passe oublié</a>
        <a href="#">Pas encore inscrit ?</a>
      </div>
    </template>
    <template #action>
      <ButtonConnexion @action="login"/>
    </template>
  </FormContainer>
</template>

<script setup lang="ts">
import FormContainer from "@/components/FormContainer.vue";
import LoginForm from "@/components/LoginForm.vue";
import ButtonConnexion from "@/components/ButtonConnexion.vue";
import {reactive} from "vue";
import axios from "axios";

import {useAuthStore} from "@/stores/auth";

const loginModel = reactive({
  email: '',
  password: ''
})

const axiosInstance = axios.create({
  baseURL: 'https://localhost:5050/api'
})

const store = useAuthStore()

const login = async () => {
  try {
    const log = await axiosInstance.post('/login', {
      email: loginModel.email,
      password: loginModel.password
    })

    if (!log.data.token) {
      return
    } else {
      store.token = log.data.token
      store.connected = true
    }
  } catch (e) {
    console.error(e)
  }
}
</script>

<style scoped>

</style>

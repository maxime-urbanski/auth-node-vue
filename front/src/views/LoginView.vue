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

const loginModel = reactive({
  email: '',
  password: ''
})

const axiosInstance = axios.create({
  baseURL: 'https://localhost:5050/api',
  headers: {
    "Access-Control-Allow-Origin": '*'
  }
})

const login = async () => {
  const {email, password} = loginModel
  console.log(loginModel)
  try {
    console.log('je passe la ');
    const log = await axiosInstance.get('/users',)
    console.log('login', await log)
  } catch (e) {
    console.error(e)
  }
}
</script>

<style scoped>

</style>

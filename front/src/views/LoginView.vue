<template>
  <FormContainer>
    <template #title>login</template>
    <template #form>
      <LoginForm v-model:email="loginModel.email" v-model:password="loginModel.password"/>
    </template>
    <template #links>
      <div class="links-box">
        <a href="#">Mots de passe oublié</a>
        <a href="/login">Pas encore inscrit ?</a>
      </div>
    </template>
    <template #action>
      <ButtonConnexion @action="store.auth(loginModel)"/>
    </template>
  </FormContainer>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/stores/auth";
import {reactive} from "vue";
import FormContainer from "@/components/FormContainer.vue";
import LoginForm from "@/components/LoginForm.vue";
import ButtonConnexion from "@/components/ButtonConnexion.vue";

const store = useAuthStore()

const loginModel = reactive({
  email: '',
  password: ''
})

</script>

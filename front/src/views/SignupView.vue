<template>
  <ContainerGlobal need-action="true">
    <template #title>Créer un compte</template>
    <template #form>
      <SignUpForm
          v-model:firstname="signupModel.firstname"
          v-model:lastname="signupModel.lastname"
          v-model:email="signupModel.email"
          v-model:password="signupModel.password"
      />
    </template>
    <template #links>
      <div class="links-box">
        <router-link to="login">Déjà un compte ?</router-link>
      </div>
    </template>
    <template #action>
      <ButtonConnexion @action="store.signup(signupModel)" />
    </template>
  </ContainerGlobal>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {useSignUpStore} from "@/stores/signup";
import ButtonConnexion from "@/components/ButtonConnexion.vue";
import SignUpForm from "@/components/SignUpForm.vue";
import ContainerGlobal from "@/components/ContainerGlobal.vue";

const signupModel = reactive({
  firstname: '',
  lastname: '',
  email:'',
  password: ''
})

const store = useSignUpStore()
</script>
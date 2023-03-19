<template>
  <FormContainer>
    <template #title>login</template>
    <template #form>
      <LoginForm/>
    </template>
    <template #links>
      <div class="links-box">
        <a href="#">Mots de passe oublié</a>
        <a href="#">Pas encore inscrit ?</a>
      </div>
    </template>
  </FormContainer>
</template>

<script setup lang="ts">
import FormContainer from "@/components/FormContainer.vue";
import LoginForm from "@/components/LoginForm.vue";
</script>

<style scoped>

</style>
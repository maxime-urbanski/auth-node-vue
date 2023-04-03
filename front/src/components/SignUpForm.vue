<template>
  <div class="input-box">
    <input type="text"
           name="firstname"
           id="firstname"
           :value="firstname"
           @input="$emit('update:firstname', $event.target.value)"
           required>
    <i></i>
    <label for="email">Prénom</label>
  </div>
  <div class="input-box">
    <input type="text"
           name="lastname"
           id="lastname"
           :value="lastname"
           @input="$emit('update:lastname', $event.target.value)"
           required>
    <i></i>
    <label for="email">Nom</label>
  </div>
  <div class="input-box">
    <input type="email"
           name="email"
           id="email"
           :value="email"
           @input="$emit('update:email', $event.target.value)"
           required>
    <i></i>
    <label for="email">Email</label>
  </div>
  <div class="input-box">
    <input type="password"
           name="password"
           id="password"
           :value="password"
           @input="$emit('update:password', $event.target.value)"
           required>
    <i></i>
    <label for="password">Password</label>
  </div>
</template>

<script setup lang="ts">

defineProps({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
})

defineEmits([
    'update:firstname',
    'update:lastname',
    'update:email',
    'update:password'
])
</script>
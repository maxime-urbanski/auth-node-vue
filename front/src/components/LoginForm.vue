<template>
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
  email: String,
  password: String
})

defineEmits(['update:email', 'update:password'])

</script>

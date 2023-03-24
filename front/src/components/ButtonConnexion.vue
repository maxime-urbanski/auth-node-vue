<template>
  <div class="form-submit">
    <button type="submit"
            class="button-connexion"
            @click.prevent="() => $emit('action')"
    >
      Envoyer
    </button>
  </div>
</template>

<script setup lang=ts>
defineEmits(['action'])
</script>

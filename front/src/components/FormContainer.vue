<template>
  <div class="form-container">
    <div class="column-left"></div>
    <div class="column-right">
      <div class="header">
        <h3>
          <slot name="title"></slot>
        </h3>
      </div>
      <div class="form-content">
        <form action="" method="post">
          <slot name="form"></slot>
          <slot name="links"></slot>
          <slot name="action"></slot>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonConnexion from "@/components/ButtonConnexion.vue";
import {useUserStore} from "@/stores/user";

const userStore = useUserStore()
</script>

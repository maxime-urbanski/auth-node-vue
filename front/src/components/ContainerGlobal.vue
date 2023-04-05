<template>
  <div class="container">
    <div class="column-left"></div>
    <div class="column-right">
      <div class="header">
        <h3>
          <slot name="title"></slot>
        </h3>
      </div>
      <div class="form-content" v-if="needAction">
        <form action="" method="post">
          <slot name="form"></slot>
          <slot name="links"></slot>
          <slot name="action"></slot>
        </form>
      </div>
        <div class="info-content" v-if="!needAction">
            
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
    needAction: Boolean
})
</script>

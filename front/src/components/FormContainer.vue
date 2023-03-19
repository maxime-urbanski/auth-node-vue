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
          <div class="form-submit">
            <button type="submit"
                    class="">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

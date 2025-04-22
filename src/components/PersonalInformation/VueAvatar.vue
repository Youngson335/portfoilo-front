<template>
  <div class="vue-avatar shadow-block">
    <div class="vue-avatar__container">
      <img :src="avatar" alt="avatar" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import avatar from "@/assets/avatar.jpg";
</script>
<style lang="scss">
.vue-avatar {
  max-width: 400px;
  &__container {
    border-radius: var(--radius);
    overflow: hidden;
    & img {
      width: 100%;
      display: block;
    }
  }
}
</style>

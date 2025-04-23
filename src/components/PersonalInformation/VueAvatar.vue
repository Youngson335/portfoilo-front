<template>
  <div
    class="vue-avatar shadow-block"
    v-animation="{
      delay: 0.1,
      selector: '.vue-avatar__container',
    }"
  >
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
  @media (max-width: 555px) {
    max-width: 100%;
  }
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

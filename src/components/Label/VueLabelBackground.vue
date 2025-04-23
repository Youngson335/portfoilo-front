<template>
  <label class="vue-label-background">
    <slot></slot>
  </label>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.vue-label-background {
  position: absolute;
  bottom: 5px;
  right: 10px;
  background: var(--light-gray);
  color: white;
  padding: 2px 10px;
  border-radius: 10px;
}
</style>

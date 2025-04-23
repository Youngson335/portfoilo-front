<template>
  <footer class="vue-footer">
    <vue-logo :logo="'white'" />
  </footer>
</template>
<script lang="ts" setup>
import VueLogo from "../Logo/VueLogo.vue";
</script>
<style lang="scss">
.vue-footer {
  padding: 30px;
  background: var(--black);
}
</style>

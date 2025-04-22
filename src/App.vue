<template>
  <VueNotification />
  <router-view />
</template>

<script lang="ts" setup>
import VueNotification from "./components/Notification/VueNotification.vue";
</script>
<style lang="scss">
@import url(../src/assets/styles/main.css);
</style>

<template>
  <div class="vue-logo">
    <img class="vue-logo--img" :src="selectedLogo" alt="logo" />
  </div>
</template>
<script setup lang="ts">
import { defineProps, computed } from "vue";
import black_logo from "@/assets/logo/black-logo.png";
import white_logo from "@/assets/logo/white-logo.png";

const props = defineProps<{
  logo: "black" | "white";
}>();

const selectedLogo = computed(() => {
  return props.logo === "black" ? black_logo : white_logo;
});
</script>
<style lang="scss">
.vue-logo {
  width: 50%;
  max-width: 300px;
  &--img {
    display: block;
    width: 100%;
  }
}
</style>

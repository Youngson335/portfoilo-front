<template>
  <main class="vue-main p-20 container">
    <div v-if="props.contentName === 'bio'">
      <vue-personal-information />
    </div>
    <div v-if="props.contentName === 'portfolio'">
      <vue-portfolio />
    </div>
  </main>
</template>
<script lang="ts" setup>
import VuePersonalInformation from "../PersonalInformation/VuePersonalInformation.vue";
import VuePortfolio from "../Portfolio/VuePortfolio.vue";
import { defineProps, withDefaults } from "vue";

const props = withDefaults(
  defineProps<{
    contentName: "bio" | "portfolio";
  }>(),
  {
    contentName: "bio",
  }
);
</script>
<style lang="scss">
.vue-main {
  height: 80%;
}
</style>

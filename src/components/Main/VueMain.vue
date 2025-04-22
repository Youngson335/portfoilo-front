<template>
  <main class="vue-main p-20 container">
    <div v-if="props.contentName === 'bio'">
      <vue-user-block />
    </div>
    <div v-if="props.contentName === 'portfolio'">
      <vue-portfolio />
    </div>
  </main>
</template>
<script lang="ts" setup>
import VueUserBlock from "../PersonalInformation/VueUserBlock.vue";
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

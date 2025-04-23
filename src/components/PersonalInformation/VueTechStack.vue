<template>
  <div
    class="vue-tech-stack shadow-block p-20"
    v-animation="{
      delay: 0.05,
      selector: '.vue-tech-stack__item',
    }"
  >
    <div class="vue-tech-stack__title">
      <p>Технический стэк:</p>
    </div>
    <div class="vue-tech-stack__items">
      <div
        class="vue-tech-stack__item"
        v-for="(stack, index) of stack"
        :key="index"
      >
        <p :class="{ 'vue-tech-stack__item--active': index % 2 === 0 }">
          {{ stack }} |
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const stack = [
  "vuejs (2, 3 version)",
  "vue-router",
  "vuex",
  "pinia",
  "javascript",
  "html5",
  "css3",
  "scss",
  "typescript",
  "webpack",
  "npm",
  "bootstrap-5",
  "tailwind",
  "git-hub/lab",
  "leaflet",
  "nuxtjs",
  "интеграция с api",
  "axios",
  "docker",
  "azure",
  "sql",
  "vue-facing-decorator",
  "lodash",
  "blade-templates",
];
</script>
<style lang="scss">
.vue-tech-stack {
  width: 100%;
  max-width: 400px;
  @media (max-width: 555px) {
    margin-bottom: 20px;
    max-width: 100%;
  }
  &__title {
    padding: 5px;
    & p {
      font-weight: 300;
    }
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: start;
  }
  &__item {
    padding: 5px;
    &--active {
      color: var(--red);
    }
  }
}
</style>

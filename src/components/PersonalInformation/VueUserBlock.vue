<template>
  <section class="vue-user-block flex">
    <div>
      <vue-avatar class="component-avatar" />
      <vue-tech-stack />
    </div>
    <div class="w-70 description-container">
      <vue-user-description class="mb-20" />
      <vue-working-description />
    </div>
  </section>
</template>
<script lang="ts" setup>
import VueAvatar from "./VueAvatar.vue";
import VueUserDescription from "./VueUserDescription.vue";
import VueWorkingDescription from "./VueWorkingDescription.vue";
import VueTechStack from "./VueTechStack.vue";
</script>
<style lang="scss">
.vue-user-block {
  gap: 3%;
  justify-content: center;
  align-items: self-start;
  @media (max-width: 555px) {
    flex-direction: column;
    gap: 0%;
    align-items: center;
  }
}
.component-avatar {
  margin-bottom: 6%;
}
.description-container {
  @media (max-width: 555px) {
    width: 100%;
  }
}
</style>

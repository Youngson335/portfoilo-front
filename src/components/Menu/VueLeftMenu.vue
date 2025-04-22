<template>
  <div class="vue-left-menu">
    <p :class="{ 'vue-left-menu__active': props.isActive }" @click="onClick">
      Обо мне
    </p>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, withDefaults, defineEmits } from "vue";
import ComponentEvents from "@/emits";

const emits = defineEmits([ComponentEvents.CLICK]);

const props = withDefaults(
  defineProps<{
    isActive: boolean;
  }>(),
  {
    isActive: true,
  }
);

const onClick = () => emits(ComponentEvents.CLICK, "bio");
</script>
<style lang="scss">
.vue-left-menu {
  & p {
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      color: var(--red);
      transition: all 0.2s ease;
    }
  }
  &__active {
    border-bottom: 1px solid var(--red);
    color: var(--red);
  }
}
</style>

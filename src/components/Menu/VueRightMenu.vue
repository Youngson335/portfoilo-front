<template>
  <div class="vue-right-menu">
    <p :class="{ 'vue-right-menu__active': props.isActive }" @click="onClick">
      Портфолио
    </p>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import ComponentEvents from "@/emits";

const emits = defineEmits([ComponentEvents.CLICK]);

const props = defineProps<{
  isActive: boolean;
}>();

const onClick = () => {
  emits(ComponentEvents.CLICK, "portfolio");
};
</script>
<style lang="scss">
.vue-right-menu {
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

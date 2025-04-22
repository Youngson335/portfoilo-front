<template>
  <div class="vue-button">
    <button class="p-10" @click="onClick">
      <slot></slot>
    </button>
  </div>
</template>
<script lang="ts" setup>
import { defineEmits } from "vue";
import ComponentEvents from "@/emits";

const emits = defineEmits([ComponentEvents.CLICK]);
const onClick = () => {
  emits(ComponentEvents.CLICK);
};
</script>
<style lang="scss">
.vue-button {
  & button {
    background: none;
    border: none;
    width: 100%;
    background: var(--light-gray);
    font-size: 15px;
    border-radius: var(--radius);
    color: var(--white);
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      scale: 1.05;
      transition: 0.4s ease;
    }
  }
}
</style>

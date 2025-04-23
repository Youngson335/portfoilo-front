<template>
  <div class="vue-button">
    <button class="p-10" :class="`vue-button-${props.color}`" @click="onClick">
      <slot></slot>
    </button>
  </div>
</template>
<script lang="ts" setup>
import { defineEmits, defineProps, withDefaults } from "vue";
import ComponentEvents from "@/emits";

const props = withDefaults(
  defineProps<{
    color?: "red" | "green";
  }>(),
  {
    color: "red",
  }
);

const emits = defineEmits([ComponentEvents.CLICK]);
const onClick = () => {
  emits(ComponentEvents.CLICK);
};
</script>
<style lang="scss" scoped>
.vue-button {
  &-red {
    background: var(--red) !important;
  }
  &-green {
    background: var(--green) !important;
  }
  & button {
    border: none;
    width: 100%;
    background: var(--red);
    font-size: 15px;
    border-radius: var(--radius);
    color: var(--white);
    cursor: pointer;
    transition: 0.4s ease;
    font-family: "proximanova";
    &:hover {
      scale: 1.02;
      transition: 0.4s ease;
    }
  }
}
</style>

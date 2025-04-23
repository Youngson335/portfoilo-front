<template>
  <button
    class="vue-arrow-button shadow-block"
    :class="{
      'vue-arrow-button__left': props.rotation === 'left',
      'vue-arrow-button__disabled': props.isDisabled,
    }"
    @click="!props.isDisabled && $emit('click')"
    :style="{ height: `${props.maxHeight}px` }"
    :disabled="props.isDisabled"
  >
    <img class="vue-arrow-button--img" :src="arrow" alt="arrow" />
  </button>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";
import { arrow } from "@/assets/icons";

const props = withDefaults(
  defineProps<{
    rotation: "left" | "right";
    isDisabled?: boolean;
    maxHeight?: number;
  }>(),
  {
    rotation: "right",
    isDisabled: false,
    maxHeight: 400,
  }
);
</script>

<style lang="scss" scoped>
.vue-arrow-button {
  background: var(--white);
  border: none;
  cursor: pointer;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  &__left {
    transform: rotate(180deg);
  }

  &__disabled {
    cursor: not-allowed;
  }

  &--img {
    display: block;
    width: 24px;
    height: 24px;
  }
}
</style>

<template>
  <div class="vue-portfolio-preview shadow-block" @click="onClick">
    <div class="vue-portfolio-preview__image mb-20">
      <img :src="props.work.img" alt="" />
    </div>
    <p class="mb-20">{{ props.work.title }}</p>
    <vue-button @click="onClick">Подробнее...</vue-button>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import { WorkPreview } from "@/store/portfolio";
import VueButton from "../Buttons/VueButton.vue";
import ComponentEvents from "@/emits";

const props = defineProps<{
  work: WorkPreview;
}>();

const emits = defineEmits([ComponentEvents.CHANGE]);

const onClick = () => {
  emits(ComponentEvents.CHANGE, props.work.id);
};
</script>
<style lang="scss">
.vue-portfolio-preview {
  max-width: 300px;
  height: 30vh;
  cursor: pointer;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    scale: 1.05;
    transition: 0.3s ease;
  }
  &__image {
    border-radius: var(--radius);
    overflow: hidden;
    width: 100%;
    height: 60%;
    & img {
      width: 100%;
      display: block;
      object-fit: cover;
    }
  }
}
</style>

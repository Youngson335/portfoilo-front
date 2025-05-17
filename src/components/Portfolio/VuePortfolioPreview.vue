<template>
  <div class="vue-portfolio-preview" @click="onClick">
    <div class="vue-portfolio-preview__image aspect-ratio">
      <div v-if="isLoadingImage" class="vue-portfolio-preview__skeleton">
        Загрузка...
      </div>
      <img
        loading="eager"
        v-show="!isLoadingImage"
        :src="props.work.img"
        alt="preview"
        @load="isLoadingImage = false"
        @error="onImageError"
      />
      <vue-label-background>
        +{{ props.work.countImage }}
      </vue-label-background>
    </div>

    <p class="vue-portfolio-preview__title">{{ props.work.title }}</p>
    <vue-button :color="'red'" @click="onClick">Подробнее...</vue-button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref } from "vue";
import { WorkPreview } from "@/store/portfolio";
import VueButton from "../Buttons/VueButton.vue";
import ComponentEvents from "@/emits";
import VueLabelBackground from "../Label/VueLabelBackground.vue";

const props = defineProps<{ work: WorkPreview }>();
const emits = defineEmits([ComponentEvents.CHANGE]);
const isLoadingImage = ref(true);

const onClick = () => {
  emits(ComponentEvents.CHANGE, props.work.id);
};

const onImageError = () => {
  isLoadingImage.value = false;
};
</script>

<style lang="scss" scoped>
.vue-portfolio-preview {
  width: 100%;
  max-width: 300px;
  height: 300px;
  border-radius: var(--radius);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.3s ease;
  background-color: #fff;
  min-width: 310px;

  &:hover {
    transform: scale(1.03);
  }

  &__image {
    position: relative;
    border-radius: var(--radius);
    overflow: hidden;
    margin-bottom: 16px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  &__skeleton {
    position: absolute;
    inset: 0;
    background-color: #f0f0f0;
    color: #aaa;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 16px;
    color: #333;
  }
}

/* 📐 Обеспечиваем одинаковую пропорцию изображения */
.aspect-ratio {
  width: 100%;
  aspect-ratio: 4 / 3;
  position: relative;
}
</style>

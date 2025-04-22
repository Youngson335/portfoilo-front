<template>
  <div class="vue-portfolio">
    <div
      class="flex vue-portfolio-preview__container"
      v-animation="{
        delay: 0.05,
        selector: '.vue-portfolio-preview__wrapper',
      }"
    >
      <div
        class="vue-portfolio-preview__wrapper"
        v-for="work of works"
        :key="work.id"
      >
        <vue-portfolio-preview
          class="mb-20 component"
          :work="work"
          @change="onChangeWork"
        />
      </div>
    </div>

    <vue-modal v-model:isOpen="isModalOpen">
      <vue-carousel :images="selected_work!.images" />
    </vue-modal>
  </div>
</template>
<script lang="ts" setup>
import usePortfolioStore from "@/store/portfolio";
import VuePortfolioPreview from "./VuePortfolioPreview.vue";
import VueModal from "../Modal/VueModal.vue";
import { WorkPreview, CompleteWork } from "@/store/portfolio";
import { computed, ref } from "vue";
import VueCarousel from "./VueCarousel.vue";

const store = usePortfolioStore();

const isModalOpen = ref(false);

const works = computed((): WorkPreview[] => {
  return store.works;
});

const selected_work = ref<null | CompleteWork>(null);

const onChangeWork = (work_id: number) => {
  const work = store.findWorkById(work_id);
  if (work) {
    selected_work.value = work;
    isModalOpen.value = true;
  }
};
</script>
<style lang="scss">
.vue-portfolio {
  &-preview {
    &__container {
      flex-wrap: wrap;
      gap: 3%;
      justify-content: center;
      align-items: self-start;
    }
  }
}
</style>

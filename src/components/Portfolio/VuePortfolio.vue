<template>
  <div class="vue-portfolio">
    <div class="mb-20 flex-center">
      <vue-button :color="'green'" @click="onOpenReviews"
        >Смотреть отзывы</vue-button
      >
    </div>

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

    <vue-modal
      v-model:is-open="isModalPortfolioOpen"
      :is-loading="isLoadingImage"
    >
      <div
        class="work-info"
        v-animation="{
          delay: 0.12,
          selector: '.work-info-item',
        }"
      >
        <div class="work-info__title mb-20 work-info-item">
          <h2>{{ selected_work?.title }}</h2>
        </div>
        <div class="work-info__description mb-20 work-info-item">
          <p>Описание:</p>
          <span>{{ selected_work?.description }}</span>
        </div>
        <div class="work-info-links mb-20">
          <div class="work-info-links__preview mb-5 work-info-item">
            <p>
              Предпросмотр:
              <a
                v-if="selected_work?.link"
                :href="selected_work?.link"
                target="_blank"
              >
                {{ selected_work?.link }}
              </a>
            </p>
            <span v-if="!selected_work?.link">не доступен!</span>
          </div>
          <div class="work-info-links__git mb-5 work-info-item">
            <p>
              Ссылка на git:
              <a
                v-if="selected_work?.gitHub"
                :href="selected_work?.gitHub"
                target="_blank"
              >
                {{ selected_work?.gitHub }}
              </a>
            </p>
            <span v-if="!selected_work?.gitHub">не доступна!</span>
          </div>
        </div>
      </div>
      <div v-if="selected_work?.images">
        <vue-carousel :images="selected_work!.images" />
      </div>
    </vue-modal>

    <vue-modal v-model:is-open="isModalReviewOpen">
      <div
        v-animation="{
          delay: 0.2,
          selector: '.review-item',
        }"
      >
        <vue-review-card
          v-for="review of reviews"
          :key="review.id"
          :review="review"
          class="review-item mb-20"
        />
      </div>
    </vue-modal>
  </div>
</template>
<script lang="ts" setup>
import usePortfolioStore from "@/store/portfolio";
import VuePortfolioPreview from "./VuePortfolioPreview.vue";
import VueModal from "../Modal/VueModal.vue";
import { WorkPreview, CompleteWork } from "@/store/portfolio";
import { computed, ref, inject } from "vue";
import VueCarousel from "./VueCarousel.vue";
import loadedWorkPreview from "@/methods/loadedWorkPreview";
import { NotificationApi } from "@/plugins/notification";
import VueReviewCard from "../Cards/VueReviewCard.vue";
import VueButton from "../Buttons/VueButton.vue";
import { useReviewStore } from "@/store/review";
import { Review } from "@/store/review";

const portfolioStore = usePortfolioStore();
const reviewStore = useReviewStore();

const notification = inject<NotificationApi>("notification");
const isModalPortfolioOpen = ref(false);
const isModalReviewOpen = ref(false);
const isLoadingImage = ref(false);

const works = computed((): WorkPreview[] => {
  return portfolioStore.works;
});

const reviews = computed((): Review[] => {
  return reviewStore.reviews;
});

const selected_work = ref<null | CompleteWork>(null);

const onOpenReviews = () => {
  isModalReviewOpen.value = true;
};

const onChangeWork = async (work_id: number) => {
  isModalPortfolioOpen.value = true;
  isLoadingImage.value = true;

  console.log("work_id", work_id);

  const work = portfolioStore.findWorkById(work_id);
  if (work) {
    const response = await loadedWorkPreview(work.images);
    if (response) {
      selected_work.value = work;

      isLoadingImage.value = false;
    } else {
      notification!.error("Ошибка загрузки портфолио");
      isLoadingImage.value = false;
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin links {
  display: flex;
  & p {
    margin-right: 5px;
  }
}
a {
  color: var(--green);
}
.vue-portfolio {
  &-preview {
    &__container {
      flex-wrap: wrap;
      gap: 3%;
      justify-content: center;
      align-items: self-start;
      max-width: 1000px;
      margin: 0 auto;
    }
  }
}
.work-info {
  &__title {
    & h2 {
      font-weight: 300;
    }
  }
  &-links {
    & span {
      color: var(--red);
    }
    &__preview {
      @include links();
    }
    &__git {
      @include links();
    }
  }
}
</style>

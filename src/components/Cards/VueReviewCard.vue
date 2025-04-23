<template>
  <div class="vue-review-card shadow-block">
    <div class="vue-review-card__content">
      <div class="review-header">
        <div class="avatar">{{ props.review.initials }}</div>
        <div class="author-info">
          <div class="author-name">{{ props.review.author }}</div>
          <div class="author-role">фриланс биржа</div>
        </div>
      </div>

      <div class="review-rating">
        <span v-for="star in 5" :key="star">
          <span v-if="star <= props.review.rating" class="star filled">★</span>
          <span v-else class="star">★</span>
        </span>
      </div>

      <p class="review-description">
        {{ props.review.description }}
      </p>

      <div
        class="read-more"
        @click="onShowReviewImage"
        v-if="!isShowReviewImage"
      >
        подробнее
      </div>
    </div>

    <div
      class="vue-review-card__preview"
      v-if="isShowReviewImage"
      v-animation="{
        delay: 0.2,
        selector: '.review-image',
      }"
    >
      <div class="review-image">
        <img :src="props.review.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { Review } from "@/store/review";

const props = defineProps<{
  review: Review;
}>();

const isShowReviewImage = ref(false);

const onShowReviewImage = () => {
  isShowReviewImage.value = true;
};
</script>

<style scoped lang="scss">
.vue-review-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 965px) {
    flex-direction: column;
    align-items: start;
  }
  &__content {
    max-width: 400px;
    border-radius: 8px;
    background-color: var(--white);
    padding: 24px;
    width: 45%;
    @media (max-width: 965px) {
      width: 100%;
    }
  }
  &__preview {
    max-width: 600px;
    @media (max-width: 965px) {
      max-width: 100%;
    }
    & img {
      width: 100%;
    }
  }
}

.review-header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.avatar {
  height: 48px;
  width: 48px;
  background-color: var(--green);
  color: white;
  font-size: 18px;
  font-weight: 300;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  color: #111827;
  font-weight: 300;
}

.author-role {
  color: #6b7280;
  font-size: 14px;
}

.review-rating {
  color: var(--green);
  font-size: 20px;
  margin-top: 12px;
}

.star {
  color: #d1d5db;
}

.star.filled {
  color: var(--green);
}

.review-description {
  color: #374151;
  margin-top: 12px;
}

.read-more {
  color: var(--green);
  font-weight: 200;
  margin-top: 12px;
  cursor: pointer;
}

.read-more:hover {
  text-decoration: underline;
}
</style>

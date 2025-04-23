<template>
  <div class="vue-review-card shadow-block">
    <div class="review-header">
      <div class="avatar">DJ</div>
      <div class="author-info">
        <div class="author-name">{{ author }}</div>
        <div class="author-role">фриланс биржа</div>
      </div>
    </div>

    <div class="review-rating">
      <span v-for="star in 5" :key="star">
        <span v-if="star <= props.rating" class="star filled">★</span>
        <span v-else class="star">★</span>
      </span>
    </div>

    <p class="review-description">
      {{ props.description }}
    </p>

    <div class="read-more">подробнее</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  rating: number;
  description: string;
}>();

const author = "Donald Jackman";
</script>

<style scoped>
.vue-review-card {
  max-width: 400px;
  border-radius: 8px;
  background-color: var(--white);
  padding: 24px;
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
  font-weight: 600;
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

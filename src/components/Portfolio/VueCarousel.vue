<template>
  <div class="image-carousel">
    <div class="carousel-wrapper">
      <button
        class="arrow left-arrow"
        @click="prevImage"
        :disabled="currentIndex === 0"
      >
        &larr;
      </button>

      <div
        class="image-container"
        ref="imageContainer"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
      >
        <transition :name="transitionName" mode="out-in">
          <img
            :key="currentIndex"
            :src="images[currentIndex].img"
            :alt="`Image ${currentIndex + 1}`"
            class="carousel-image"
            @click="emit('image-click', currentIndex)"
          />
        </transition>
      </div>

      <button
        class="arrow right-arrow"
        @click="nextImage"
        :disabled="currentIndex === images.length - 1"
      >
        &rarr;
      </button>
    </div>

    <div v-if="showIndicators" class="indicators">
      <span
        v-for="(_, index) in images"
        :key="index"
        :class="['indicator', { active: index === currentIndex }]"
        @click="goToImage(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  withDefaults,
  defineProps,
  defineEmits,
  onMounted,
  onBeforeUnmount,
} from "vue";
import { Images } from "@/store/portfolio";

interface Props {
  images: Images[];
  showIndicators?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showIndicators: true,
});

const emit = defineEmits<{
  (e: "image-click", index: number): void;
}>();

const currentIndex = ref(0);
const transitionDirection = ref<"next" | "prev">("next");
const touchStartX = ref(0);
const touchEndX = ref(0);
const imageContainer = ref<HTMLElement | null>(null);

const transitionName = computed(() => {
  return `slide-${transitionDirection.value}`;
});

const nextImage = () => {
  if (currentIndex.value < props.images.length - 1) {
    transitionDirection.value = "next";
    currentIndex.value++;
  }
};

const prevImage = () => {
  if (currentIndex.value > 0) {
    transitionDirection.value = "prev";
    currentIndex.value--;
  }
};

const goToImage = (index: number) => {
  transitionDirection.value = index > currentIndex.value ? "next" : "prev";
  currentIndex.value = index;
};

// Touch events for mobile swipe
const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.touches[0].clientX;
};

const handleTouchMove = (e: TouchEvent) => {
  if (!touchStartX.value) return;
  touchEndX.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (!touchStartX.value || !touchEndX.value) return;

  const diff = touchStartX.value - touchEndX.value;
  if (diff > 50) {
    nextImage(); // Swipe left
  } else if (diff < -50) {
    prevImage(); // Swipe right
  }

  touchStartX.value = 0;
  touchEndX.value = 0;
};

// Handle window resize for responsive adjustments
const isMobile = ref(window.innerWidth < 768);

const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  if (imageContainer.value) {
    imageContainer.value.addEventListener("touchend", handleTouchEnd);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  if (imageContainer.value) {
    imageContainer.value.removeEventListener("touchend", handleTouchEnd);
  }
});
</script>

<style scoped>
.image-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
}

.carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  position: relative;
}

.image-container {
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  position: relative;
  min-height: 500px;
  touch-action: pan-y; /* Enable vertical scroll */
}

.carousel-image {
  width: 100%;
  height: auto;
  max-height: 70vh;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  user-select: none;
  -webkit-user-drag: none;
}

.arrow {
  background: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
}

.arrow:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.9);
  transform: scale(1.1);
}

.arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.indicators {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 2;
  background: var(--white);
  padding: 20px;
  max-width: 30%;
  margin: 0 auto;
  border-radius: var(--radius);
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--light-gray);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background-color: var(--green);
  transform: scale(1.3);
}

.indicator:hover {
  background-color: rgba(255, 255, 255, 0.7);
}

/* Анимации перехода */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.slide-next-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-next-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-prev-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-prev-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Mobile styles */
@media (max-width: 768px) {
  .carousel-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .arrow {
    position: static;
    margin: 10px 0;
  }

  .image-container {
    min-height: 300px;
    order: 1;
  }

  .left-arrow {
    order: 2;
    margin-right: 0;
  }

  .right-arrow {
    order: 3;
    margin-left: 0;
  }

  .indicators {
    max-width: 80%;
    padding: 15px;
    order: 4;
  }
}

/* Enable scrolling on mobile */
@media (hover: none) {
  .image-container {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>

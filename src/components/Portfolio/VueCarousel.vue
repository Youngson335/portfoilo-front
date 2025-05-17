<template>
  <div class="image-carousel">
    <div class="carousel-wrapper">
      <div
        class="image-container"
        ref="container"
        :style="{ height: containerHeight + 'px' }"
      >
        <div
          class="image-wrapper"
          ref="imageWrapper"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
        >
          <transition :name="transitionName" mode="out-in">
            <img
              loading="lazy"
              :key="currentIndex"
              :src="images[currentIndex].img"
              :alt="`Image ${currentIndex + 1}`"
              class="carousel-image"
              @load="handleImageLoad"
              @click="emit('image-click', currentIndex)"
            />
          </transition>
        </div>
      </div>

      <div class="arrows" v-if="!isMobile && images.length > 1">
        <vue-arrow-button
          @click="prevImage"
          :is-disabled="currentIndex === 0"
          :rotation="'left'"
          :height="containerHeight"
        />
        <vue-arrow-button
          @click="nextImage"
          :is-disabled="currentIndex === images.length - 1"
          :rotation="'right'"
          :height="containerHeight"
        />
      </div>
    </div>

    <div v-if="showIndicators && images.length > 1" class="indicators">
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
import VueArrowButton from "../Buttons/VueArrowButton.vue";

interface Props {
  images: Images[];
  showIndicators?: boolean;
  initialHeight?: number;
}

const props = withDefaults(defineProps<Props>(), {
  showIndicators: true,
  initialHeight: 400,
});

const emit = defineEmits<{
  (e: "image-click", index: number): void;
}>();

const currentIndex = ref(0);
const transitionDirection = ref<"next" | "prev">("next");
const touchStartX = ref(0);
const touchEndX = ref(0);
const container = ref<HTMLElement | null>(null);
const imageWrapper = ref<HTMLElement | null>(null);
const containerHeight = ref(props.initialHeight);
const isMobile = ref(window.innerWidth < 700);
const imageLoaded = ref(false);
const isTransitioning = ref(false);

const transitionName = computed(() => {
  return imageLoaded.value ? `slide-${transitionDirection.value}` : "";
});

const nextImage = () => {
  if (isTransitioning.value || currentIndex.value >= props.images.length - 1)
    return;

  isTransitioning.value = true;
  imageLoaded.value = false;
  transitionDirection.value = "next";
  currentIndex.value++;
};

const prevImage = () => {
  if (isTransitioning.value || currentIndex.value <= 0) return;

  isTransitioning.value = true;
  imageLoaded.value = false;
  transitionDirection.value = "prev";
  currentIndex.value--;
};

const goToImage = (index: number) => {
  if (isTransitioning.value || index === currentIndex.value) return;

  isTransitioning.value = true;
  imageLoaded.value = false;
  transitionDirection.value = index > currentIndex.value ? "next" : "prev";
  currentIndex.value = index;
};

const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.touches[0].clientX;
};

const handleTouchMove = (e: TouchEvent) => {
  if (!touchStartX.value) return;
  touchEndX.value = e.touches[0].clientX;

  // Prevent scrolling when swiping horizontally
  if (Math.abs(touchStartX.value - touchEndX.value) > 10) {
    e.preventDefault();
  }
};

const handleTouchEnd = () => {
  if (!touchStartX.value || !touchEndX.value) return;

  const diff = touchStartX.value - touchEndX.value;
  if (diff > 50) {
    nextImage();
  } else if (diff < -50) {
    prevImage();
  }

  touchStartX.value = 0;
  touchEndX.value = 0;
};

const handleImageLoad = () => {
  imageLoaded.value = true;
  updateContainerHeight();
  setTimeout(() => {
    isTransitioning.value = false;
  }, 300);
};

const updateContainerHeight = () => {
  if (container.value && imageWrapper.value) {
    const img = imageWrapper.value.querySelector(".carousel-image");
    if (img) {
      requestAnimationFrame(() => {
        containerHeight.value = img.clientHeight;
      });
    }
  }
};

const handleResize = () => {
  isMobile.value = window.innerWidth < 700;
  if (!isMobile.value) {
    updateContainerHeight();
  }
};

const handleWheel = (e: WheelEvent) => {
  if (isMobile.value || !container.value || isTransitioning.value) return;

  e.preventDefault();
  if (e.deltaX > 20) {
    nextImage();
  } else if (e.deltaX < -20) {
    prevImage();
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  if (container.value) {
    container.value.addEventListener("touchend", handleTouchEnd);
    container.value.addEventListener("wheel", handleWheel, { passive: false });

    containerHeight.value = props.initialHeight;

    let resizeObserver: ResizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        updateContainerHeight();
      });
      resizeObserver.observe(container.value);
    }

    onBeforeUnmount(() => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    });
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  if (container.value) {
    container.value.removeEventListener("touchend", handleTouchEnd);
    container.value.removeEventListener("wheel", handleWheel);
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
  width: 100%;
}

.carousel-wrapper {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
}

.image-container {
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  position: relative;
  transition: height 0.3s ease;
  max-height: 400px;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.carousel-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  user-select: none;
  -webkit-user-drag: none;
  object-fit: cover;
}

.arrows {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 900px;
  height: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 2;
}

.arrows > * {
  pointer-events: auto;
}

.indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 2;
  background: var(--white);
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;
  border-radius: var(--radius);
  flex-wrap: wrap;
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

/* Анимации перехода */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.3s ease;
}

.slide-next-enter-from {
  transform: translateX(100%);
  opacity: 0;
  position: absolute;
}

.slide-next-leave-to {
  transform: translateX(-100%);
  opacity: 0;
  position: absolute;
}

.slide-prev-enter-from {
  transform: translateX(-100%);
  opacity: 0;
  position: absolute;
}

.slide-prev-leave-to {
  transform: translateX(100%);
  opacity: 0;
  position: absolute;
}

@media (max-width: 700px) {
  .image-container {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    height: auto !important;
  }

  .carousel-image {
    max-height: none;
  }
}
</style>

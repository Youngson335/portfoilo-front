<template>
  <transition name="slide-up" appear>
    <div v-if="isOpen" class="modal-overlay" @click="closeModal">
      <div class="vue-modal" @click.stop>
        <button class="close-btn" @click="closeModal">&times;</button>
        <div class="modal-content" v-loading="props.isLoading">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { watch, defineEmits, defineProps, onBeforeUnmount } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  isLoading: {
    type: Boolean,
  },
});

const emit = defineEmits(["update:isOpen"]);

const closeModal = () => {
  emit("update:isOpen", false);
};

// Блокировка скролла
watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
);

onBeforeUnmount(() => {
  document.body.style.overflow = "";
});
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.vue-modal {
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 70vh;
  background-color: var(--white);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform: translateY(0);
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  color: var(--text-color);
  transition: color 0.2s ease;

  &:hover {
    color: var(--primary-color);
  }
}

.modal-content {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  padding-top: 40px;
  width: 100%;
}

/* Анимации */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  .vue-modal {
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0.5;

  .vue-modal {
    transform: translateY(100%);
  }
}

.slide-up-enter-to,
.slide-up-leave-from {
  opacity: 1;

  .vue-modal {
    transform: translateY(0);
  }
}
</style>

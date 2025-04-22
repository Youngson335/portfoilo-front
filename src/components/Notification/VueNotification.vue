<template>
  <div class="notifications-container">
    <transition-group name="notification">
      <div
        v-for="notification in notifications"
        :key="notification.id"
        role="alert"
        class="notification"
        :class="[
          `notification--${notification.type}`,
          { 'notification--closable': notification.closable },
        ]"
      >
        <div class="notification__icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <p class="notification__text">{{ notification.text }}</p>
        <button
          v-if="notification.closable"
          class="notification__close"
          @click="removeNotification(notification.id)"
        >
          &times;
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from "vue";

interface Notification {
  id: number;
  type: "success" | "error" | "info" | "warning";
  text: string;
  duration: number;
  closable: boolean;
}

const notifications = ref<Notification[]>([]);

const addNotification = (notification: Omit<Notification, "id">) => {
  const id = Date.now();
  notifications.value.push({ id, ...notification });

  if (notification.duration > 0) {
    setTimeout(() => {
      removeNotification(id);
    }, notification.duration);
  }
};

const removeNotification = (id: number) => {
  notifications.value = notifications.value.filter((n) => n.id !== id);
};

// Экспортируем методы для использования в плагине
defineExpose({
  addNotification,
  removeNotification,
});
</script>

<style scoped>
.notifications-container {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
  width: 300px;
}

.notification {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 4px;
  border-left: 4px solid;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: all 0.3s ease;
}

.notification__icon {
  margin-right: 12px;
  display: flex;
  align-items: center;
}

.notification__icon svg {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: currentColor;
}

.notification__text {
  margin: 0;
  font-size: 14px;
  font-weight: 300;
  flex-grow: 1;
}

.notification__close {
  margin-left: 12px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  color: inherit;
}

/* Notification types */
.notification--success {
  color: #2e7d32;
  background-color: #edf7ed;
  border-color: #2e7d32;
}

.notification--error {
  color: #d32f2f;
  background-color: #fdecea;
  border-color: #d32f2f;
}

.notification--info {
  color: #0288d1;
  background-color: #e8f4fd;
  border-color: #0288d1;
}

.notification--warning {
  color: #ed6c02;
  background-color: #fff4e5;
  border-color: #ed6c02;
}

@media (prefers-color-scheme: dark) {
  .notification {
    background-color: #2d2d2d;
  }

  .notification--success {
    color: #dbd531;
    background-color: #8f8c32;
    border-color: #8f8c32;
  }

  .notification--error {
    color: #f44336;
    background-color: #7f0000;
    border-color: #f44336;
  }

  .notification--info {
    color: #29b6f6;
    background-color: #01579b;
    border-color: #29b6f6;
  }

  .notification--warning {
    color: #ffa726;
    background-color: #e65100;
    border-color: #ffa726;
  }
}

/* Animations */
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from,
.notification-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

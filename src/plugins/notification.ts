import { App, createApp, Plugin } from "vue";
import VueNotification from "@/components/Notification/VueNotification.vue";

export interface NotificationApi {
  success: (
    text: string,
    options?: { duration?: number; closable?: boolean }
  ) => void;
  error: (
    text: string,
    options?: { duration?: number; closable?: boolean }
  ) => void;
  info: (
    text: string,
    options?: { duration?: number; closable?: boolean }
  ) => void;
  warning: (
    text: string,
    options?: { duration?: number; closable?: boolean }
  ) => void;
}

interface NotificationOptions {
  duration?: number;
  closable?: boolean;
}

// Создаем глобальную переменную для хранения экземпляра
let notificationInstance: any = null;

export const notification = {
  success(text: string, options?: NotificationOptions) {
    if (!notificationInstance) {
      console.error("Notification plugin not initialized");
      return;
    }
    notificationInstance.addNotification({
      type: "success",
      text,
      duration: options?.duration ?? 4000,
      closable: options?.closable ?? true,
    });
  },
  error(text: string, options?: NotificationOptions) {
    if (!notificationInstance) {
      console.error("Notification plugin not initialized");
      return;
    }
    notificationInstance.addNotification({
      type: "error",
      text,
      duration: options?.duration ?? 4000,
      closable: options?.closable ?? true,
    });
  },
  // Аналогично для error, info, warning...
};

const notificationPlugin: Plugin = {
  install(app: App) {
    const notificationApp = createApp(VueNotification);
    const mountPoint = document.createElement("div");
    document.body.appendChild(mountPoint);

    notificationInstance = notificationApp.mount(mountPoint);

    // Регистрируем глобально
    app.config.globalProperties.$notification = notification;
    app.provide("notification", notification);
  },
};

export default notificationPlugin;

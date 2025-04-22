<template>
  <div
    class="vue-user-description w-100 shadow-block p-20 flex"
    v-animation="{
      delay: 0.1,
      selector: '.user-info',
    }"
  >
    <div>
      <div class="user-info mb-10">
        <vue-label>Имя</vue-label>
        <p>Владислав</p>
      </div>
      <div class="user-info mb-10">
        <vue-label> Фамилия </vue-label>
        <p>Толстов</p>
      </div>
      <div class="user-info mb-10">
        <vue-label> Отчество </vue-label>
        <p>Денисович</p>
      </div>
      <div class="user-info mb-10">
        <vue-label> Дата рождения </vue-label>
        <p>15.06.2005 (19лет)</p>
      </div>
    </div>

    <div>
      <div class="user-info mb-10">
        <vue-label>Телеграм</vue-label>
        <p
          class="copy-text"
          @click="onCopyText('young_son335', TypeCopyText.TG)"
        >
          @young_son335
        </p>
      </div>
      <div class="user-info mb-10">
        <vue-label>Почта</vue-label>
        <p
          class="copy-text"
          @click="onCopyText('tolstovvlad335@gmail.com', TypeCopyText.MAIL)"
        >
          tolstovvlad335@gmail.com
        </p>
      </div>
      <div class="user-info mb-10">
        <vue-label>Номер телефона</vue-label>
        <p
          class="copy-text"
          @click="onCopyText('79145766973', TypeCopyText.PHONE)"
        >
          7-(914)-576-69-73
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import VueLabel from "../Label/VueLabel.vue";
import { inject } from "vue";
import { NotificationApi } from "@/plugins/notification";

const notification = inject<NotificationApi>("notification");

enum TypeCopyText {
  PHONE = "phone",
  TG = "tg",
  MAIL = "mail",
}

const onCopyText = async (text: string, type: TypeCopyText) => {
  try {
    if (!navigator.clipboard) {
      throw new Error("Clipboard API not supported");
    }
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      document.body.appendChild(textarea);
      textarea.select();

      const successful = document.execCommand("copy");
      document.body.removeChild(textarea);

      if (!successful) {
        throw new Error("Fallback copy failed");
      }

      if (type === TypeCopyText.MAIL) {
        notification!.success("Почта скопирована!");
      }

      if (type === TypeCopyText.PHONE) {
        notification!.success("Телефон скопирован!");
      }

      if (type === TypeCopyText.TG) {
        notification!.success("Телеграмм скопирован!");
      }

      return true;
    } catch (fallbackError) {
      return false;
    }
  }
};
</script>
<style lang="scss">
.user-info {
  & p {
    font-size: 17px;
  }
}
.copy-text {
  color: var(--red);
  cursor: pointer;
  transition: all 0.3s ease;
  &:active {
    scale: 1.05;
    transition: all 0.3s ease;
  }
}
</style>

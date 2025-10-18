<template>
  <div class="admin-page container p-20">
    <div class="admin-page__title">
      <h2>Админка</h2>
    </div>
    <div class="user-info mb-10 flex" v-if="visits">
      <vue-label class="admin-page--label">
        Кол-во посещений моего резюме:
      </vue-label>
      <!-- Обращаемся к свойству count объекта visits -->
      <p>{{ visits.count }}</p>
    </div>
    <div v-else class="loading">Загрузка...</div>
    <div style="width: 100%; display: flex; justify-content: start">
      <vue-button style="max-width: 200px" :color="'green'">
        Вернуться на главную
      </vue-button>
    </div>
    <div v-if="error" class="error-message">Ошибка: {{ error }}</div>
  </div>
</template>

<script lang="ts" setup>
import getCountVisit from "@/requests/get/getCountVisits";
import type RequestVisits from "@/requests/RequestVisits";
import VueLabel from "@/components/Label/VueLabel.vue";
import VueButton from "@/components/Buttons/VueButton.vue";
import { ref, onMounted } from "vue";

const visits = ref<RequestVisits | null>(null);
const error = ref<string | null>(null);

const init = async () => {
  try {
    visits.value = await getCountVisit();
  } catch (err) {
    error.value = "Не удалось загрузить данные о посещениях";
    console.error("Error fetching visits:", err);
  }
};

onMounted(() => {
  init();
});
</script>

<style lang="scss">
.admin-page {
  &__title {
    margin-bottom: 20px;
    h2 {
      font-size: 40px;
    }
  }
  &--label {
    margin-right: 10px;
  }

  .loading {
    color: #666;
    font-style: italic;
    margin-bottom: 20px;
  }

  .error-message {
    color: #ff4444;
    background: #ffeaea;
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
  }
}
</style>

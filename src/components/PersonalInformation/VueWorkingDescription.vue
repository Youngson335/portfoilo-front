<template>
  <div
    class="vue-working-description shadow-block w-100 p-20"
    v-animation="{
      delay: 0.1,
      selector: '.working-info',
    }"
  >
    <div class="working-info mb-10">
      <vue-label>Опыт работы</vue-label>
      <p><span>2 года</span> коммерческой разработки</p>
    </div>

    <div class="working-info mb-10">
      <vue-label>Кол-во проектов</vue-label>
      <p>Более <span>20</span></p>
    </div>

    <div class="working-info mb-10">
      <vue-label>Подробнее</vue-label>

      <div class="experience-details">
        <p class="mb-5 working-info">На данный момент работаю в компании</p>

        <p class="mb-5 working-info">
          <span>Фриланс-опыт:</span><br />
          - Работа на биржах фриланса<br />
          - Коммуникация с клиентами и разработчиками<br />
          - Полный цикл разработки с нуля
        </p>

        <p class="mb-5 working-info">
          <span>Уникальный навык:</span><br />
          Разработка "без дизайна" - создание UI/UX в процессе работы<br />
          с согласованием непосредственно с клиентом
        </p>

        <p class="mb-5 working-info">
          <span>Технологический стек:</span><br />
          - Web-приложения (Vue.js)<br />
          - Telegram Mini Apps (TMA)
        </p>

        <p class="working-info">
          <span>Командная работа:</span><br />
          Опыт командной разработки как в компании, так и на личных проектах
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import VueLabel from "../Label/VueLabel.vue";
</script>
<style lang="scss">
.working-info {
  & p {
    font-size: 17px;
  }
  & span {
    color: var(--green);
  }
}
</style>

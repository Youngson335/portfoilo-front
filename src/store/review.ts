import { defineStore } from "pinia";

export interface Review {
  id: number;
  description: string;
  title: string;
  author: string | null;
  rating: 1 | 2 | 3 | 4 | 5;
  initials: string;
  img: string;
}

interface ReviewState {
  reviews: Review[];
}

export const useReviewStore = defineStore("reviews", {
  state: (): ReviewState => ({
    reviews: [
      {
        id: 1,
        description:
          "Хороший специалист - быстро качественно, правки делать не пришлось, все завелось с первого раза Рекомендую!",
        title: "Сделать адаптивную версию сайта (Разработка / Фронтенд)",
        author: "Павел Владимиров",
        rating: 5,
        initials: "ПВ",
        img: require("@/assets/reviews/1.png"),
      },
      {
        id: 2,
        description:
          "Все отлично! Сделано все быстро и качественно, рекомендую!",
        title: "Сделать адаптивную версию сайта (Разработка / Фронтенд)",
        author: "Павел Владимиров",
        rating: 5,
        initials: "ПВ",
        img: require("@/assets/reviews/2.png"),
      },
      {
        id: 3,
        description:
          "Из всех исполнителей - самый лучший! Отвечал на вопросы, объяснял все, заказ был выполнен за 10 минут - все работает! Рекомендую к сотрудничеству!",
        title: "Мобильная версия (Разработка / Фронтенд).",
        author: "julia",
        rating: 5,
        initials: "J",
        img: require("@/assets/reviews/3.png"),
      },
      {
        id: 4,
        description:
          "Рекомендую. Исполнитель умеет работать в команде. Соблюдает тз! Соблюдает срок",
        title: "Frontend разработка (интернет магазин)",
        author: "SDU77",
        rating: 5,
        initials: "S",
        img: require("@/assets/reviews/4.png"),
      },
      {
        id: 5,
        description:
          "Я доволен выполненной работой, все сделано достаточно качественно, быстро и недорого. Рекомендую Влада как развивающегося frontend программиста!",
        title: "Карточка заявки на Vue.js 3 и Tailwind (Разработка / Фронтенд)",
        author: "Дмитрий Федоров",
        rating: 5,
        initials: "ДФ",
        img: require("@/assets/reviews/4.png"),
      },
    ],
  }),
});

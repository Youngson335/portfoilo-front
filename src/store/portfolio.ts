import { defineStore } from "pinia";

export interface WorkPreview {
  id: number;
  img: string;
  title: string;
}

export interface Images {
  id: number;
  img: string;
}

export interface CompleteWork {
  id: number;
  images: Images[];
  title: string;
  description: string;
  link: string | null;
  gitHub: string | null;
}

interface PortfolioState {
  works: WorkPreview[];
  completeWorks: CompleteWork[]; //TODO
}

const usePortfolioStore = defineStore("portfolio", {
  state: (): PortfolioState => ({
    works: [
      {
        id: 1,
        img: require("../assets/portfolio/work1/1.png"),
        title: "Сервис по вывозу мусора",
      },
      {
        id: 2,
        img: require("../assets/portfolio/work2/1.png"),
        title: "Тестовое задание для компании",
      },
      {
        id: 3,
        img: require("../assets/portfolio/work3/1.png"),
        title: "Верстка + анимация поезда",
      },
      {
        id: 4,
        img: require("../assets/portfolio/work4/1.png"),
        title: "Рекламный лендинг телеграм канала",
      },
      {
        id: 5,
        img: require("../assets/portfolio/work5/1.png"),
        title: "Телеграмм игра",
      },
      {
        id: 6,
        img: require("../assets/portfolio/work6/1.png"),
        title: "Интернет-магазин мебели",
      },
      {
        id: 7,
        img: require("../assets/portfolio/work7/1.png"),
        title: "Интернет-магазин кроссовок",
      },
      {
        id: 8,
        img: require("../assets/portfolio/work8/1.png"),
        title: "Сервис для аренды жилья",
      },
      {
        id: 9,
        img: require("../assets/portfolio/work9/1.png"),
        title: "Рекламный лендинг приложения",
      },
      {
        id: 10,
        img: require("../assets/portfolio/work10/1.png"),
        title: "Админ-панель для телеграмм приложения",
      },
      {
        id: 11,
        img: require("../assets/portfolio/work11/1.png"),
        title: "Рекламный лендинг заявок грузчиков",
      },
      {
        id: 12,
        img: require("../assets/portfolio/work12/1.png"),
        title: "Сервис записи в барбершопы Москвы",
      },
      {
        id: 13,
        img: require("../assets/portfolio/work13/1.png"),
        title: "Регистрация сервиса",
      },
      {
        id: 14,
        img: require("../assets/portfolio/work14/1.png"),
        title: "Благотворительный сайт",
      },
      {
        id: 15,
        img: require("../assets/portfolio/work15/1.png"),
        title: "Телеграмм игра",
      },
      {
        id: 16,
        img: require("../assets/portfolio/work16/1.png"),
        title: "Тестовое задание для компании",
      },
      {
        id: 17,
        img: require("../assets/portfolio/work17/1.png"),
        title: "Тестовое задание для компании",
      },
    ],

    completeWorks: [
      {
        id: 1,
        images: [
          {
            id: 1,
            img: require("../assets/portfolio/work1/1.png"),
          },
          {
            id: 2,
            img: require("../assets/portfolio/work1/2.png"),
          },
          {
            id: 3,
            img: require("../assets/portfolio/work1/3.png"),
          },
          {
            id: 4,
            img: require("../assets/portfolio/work1/4.png"),
          },
          {
            id: 5,
            img: require("../assets/portfolio/work1/5.png"),
          },
          {
            id: 6,
            img: require("../assets/portfolio/work1/6.png"),
          },
          {
            id: 7,
            img: require("../assets/portfolio/work1/7.png"),
          },
          {
            id: 8,
            img: require("../assets/portfolio/work1/8.png"),
          },
          {
            id: 9,
            img: require("../assets/portfolio/work1/9.png"),
          },
        ],
        title: "Сервис по вывозу мусора",
        description:
          "Разработка сервиса доставки по выносу мусора! Данное приложение разрабатывалось для TMA (telegram mini app)",
        link: null,
        gitHub: null,
      },
      {
        id: 2,
        images: [
          {
            id: 1,
            img: require("../assets/portfolio/work2/1.png"),
          },
          {
            id: 2,
            img: require("../assets/portfolio/work2/2.png"),
          },
          {
            id: 3,
            img: require("../assets/portfolio/work2/3.png"),
          },
          {
            id: 4,
            img: require("../assets/portfolio/work2/4.png"),
          },
          {
            id: 5,
            img: require("../assets/portfolio/work2/5.png"),
          },
        ],
        title: "Тестовое задание для компании",
        description: "Разработка тестового задания для компании на vuejs",
        link: "https://test-pricing-plans.vercel.app/",
        gitHub: "https://github.com/Youngson335/test-pricing-plans",
      },
      {
        id: 3,
        images: [
          {
            id: 1,
            img: require("../assets/portfolio/work3/1.png"),
          },
          {
            id: 2,
            img: require("../assets/portfolio/work3/2.png"),
          },
        ],
        title: "Верстка + анимация поезда",
        description: "Разработка анимации поезда",
        link: "https://delivery-murom-build.vercel.app/",
        gitHub: null,
      },
      {
        id: 4,
        images: [
          {
            id: 1,
            img: require("../assets/portfolio/work4/1.png"),
          },
          {
            id: 2,
            img: require("../assets/portfolio/work4/2.png"),
          },
          {
            id: 3,
            img: require("../assets/portfolio/work4/3.png"),
          },
          {
            id: 4,
            img: require("../assets/portfolio/work4/4.png"),
          },
        ],
        title: "Рекламный лендинг телеграм канала",
        description:
          "Разработка рекламного лендинга для телеграмм канала на чистом js/html/css",
        link: "https://meme-coin-build.vercel.app/",
        gitHub: null,
      },
      {
        id: 5,
        images: [
          {
            id: 1,
            img: require("../assets/portfolio/work5/1.png"),
          },
          {
            id: 2,
            img: require("../assets/portfolio/work5/2.png"),
          },
          {
            id: 3,
            img: require("../assets/portfolio/work5/3.png"),
          },
          {
            id: 4,
            img: require("../assets/portfolio/work5/4.png"),
          },
          {
            id: 5,
            img: require("../assets/portfolio/work5/5.png"),
          },
          {
            id: 6,
            img: require("../assets/portfolio/work5/6.png"),
          },
          {
            id: 7,
            img: require("../assets/portfolio/work5/7.png"),
          },
        ],
        title: "Телеграмм игра",
        description: "Разработка telegram игры на чистом js/html/css",
        link: null,
        gitHub: null,
      },
      {
        id: 6,
        images: [
          {
            id: 1,
            img: require("../assets/portfolio/work6/1.png"),
          },
          {
            id: 2,
            img: require("../assets/portfolio/work6/2.png"),
          },
          {
            id: 3,
            img: require("../assets/portfolio/work6/3.png"),
          },
          {
            id: 4,
            img: require("../assets/portfolio/work6/4.png"),
          },
          {
            id: 5,
            img: require("../assets/portfolio/work6/5.png"),
          },
          {
            id: 6,
            img: require("../assets/portfolio/work6/6.png"),
          },
          {
            id: 7,
            img: require("../assets/portfolio/work6/7.png"),
          },
        ],
        title: "Интернет-магазин мебели",
        description: "Разработка интернет магазина на blade шаблонах (php)",
        link: null,
        gitHub: null,
      },
      {
        id: 7,
        images: [
          {
            id: 1,
            img: require("../assets/portfolio/work7/1.png"),
          },
          {
            id: 2,
            img: require("../assets/portfolio/work7/2.png"),
          },
          {
            id: 3,
            img: require("../assets/portfolio/work7/3.png"),
          },
          {
            id: 4,
            img: require("../assets/portfolio/work7/4.png"),
          },
          {
            id: 5,
            img: require("../assets/portfolio/work7/5.png"),
          },
        ],
        title: "Интернет-магазин кроссовок",
        description: "Разработка личного пет-проекта на vuejs",
        link: null,
        gitHub: null,
      },
      {
        id: 8,
        images: [
          {
            id: 1,
            img: require("../assets/portfolio/work8/1.png"),
          },
          {
            id: 2,
            img: require("../assets/portfolio/work8/2.png"),
          },
          {
            id: 3,
            img: require("../assets/portfolio/work8/3.png"),
          },
        ],
        title: "Сервис для аренды жилья",
        description:
          "Мое небольшое участие на данном проекте! Занимался рефакторингом кода",
        link: null,
        gitHub: null,
      },
      {
        id: 9,
        images: [
          {
            id: 1,
            img: require("../assets/portfolio/work9/1.png"),
          },
          {
            id: 2,
            img: require("../assets/portfolio/work9/2.png"),
          },
          {
            id: 3,
            img: require("../assets/portfolio/work9/3.png"),
          },
          {
            id: 4,
            img: require("../assets/portfolio/work9/4.png"),
          },
          {
            id: 5,
            img: require("../assets/portfolio/work9/5.png"),
          },
          {
            id: 6,
            img: require("../assets/portfolio/work9/6.png"),
          },
          {
            id: 7,
            img: require("../assets/portfolio/work9/7.png"),
          },
        ],
        title: "Рекламный лендинг приложения",
        description: "Разработка рекламного лендинга для приложения на vuejs",
        link: "https://nmnh-front.vercel.app/",
        gitHub: "https://github.com/Youngson335/currency-converter",
      },
      {
        id: 10,
        images: [
          {
            id: 1,
            img: require("../assets/portfolio/work10/1.png"),
          },
          {
            id: 2,
            img: require("../assets/portfolio/work10/2.png"),
          },
          {
            id: 3,
            img: require("../assets/portfolio/work10/3.png"),
          },
          {
            id: 4,
            img: require("../assets/portfolio/work10/4.png"),
          },
          {
            id: 5,
            img: require("../assets/portfolio/work10/5.png"),
          },
          {
            id: 6,
            img: require("../assets/portfolio/work10/6.png"),
          },
        ],
        title: "Админ-панель для телеграмм приложения",
        description: "Разработка админ панели для telegram приложения",
        link: null,
        gitHub: null,
      },
      {
        id: 11,
        images: [
          {
            id: 1,
            img: require("../assets/portfolio/work11/1.png"),
          },
          {
            id: 2,
            img: require("../assets/portfolio/work11/2.png"),
          },
          {
            id: 3,
            img: require("../assets/portfolio/work11/3.png"),
          },
          {
            id: 4,
            img: require("../assets/portfolio/work11/4.png"),
          },
        ],
        title: "Рекламный лендинг заявок грузчиков",
        description:
          "Разработка рекламного лендинга для сервиса по найму грузчиков на 'аутсорс' заказы",
        link: null,
        gitHub: null,
      },
      {
        id: 12,
        images: [
          {
            id: 1,
            img: require("../assets/portfolio/work12/1.png"),
          },
          {
            id: 2,
            img: require("../assets/portfolio/work12/2.png"),
          },
          {
            id: 3,
            img: require("../assets/portfolio/work12/3.png"),
          },
          {
            id: 4,
            img: require("../assets/portfolio/work12/4.png"),
          },
          {
            id: 5,
            img: require("../assets/portfolio/work12/5.png"),
          },
          {
            id: 6,
            img: require("../assets/portfolio/work12/6.png"),
          },
          {
            id: 7,
            img: require("../assets/portfolio/work12/7.png"),
          },
          {
            id: 8,
            img: require("../assets/portfolio/work12/8.png"),
          },
          {
            id: 9,
            img: require("../assets/portfolio/work12/9.png"),
          },
          {
            id: 10,
            img: require("../assets/portfolio/work12/10.png"),
          },
        ],
        title: "Рекламный лендинг заявок грузчиков",
        description:
          "Разработка рекламного лендинга для сервиса по найму грузчиков на 'аутсорс' заказы",
        link: null,
        gitHub: null,
      },
      {
        id: 13,
        images: [
          {
            id: 1,
            img: require("../assets/portfolio/work13/1.png"),
          },
          {
            id: 2,
            img: require("../assets/portfolio/work13/2.png"),
          },
          {
            id: 3,
            img: require("../assets/portfolio/work13/3.png"),
          },
          {
            id: 4,
            img: require("../assets/portfolio/work13/4.png"),
          },
          {
            id: 5,
            img: require("../assets/portfolio/work13/5.png"),
          },
        ],
        title: "Регистрация сервиса",
        description: "Разработка регистрации для сервиса на vuejs",
        link: null,
        gitHub: null,
      },
      {
        id: 14,
        images: [
          {
            id: 1,
            img: require("../assets/portfolio/work14/1.png"),
          },
          {
            id: 2,
            img: require("../assets/portfolio/work14/2.png"),
          },
          {
            id: 3,
            img: require("../assets/portfolio/work14/3.png"),
          },
          {
            id: 4,
            img: require("../assets/portfolio/work14/4.png"),
          },
          {
            id: 5,
            img: require("../assets/portfolio/work14/5.png"),
          },
          {
            id: 6,
            img: require("../assets/portfolio/work14/6.png"),
          },
          {
            id: 7,
            img: require("../assets/portfolio/work14/7.png"),
          },
          {
            id: 8,
            img: require("../assets/portfolio/work14/8.png"),
          },
          {
            id: 9,
            img: require("../assets/portfolio/work14/9.png"),
          },
          {
            id: 10,
            img: require("../assets/portfolio/work14/10.png"),
          },
          {
            id: 11,
            img: require("../assets/portfolio/work14/11.png"),
          },
          {
            id: 12,
            img: require("../assets/portfolio/work14/12.png"),
          },
          {
            id: 13,
            img: require("../assets/portfolio/work14/13.png"),
          },
          {
            id: 14,
            img: require("../assets/portfolio/work14/14.png"),
          },
          {
            id: 15,
            img: require("../assets/portfolio/work14/15.png"),
          },
          {
            id: 16,
            img: require("../assets/portfolio/work14/16.png"),
          },
        ],
        title: "Благотворительный сайт",
        description:
          "Разработка сайта, посвященный благотворительному фонду! Разработка велась 2 дня на vuejs",
        link: null,
        gitHub: null,
      },
      {
        id: 15,
        images: [
          {
            id: 1,
            img: require("../assets/portfolio/work15/1.png"),
          },
          {
            id: 2,
            img: require("../assets/portfolio/work15/2.png"),
          },
          {
            id: 3,
            img: require("../assets/portfolio/work15/3.png"),
          },
          {
            id: 4,
            img: require("../assets/portfolio/work15/4.png"),
          },
          {
            id: 5,
            img: require("../assets/portfolio/work15/5.png"),
          },
          {
            id: 6,
            img: require("../assets/portfolio/work15/6.png"),
          },
          {
            id: 7,
            img: require("../assets/portfolio/work15/7.png"),
          },
          {
            id: 8,
            img: require("../assets/portfolio/work15/8.png"),
          },
        ],
        title: "Телеграмм игра",
        description: "Разработка telegram игры-кликер! Личный пет-проект!",
        link: null,
        gitHub: null,
      },
      {
        id: 16,
        images: [
          {
            id: 1,
            img: require("../assets/portfolio/work16/1.png"),
          },
          {
            id: 2,
            img: require("../assets/portfolio/work16/2.png"),
          },
          {
            id: 3,
            img: require("../assets/portfolio/work16/3.png"),
          },
          {
            id: 4,
            img: require("../assets/portfolio/work16/4.png"),
          },
          {
            id: 5,
            img: require("../assets/portfolio/work16/5.png"),
          },
        ],
        title: "Тестовое задание для компании",
        description: "Разработка тестового задания для компании",
        link: "https://test-app-book-build.vercel.app/",
        gitHub: "https://github.com/Youngson335/test-app-books",
      },
      {
        id: 17,
        images: [
          {
            id: 1,
            img: require("../assets/portfolio/work17/1.png"),
          },
          {
            id: 2,
            img: require("../assets/portfolio/work17/2.png"),
          },
          {
            id: 3,
            img: require("../assets/portfolio/work17/3.png"),
          },
          {
            id: 4,
            img: require("../assets/portfolio/work17/4.png"),
          },
          {
            id: 5,
            img: require("../assets/portfolio/work17/5.png"),
          },
        ],
        title: "Тестовое задание для компании",
        description: "Разработка тестового задания для компании",
        link: "https://alef-build.vercel.app/",
        gitHub: "https://github.com/Youngson335/test-alef",
      },
    ],
  }),
  actions: {
    findWorkById(id: number) {
      const work = this.completeWorks.find((item: CompleteWork) => {
        return item.id === id;
      });
      return work;
    },
  },
});

export default usePortfolioStore;

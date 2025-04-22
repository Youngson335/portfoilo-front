import { defineStore } from "pinia";

interface WorkPreview {
    id: number;
    img: Promise<{ default: string }>;
    title: string;    
}

interface PortfolioState {
    works: WorkPreview[];
}

const usePortfolioStore = defineStore('portfolio', {
    state:  (): PortfolioState => ({
        works: [
            {
                id: 1,
                img: import('../assets/portfolio/work1/1.png'),
                title: 'Сервис по вывозу мусора'                
            },
            {
                id: 2,
                img: import('../assets/portfolio/work2/1.png'),
                title: 'Тестовое задание для компании'                
            },
            {
                id: 3,
                img: import('../assets/portfolio/work3/1.png'),
                title: 'Верстка + анимация поезда'                
            },
            {
                id: 4,
                img: import('../assets/portfolio/work4/1.png'),
                title: 'Рекламный лендинг телеграм канала'                
            },
            {
                id: 5,
                img: import('../assets/portfolio/work5/1.png'),
                title: 'Телеграмм игра'                
            },
            {
                id: 6,
                img: import('../assets/portfolio/work6/1.png'),
                title: 'Интернет-магазин мебели'                
            },
            {
                id: 7,
                img: import('../assets/portfolio/work7/1.png'),
                title: 'Интернет-магазин кроссовок'                
            },
            {
                id: 8,
                img: import('../assets/portfolio/work8/1.png'),
                title: 'Сервис для аренды жилья'
            },
            {
                id: 9,
                img: import('../assets/portfolio/work9/1.png'),
                title: 'Рекламный лендинг приложения'                
            },
            {
                id: 10,
                img: import('../assets/portfolio/work10/1.png'),
                title: 'Админ-панель для телеграмм приложения'                
            },
            {
                id: 11,
                img: import('../assets/portfolio/work11/1.png'),
                title: 'Рекламный лендинг заявок грузчиков'                
            },
            {
                id: 12,
                img: import('../assets/portfolio/work12/1.png'),
                title: 'Сервис записи в барбершопы Москвы'                
            },
            {
                id: 13,
                img: import('../assets/portfolio/work13/1.png'),
                title: 'Регистрация сервиса'                
            },
            {
                id: 14,
                img: import('../assets/portfolio/work14/1.png'),
                title: 'Благотворительный сайт'                
            },
            {
                id: 15,
                img: import('../assets/portfolio/work15/1.png'),
                title: 'Телеграмм игра'                
            },
            {
                id: 16,
                img: import('../assets/portfolio/work16/1.png'),
                title: 'Тестовое задание для компании'                
            },
            {
                id: 17,
                img: import('../assets/portfolio/work17/1.png'),
                title: 'Тестовое задание для компании'                
            },            
        ]
    })
})

export default usePortfolioStore;
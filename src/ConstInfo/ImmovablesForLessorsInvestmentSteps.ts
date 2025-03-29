import { BlueRectangleType } from "../Types/BlueRectangleType";

// Импортируем все изображения синхронно
const images = import.meta.glob(
    "../assets/icons/blueRectangleIcons/immovables/*.svg",
    { eager: true }
) as Record<string, { default: string }>;

// Описание шагов инвестирования (без изображений)
const stepsData: Omit<BlueRectangleType, "imageUrl">[] = [
    {
        number: "01",
        title: "Собственник передает объект агентству",
        description: "Мы заключаем договор управления и продажи, фиксируя условия и ежемесячные выплаты",
    },
    {
        number: "02",
        title: "Объект выставляется на платформе",
        description: "Агентство предлагает его инвесторам для покупки долей",
    },
    {
        number: "03",
        title: "Инвесторы покупают доли",
        description: "Минимальный объем — 1 квадратный метр",
    },
    {
        number: "04",
        title: "Выплаты собственнику через инвестиционный фонд",
        description: "Средства от инвесторов идут на покрытие выплат владельцу",
    },
    {
        number: "05",
        title: "Недвижимость остается в управлении агентства, если не найдены арендаторы или покупатели",
        description: "В таком случае объект добавляется на баланс агентства как актив до момента его реализации",
    },
];

// Формируем финальный массив с шагами инвестирования
export const investmentSteps: BlueRectangleType[] = Object.values(images)
    .map(image => image.default) // Получаем пути к изображениям
    .map((imageUrl, index) => ({
        imageUrl,
        ...stepsData[index], // Добавляем номер, заголовок и описание
    }));

// Импортируем все изображения синхронно
const images = import.meta.glob(
    "../assets/icons/benefitsIcons/immovables/lessors/*.svg",
    { eager: true }
) as Record<string, { default: string }>;

// Описание преимуществ (без изображений)
const benefitsData = [
    {
        title: "Долгосрочная перспектива владения:",
        description: "Каждый платеж приближает вас к полному выкупу жилья",
    },
    {
        title: "Прозрачные условия:",
        description: "Никаких скрытых комиссий или неожиданных изменений в договоре",
    },
    {
        title: "Гарантированные права:",
        description: "После завершения выплат недвижимость полностью переходит в вашу собственность",
    },
    {
        title: "Поддержка на каждом этапе:",
        description: "Мы сопровождаем вас от подписания договора до получения ключей",
    },
];

// Создаём массив преимуществ, связывая изображения и описания
export const investmentBenefits = Object.values(images)
    .map(image => image.default) // Получаем пути к изображениям
    .map((img, index) => ({
        img,
        ...benefitsData[index], // Подставляем заголовок и описание
    }));

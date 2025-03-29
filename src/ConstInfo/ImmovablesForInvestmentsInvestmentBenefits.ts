// Импортируем все изображения синхронно
const images = import.meta.glob(
    "../assets/icons/benefitsIcons/immovables/investments/*.svg",
    { eager: true }
) as Record<string, { default: string }>;

// Описание преимуществ
const benefitsData = [
    {
        title: "Высокий доход",
        description: "5–10% ежемесячно",
    },
    {
        title: "Гарантированная безопасность",
        description: "Фонд гарантии защищает ваши инвестиции",
    },
    {
        title: "Простота выхода",
        description: "Вы можете вернуть вложенные средства в любой момент без штрафов",
    },
    {
        title: "Минимальный порог входа",
        description: "Покупка доли от 1м² позволяет начать с небольших вложений",
    },
];

// Преобразуем объект изображений в массив, сортируем и объединяем с описаниями
export const investmentBenefits = Object.values(images)
    .map(image => image.default) // Получаем пути к изображениям
    .map((img, index) => ({
        img,
        ...benefitsData[index], // Подставляем соответствующий заголовок и описание
    }));

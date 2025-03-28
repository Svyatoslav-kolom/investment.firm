const BASE_URL = import.meta.env.BASE_URL || "/";
const IMAGES_PATH = "icons/benefitsIcons/immovables/investments/";

const getImageUrl = (fileName: string) => `${BASE_URL}${IMAGES_PATH}${fileName}`;

export const investmentBenefits = [
    {
        img: getImageUrl("1.svg"),
        title: "Высокий доход",
        description: "5–10% ежемесячно",
    },
    {
        img: getImageUrl("2.svg"),
        title: "Гарантированная безопасность",
        description: "Фонд гарантии защищает ваши инвестиции",
    },
    {
        img: getImageUrl("3.svg"),
        title: "Простота выхода",
        description: "Вы можете вернуть вложенные средства в любой момент без штрафов",
    },
    {
        img: getImageUrl("4.svg"),
        title: "Минимальный порог входа",
        description: "Покупка доли от 1м² позволяет начать с небольших вложений",
    },
];

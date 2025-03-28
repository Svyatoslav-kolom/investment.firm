const BASE_URL = import.meta.env.BASE_URL || "/";
const IMAGES_PATH = "icons/problems/forLessors/";

const getImageUrl = (fileName: string) => `${BASE_URL}${IMAGES_PATH}${fileName}`;

export const problems = [
    {
        img: getImageUrl("1.svg"),
        title: "Неликвидность:",
        description: "Цены достигли максимума, и владельцы теряют значительные средства, не имея возможности продать свои объекты."
    },
    {
        img: getImageUrl("2.svg"),
        title: "Отсутствие безопасных инвестиций:",
        description: "Инвесторы опасаются нестабильности и рисков, что делает рынок менее привлекательным."
    },
    {
        img: getImageUrl("3.svg"),
        title: "Решение:",
        description: "Мы предлагаем инновационную модель, которая минимизирует риски и открывает новые горизонты для инвестиций."
    },
    {
        img: getImageUrl("4.svg"),
        title: "Решение:",
        description: "Мы предлагаем инновационную модель, которая минимизирует риски и открывает новые горизонты для инвестиций."
    }
];

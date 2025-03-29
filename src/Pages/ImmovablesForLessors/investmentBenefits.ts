const BASE_URL = import.meta.env.BASE_URL || "/";
const IMAGES_PATH = "public/icons/benefitsIcons/immovables/lessors/";

const getImageUrl = (fileName: string) => `${BASE_URL}${IMAGES_PATH}${fileName}`;

export const investmentBenefits = [
    {
        img: getImageUrl("1.svg"),
        title: "Долгосрочная перспектива владения: ",
        description: "Каждый платеж приближает вас к полному выкупу жилья",
    },
    {
        img: getImageUrl("2.svg"),
        title: "Прозрачные условия:",
        description: "Никаких скрытых комиссий или неожиданных изменений в договоре",
    },
    {
        img: getImageUrl("3.svg"),
        title: "Гарантированные права:",
        description: "После завершения выплат недвижимость полностью переходит в вашу собственность",
    },
    {
        img: getImageUrl("4.svg"),
        title: "Поддержка на каждом этапе:",
        description: "Мы сопровождаем вас от подписания договора до получения ключей",
    },
];

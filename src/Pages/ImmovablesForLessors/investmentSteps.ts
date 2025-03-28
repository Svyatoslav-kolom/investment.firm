import { BlueRectangleType } from "../../Types/BlueRectangleType";

const BASE_URL = import.meta.env.BASE_URL || "/";
const IMAGES_PATH = "icons/blueRectangleIcons/immovables/";

const getImageUrl = (fileName: string) => `${BASE_URL}${IMAGES_PATH}${fileName}`;

export const investmentSteps: BlueRectangleType[] = [
    {
        number: "01",
        imageUrl: getImageUrl("1.svg"),
        title: "Собственник передает объект агентству",
        description: "Мы заключаем договор управления и продажи, фиксируя условия и ежемесячные выплаты",
    },
    {
        number: "02",
        imageUrl: getImageUrl("2.svg"),
        title: "Объект выставляется на платформе",
        description: "Агентство предлагает его инвесторам для покупки долей",
    },
    {
        number: "03",
        imageUrl: getImageUrl("3.svg"),
        title: "Инвесторы покупают доли",
        description: "Минимальный объем — 1 квадратный метр",
    },
    {
        number: "04",
        imageUrl: getImageUrl("4.svg"),
        title: "Выплаты собственнику через инвестиционный фонд",
        description: "Средства от инвесторов идут на покрытие выплат владельцу",
    },
    {
        number: "05",
        imageUrl: getImageUrl("5.svg"),
        title: "Недвижимость остается в управлении агентства, если не найдены арендаторы или покупатели",
        description: "В таком случае объект добавляется на баланс агентства как актив до момента его реализации",
    },
];

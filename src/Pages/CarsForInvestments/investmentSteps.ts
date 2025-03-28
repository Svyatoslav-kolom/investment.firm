import { BlueRectangleType } from "../../Types/BlueRectangleType";

const BASE_URL = "./icons/blueRectangleIcons/cars/forInvestor/";

export const investmentSteps: BlueRectangleType[] = [
    {
        number: "01",
        imageUrl: `${BASE_URL}1.svg`,
        title: "Покупка автомобиля",
        description: "Инвестор приобретает авто либо дает свое авто в пользование",
    },
    {
        number: "02",
        imageUrl: `${BASE_URL}2.svg`,
        title: "Заключение договора",
        description: "Вы подписываете договор с нашей компанией, передавая автомобиль в управление",
    },
    {
        number: "03",
        imageUrl: `${BASE_URL}3.svg`,
        title: "Сдача в аренду",
        description: "Автомобиль размещается на нашей платформе и сдается арендаторам",
    },
    {
        number: "04",
        imageUrl: `${BASE_URL}4.svg`,
        title: "Ежемесячный доход",
        description: "Инвестор получает стабильный доход",
    },
    {
        number: "05",
        imageUrl: `${BASE_URL}5.svg`,
        title: "Полная окупаемость",
        description: "За 3–4 года вложения окупаются, и авто начинает приносить чистую прибыль",
    },
];

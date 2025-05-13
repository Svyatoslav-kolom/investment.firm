import axios from "axios";
import { CarType } from "../Types/CarType";
// Поки немає точної структури, можна створити тимчасовий тип

const API_URL = "https://web.fundlumina.com/api/services";

export const fetchInvestCars = async (): Promise<CarType[]> => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        investParam: "yes",
        serviceParam: "auto",
      },
    });

    const allData: CarType[] = response.data ?? [];

    console.log("✅ Отримано авто з сервера (усі):", allData);

    const sorted = allData
      .sort(
        (a, b) =>
          new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime()
      )
      .slice(0, 10);

    return sorted;
  } catch (error) {
    console.error("❌ Помилка при завантаженні авто для інвестування:", error);
    return [];
  }
};

export const fetchInvestCarById = async (
  id: string | number
): Promise<CarType | null> => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        investParam: "yes",
        serviceParam: "auto",
      },
    });

    const allData: CarType[] = response.data ?? [];

    console.log("✅ Отримано авто з сервера для пошуку за ID:", allData);

    const car = allData.find((item) => item.id === Number(id)) || null;

    return car;
  } catch (error) {
    console.error("❌ Помилка при завантаженні авто за id:", error);
    return null;
  }
};

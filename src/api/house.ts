import axios from "axios";
import { HouseType } from "../Types/HouseType";

const API_URL = "https://web.fundlumina.com/api/services";

export const fetchInvestProperties = async (): Promise<HouseType[]> => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        investParam: "yes",
        serviceParam: "house",
      },
    });

    const allData: HouseType[] = response.data ?? [];

    const sorted = allData
      .sort(
        (a, b) =>
          new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime()
      )
      .slice(0, 10);

    return sorted;
  } catch (error) {
    console.error("❌ Помилка при завантаженні об'єктів нерухомості:", error);
    return [];
  }
};

export const fetchInvestPropertyById = async (
  id: string | number
): Promise<HouseType | null> => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        investParam: "yes",
        serviceParam: "house",
      },
    });

    const allData: HouseType[] = response.data ?? [];
    const property = allData.find((item) => item.id === Number(id)) || null;

    return property;
  } catch (error) {
    console.error("❌ Помилка при завантаженні об'єкта за id:", error);
    return null;
  }
};

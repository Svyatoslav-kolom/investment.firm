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
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, 10);

    console.log("✅ Отримано об'єкти нерухомості з параметрами:", sorted);

    return sorted;
  } catch (error) {
    console.error("❌ Помилка при завантаженні об'єктів нерухомості:", error);
    return [];
  }
};

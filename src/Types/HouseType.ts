export type HouseType = {
  id: number;
  name: string;
  description?: string;
  image?: string;
  image2?: string;
  image3?: string;
  city?: string;
  country?: string;
  square?: number;
  price?: number;
  pricemon?: number;
  status?: boolean;
  createdAt?: string;
  updatedAt?: string;

  // Для LoanTerms:
  investors?: number;
  priceforinvest?: number;       // мінімальна сума
  investedmoney?: number;        // вже інвестовано
  procentza?: number;            // % заемщика
  procentin?: number;            // % інвестора
  procentlumina?: number;        // надбавка Lumina
  term?: number;                 // термін в місяцях
  ready?: number;                // прогрес (0.0–1.0)
  comision?: number;            // якщо потрібно
  rent?: boolean;
  invest?: boolean;
};

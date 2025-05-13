export interface CarType {
  id: number;
  mark: string;
  model: string;
  type: string;
  color: string;
  motor: number;
  horsepower: number;
  fuel: number;
  transmission: number;
  race: number;
  year: number;
  complectation: string;
  vin: string;
  description: string | null;
  country: string;
  image: string;
  image2: string;
  image3: string;
  price: number;
  priceday: number;
  rent: boolean;
  invest: boolean;
  priceforinvest: number;
  investedmoney: number;
  procentin: number;
  share: number;
  ready: number;
  term: number;
  status: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  body: string | null;
}

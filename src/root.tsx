import { Routes, Route } from "react-router-dom";
import App from "./App";

// Pages
import { HomePage } from "./Pages/HomePage/HomePage";
import { ConsultingPage } from "./Pages/ConsultingPage";
import { BankingPage } from "./Pages/BankingPage";
import { CommunityPage } from "./Pages/CommunityPage";
import { LegalServicesPage } from "./Pages/LegalServicesPage";

// Immovables Pages
import { ImmovablesTop } from "./components/Organisms/ImmovablesTop";
import { ImmovablesDetailsPage } from "./Pages/ImmovablesDetailsPage";
import { ImmovablesForLessors } from "./Pages/ImmovablesForLessors";
import { ImmivablesLessorCatalog } from "./Pages/ImmivablesLessorCatalog";
import { ImmovablesForInvestments } from "./Pages/ImmovablesForInvestments";
import { ImmivablesInvestCatalog } from "./Pages/ImmivablesInvestCatalog";

// Cars Pages
import { CarsTop } from "./components/Organisms/CarsTop";
import { CarsCatalog } from "./Pages/CarsCatalog";
import { CarsDetailsPage } from "./Pages/CarsDetailsPage";
import { CarsForInvestments } from "./Pages/CarsForInvestments";
import { CarsForLessors } from "./Pages/CarsForLessors";

export function Root() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        {/* Главная страница */}
        <Route index element={<HomePage />} />

        {/* Базовые страницы */}
        <Route path="consulting" element={<ConsultingPage />} />
        <Route path="banking" element={<BankingPage />} />
        <Route path="entrepreneurs-community" element={<CommunityPage />} />
        <Route path="legal-services" element={<LegalServicesPage />} />

        {/* Недвижимость */}
        <Route path="immovables" element={<ImmovablesTop />}>
          <Route path="details" element={<ImmovablesDetailsPage />} />
          <Route path="forLessors" element={<ImmovablesForLessors />}>
            <Route path="catalog" element={<ImmivablesLessorCatalog />} />
          </Route>
          <Route path="forInvestments" element={<ImmovablesForInvestments />}>
            <Route path="catalog" element={<ImmivablesInvestCatalog />} />
          </Route>
        </Route>

        {/* Авто */}
        <Route path="auto" element={<CarsTop />}>
          <Route path="catalog" element={<CarsCatalog />} />
          <Route path="details" element={<CarsDetailsPage />} />
          <Route path="forInvestments" element={<CarsForInvestments />} />
          <Route path="forLessors" element={<CarsForLessors />} />
        </Route>
      </Route>
    </Routes>
  );
}

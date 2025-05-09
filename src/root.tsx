import { Routes, Route } from "react-router-dom";
import App from "./App";

// Pages
import { HomePage } from "./Pages/HomePage/HomePage";
import { ConsultingPage } from "./Pages/ConsultingPage";
import { BankingPage } from "./Pages/BankingPage";
import { CommunityPage } from "./Pages/CommunityPage";
import { LegalServicesPage } from "./Pages/LegalServicesPage";
import { ProductionPage } from "./Pages/ProductionPage";

// Immovables Pages
import { ImmovablesDetailsPage } from "./Pages/ImmovablesDetailsPage";
import { ImmovablesForLessors } from "./Pages/ImmovablesForLessors";
import { ImmivablesLessorCatalog } from "./Pages/ImmivablesLessorCatalog";
import { ImmovablesForInvestments } from "./Pages/ImmovablesForInvestments";
import { ImmivablesInvestCatalog } from "./Pages/ImmivablesInvestCatalog";

// Cars Pages
import { CarsCatalog } from "./Pages/CarsCatalog";
import { CarsDetailsPage } from "./Pages/CarsDetailsPage";
import { CarsForInvestments } from "./Pages/CarsForInvestments";
import { CarsForLessors } from "./Pages/CarsForLessors";

// Legal Pages
import { ShareTermsPage } from "./Pages/Legal/ShareTermsPage";
import { PrivacyPolicyPage } from "./Pages/Legal/PrivacyPolicyPage";
import { UserAgreementPage } from "./Pages/Legal/UserAgreementPage";
import { ExitPolicyPage } from "./Pages/Legal/ExitPolicyPage";
import { AmlPolicyPage } from "./Pages/Legal/AmlPolicyPage";
import { ReferralTermsPage } from "./Pages/Legal/ReferralTermsPage";
import { InvestmentSafetyPage } from "./Pages/Legal/InvestmentSafetyPage";
import { AboutLegalPage } from "./Pages/Legal/AboutLegalPage";
import { FaqPage } from "./Pages/Legal/FaqPage";
import { LuminaClubPage } from "./Pages/Legal/LuminaClubPage";

import { Box } from "@chakra-ui/react";

import { ScrollToTop } from "./ScrollToTop";
import { ScrollToAnchor } from "./ScrollToAnchor";
import { AboutUs } from "./Pages/AboutUs";

export function Root() {
  return (
    <>
      <ScrollToTop />
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          {/* Базовые страницы */}
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/banking" element={<BankingPage />} />
          <Route path="/entrepreneurs-community" element={<CommunityPage />} />
          <Route path="/legal-services" element={<LegalServicesPage />} />
          <Route path="/production" element={<ProductionPage />} />

          {/* Недвижимость */}
          <Route path="/immovables" element={<Box />} />
          <Route path="/immovables/details" element={<ImmovablesDetailsPage />} />
          <Route path="/immovables/forLessors" element={<ImmovablesForLessors />} />
          <Route path="/immovables/forLessors/catalog" element={<ImmivablesLessorCatalog />} />
          <Route path="/immovables/forInvestments" element={<ImmovablesForInvestments />} />
          <Route path="/immovables/forInvestments/catalog" element={<ImmivablesInvestCatalog />} />

          {/* Авто */}
          <Route path="/auto" element={<Box />} />
          <Route path="/auto/catalog" element={<CarsCatalog />} />
          <Route path="/auto/details" element={<CarsDetailsPage />} />
          <Route path="/auto/forInvestments" element={<CarsForInvestments />} />
          <Route path="/auto/forLessors" element={<CarsForLessors />} />

          {/* Юридические страницы */}
          <Route path="/legal/share-terms" element={<ShareTermsPage />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/legal/user-agreement" element={<UserAgreementPage />} />
          <Route path="/legal/exit-policy" element={<ExitPolicyPage />} />
          <Route path="/legal/aml-policy" element={<AmlPolicyPage />} />
          <Route path="/legal/referral-terms" element={<ReferralTermsPage />} />
          <Route path="/legal/investment-safety" element={<InvestmentSafetyPage />} />
          <Route path="/legal/about" element={<AboutLegalPage />} />
          <Route path="/legal/faq" element={<FaqPage />} />
          <Route path="/legal/club" element={<LuminaClubPage />} />
          
        </Route>
      </Routes>
    </>
  );
}

import { Box, VStack } from "@chakra-ui/react";
import { Header } from "./components/Organisms/Header";
import { Footer } from "./components/Organisms/Footer/Footer";
import { FooterBottom } from "./components/Organisms/FooterBottom";
import { Outlet, useLocation } from "react-router-dom";

// Top-компоненты
import { HomePageTop } from "./components/Top/HomePageTop";
import { ConsultingPageTop } from "./components/Top/ConsultingPageTop";
import { BankingPageTop } from "./components/Top/BankingPageTop";
import { CommunityPageTop } from "./components/Top/CommunityPageTop";
import { LegalServicesTop } from "./components/Top/LegalServicesTop";
import { ImmovablesForInvestmentsTop } from "./components/Top/ImmovablesForInvestmentsTop";
import { ImmovablesTopLessors } from "./components/Top/ImmovablesTopLessors";
import { CarsTopInvestment } from "./components/Top/CarsTopInvestment";
import { CarsTopLessor } from "./components/Top/CarsTopLessor";
import { ImmovablesTop } from "./components/Top/ImmovablesTop";
import { CarsTop } from "./components/Top/CarsTop";
import { HeaderMobile } from "./components/Organisms/HeaderMobile";
import { useBreakpointValue } from "@chakra-ui/react";
import { ProductionTop } from "./components/Top/ProductionTop";
import { CarsCatalogTop } from "./components/Top/CarsCatalogTop";
import { LegalTop } from "./components/Top/LegalTop";

// Объект с Top-компонентами
const topComponents: Record<string, React.FC> = {
  "/": HomePageTop,
  "/consulting": ConsultingPageTop,
  "/banking": BankingPageTop,
  "/entrepreneurs-community": CommunityPageTop,
  "/legal-services": LegalServicesTop,
  "/immovables": ImmovablesTop,
  "/immovables/forInvestments": ImmovablesForInvestmentsTop,
  "/immovables/forLessors": ImmovablesTopLessors,
  "/auto": CarsTop,
  "/auto/forInvestments": CarsTopInvestment,
  "/auto/forLessors": CarsTopLessor,
  "/production": ProductionTop,
  "/auto/catalog": CarsCatalogTop,
};

function App() {
  const location = useLocation();
  const isMdOrLarger = useBreakpointValue({ base: false, md: true });

  // Определяем Top-компонент в зависимости от пути
  let TopComponent = null;

  if (location.pathname === "/auto/catalog" && !isMdOrLarger) {
    TopComponent = null;
  } else if (location.pathname.startsWith("/legal")) {
    TopComponent = LegalTop;
  } else {
    TopComponent = topComponents[location.pathname];
  }

  return (
    <VStack m={0} p={0} overflowX="hidden">
      {/* Фиксированный Header */}
      <Box
        position="fixed"
        top={{ base: "0", md: "40px" }}
        left={{ base: "0", md: "112px" }}
        right={{ base: "0", md: "112px" }}
        zIndex={1000}
      >
        {window.innerWidth < 768 ? (
          <HeaderMobile isHome={true} />
        ) : (
          <Header isHome={true} />
        )}
      </Box>

      {/* Отображение Top-компонента */}
      {TopComponent && <TopComponent />}

      {/* Контент */}
      <Box px={{ base: "20px", md: "157px" }} mt={{ base: "20px", md: "80px" }}>
        <Outlet />
      </Box>

      {/* Footer */}
      <Box w="100vw" px={{ base: "20px", md: "157px" }} id="footer">
        <Footer />
      </Box>

      {/* Footer Bottom */}
      <Box mt={{ base: "50px", md: "140px" }} w="100vw">
        <FooterBottom />
      </Box>
    </VStack>
  );
}

export default App;

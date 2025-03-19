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
import { CarsCatalogTop } from "./components/Top/CarsCatalogTop";
import { CarsTopInvestment } from "./components/Top/CarsTopInvestment";
import { CarsTopLessor } from "./components/Top/CarsTopLessor";
import { ImmovablesTop } from "./components/Top/ImmovablesTop";
import { CarsTop } from "./components/Top/CarsTop";

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
  "/auto/catalog": CarsCatalogTop,
  "/auto/forInvestments": CarsTopInvestment,
  "/auto/forLessors": CarsTopLessor,
};

function App() {
  const location = useLocation();
  const TopComponent = topComponents[location.pathname];

  return (
    <VStack m={0} p={0} overflowX="hidden">
      {/* Фиксированный Header */}
      <Box position="absolute" top="40px" left="112px" right="112px" zIndex="10">
        <Header />
      </Box>

      {/* Отображение нужного Top-компонента */}
      {TopComponent && <TopComponent />}

      {/* Контент с отступами */}
      <Box px="157px">
        <Outlet />
      </Box>

      {/* Footer */}
      <Box w="100vw" px="157px" >
        <Footer />
      </Box>

      {/* Footer Bottom */}
      <Box mt="140px" w="100vw" >
        <FooterBottom />
      </Box>
    </VStack>
  );
}

export default App;
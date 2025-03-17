import { Box, VStack } from "@chakra-ui/react";
import { Header } from "./components/Organisms/Header";
import { Footer } from "./components/Organisms/Footer/Footer";
import { FooterBottom } from "./components/Organisms/FooterBottom";
import { Outlet } from "react-router-dom";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

function App() {
  return (
    <VStack  m={0} p={0} maxW="100vw">
      <Box position="absolute" top="40px" left="112px" right="112px" zIndex="10" >
        <Header />
      </Box>

      <Outlet />

      <Box w="100vw" px="157px">
        <Footer />
      </Box>


      <Box mt="140px" w="100vw">
        <FooterBottom />
      </Box>
    </VStack>
  );
}

export default App;

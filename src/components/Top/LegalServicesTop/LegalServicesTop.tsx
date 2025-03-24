import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Head } from "../../Organisms/Head";
import LegalServicesTopImge from "../../../assets/PageBackgrounds/LegalServicesPage.png";
import LegalServicesTopImgeMobile from "../../../assets/PageBackgrounds/mobile/LegalServicesPage.png";
import { CustomTop } from "../CustomTop";

export const LegalServicesTop = () => {
  const backgroundImage = useBreakpointValue({ base: LegalServicesTopImgeMobile, md: LegalServicesTopImge }) || LegalServicesTopImgeMobile;

  return (
    <Head backgroundImage={backgroundImage} hasOverlay={false} heightPercentage={72}>
      <Box display={{ base: "block", md: "none" }}>
        <CustomTop
          title="Юридические Услуги в Турции: Полная Правовая Поддержка"
          description="Начните инвестировать менее чем за 5 минут и всего с 10 долларов."
        />
      </Box>

      <Box display={{ base: "none", md: "block" }} />
    </Head>
  );
};
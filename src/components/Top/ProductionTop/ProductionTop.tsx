import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Head } from "../../Organisms/Head";
import ProductionTopImge from "../../../assets/PageBackgrounds/ProductionTop.png";
import ProductionImgeMobile from "../../../assets/PageBackgrounds/mobile/ProductionTop.png";
import { CustomTop } from "../CustomTop";

export const ProductionTop = () => {
  const backgroundImage = useBreakpointValue({ base: ProductionImgeMobile, md: ProductionTopImge }) || ProductionTopImge;

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
import { Box, useBreakpointValue } from "@chakra-ui/react";
import BankingTop from "../../../assets/PageBackgrounds/BankingPage.png";
import BankingTopMobile from "../../../assets/PageBackgrounds/mobile/BankingPage.png";
import { Head } from "../../Organisms/Head";
import { CustomTop } from "../CustomTop";

export const BankingPageTop = () => {
  const backgroundImage = useBreakpointValue({ base: BankingTopMobile, md: BankingTop }) || BankingTopMobile;

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

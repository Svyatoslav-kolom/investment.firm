import { Box, useBreakpointValue } from "@chakra-ui/react";
import ConsultingTop from "../../../assets/PageBackgrounds/Consulting.png";
import ConsultingTopMobile from "../../../assets/PageBackgrounds/mobile/Consulting.png";
import { Head } from "../../Organisms/Head";
import { CustomTop } from "../CustomTop";

export const ConsultingPageTop = () => {
  const backgroundImage = useBreakpointValue({ base: ConsultingTopMobile, md: ConsultingTop }) || ConsultingTopMobile;

  return (
    <Head backgroundImage={backgroundImage} hasOverlay={false} heightPercentage={72}>
      <Box display={{ base: "block", md: "none" }}>
        <CustomTop
          title="Консалтинг – Полный спектр услуг для успешного бизнеса в Турции"
          description="Начните инвестировать менее чем за 5 минут и всего с 10 долларов."
        />
      </Box>

      <Box display={{ base: "none", md: "block" }} />
    </Head>
  );
};

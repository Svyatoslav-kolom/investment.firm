import { Box, useBreakpointValue } from "@chakra-ui/react";
import CommunityTop from "../../../assets/PageBackgrounds/CommunityPage.png";
import CommunityTopMobile from "../../../assets/PageBackgrounds/mobile/CommunityPage.png";
import { Head } from "../../Organisms/Head";
import { CustomTop } from "../CustomTop";


export const CommunityPageTop = () => {
  const backgroundImage = useBreakpointValue({ base: CommunityTopMobile, md: CommunityTop }) || CommunityTop;

  return (
    <Head backgroundImage={backgroundImage} hasOverlay={false} heightPercentage={72}>
      <Box display={{ base: "block", md: "none" }}>
        <CustomTop
          title="сообщество ДЛЯ ДЕЙСТВУЮЩИХ ПРЕДПРИНИМАТЕЛЕЙ МАЛОГО И СРЕДНЕГО БИЗНЕСОВ"
          description="Начните инвестировать менее чем за 5 минут и всего с 10 долларов."
        />
      </Box>

      <Box display={{ base: "none", md: "block" }} />
    </Head>
  );
};


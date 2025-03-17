import { Box } from "@chakra-ui/react";
import { Head } from "../../components/Organisms/Head";
import CommunityTop from "../../assets/PageBackgrounds/CommunityPage.png";
import { CommunityTitle } from "../../components/Molecules/CommunityTitle";
import { CommunityCatalog } from "../../components/Organisms/CommunityCatalog";
import { communityItems } from "./communityItems";

export const CommunityPage = () => (
  <Box mb="180px">
    <Head backgroundImage={CommunityTop} hasOverlay={false} heightPercentage={72}>
      <Box />
    </Head>

    <Box mx="158px" mt="60px">
      <Box justifySelf="end">
        <CommunityTitle />
      </Box>

      <Box mt={"140px"} mx="auto">
        <CommunityCatalog items={communityItems} />
      </Box>
    </Box>
  </Box>
);

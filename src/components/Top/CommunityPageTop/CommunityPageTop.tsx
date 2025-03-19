import { Box } from "@chakra-ui/react";
import CommunityTop from "../../../assets/PageBackgrounds/CommunityPage.png";
import { Head } from "../../Organisms/Head";


export const CommunityPageTop = () => (
  <Head backgroundImage={CommunityTop} hasOverlay={false} heightPercentage={72}>
    <Box />
  </Head>
);

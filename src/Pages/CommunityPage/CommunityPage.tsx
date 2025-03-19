import { Box } from "@chakra-ui/react";
import { CommunityTitle } from "../../components/Molecules/CommunityTitle";
import { CommunityCatalog } from "../../components/Organisms/CommunityCatalog";
import { communityItems } from "./communityItems";
import useZoom from "../../zoom";

export const CommunityPage = () => {
  const zoom = useZoom();
  return (
  <Box mb="180px" mt="60px" zoom={zoom}>

    <Box justifySelf="end">
      <CommunityTitle />
    </Box>

    <Box mt={"140px"} mx="auto">
      <CommunityCatalog items={communityItems} />
    </Box>
  </Box>
);}

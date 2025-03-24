import { Box, Stack } from "@chakra-ui/react";
import { ClientComponent } from "../../Molecules/ClientComponent";
import ImmovablesTopBackground from "../../../assets/PageBackgrounds/ImmovablesTopBackground.png";

import { FC } from "react";
import { ImmovablesTopInfo } from "./ImmovablesTopInfo";

interface ImmovablesTopProps {
  CustomComponent?: React.ReactElement;
}

export const ImmovablesTop: FC<ImmovablesTopProps> = () => (
  <Stack
    h="100vh"
    w="100vw"
    backgroundImage={`
      linear-gradient(26.67deg, rgba(0, 0, 0, 0.7) 11.94%, rgba(0, 0, 0, 0.56) 28.66%, rgba(0, 0, 0, 0.21) 41.89%, rgba(0, 0, 0, 0) 71.44%),
       url(${ImmovablesTopBackground})
     `}
    backgroundSize="cover"
    backgroundPosition="center"
    pb={{base: "10px", md: "64px"}}
    px={{ base: "16px", md: "40px", lg: "150px" }}
    direction={{ base: "column", md: "row" }}
    alignItems={{ base: "center", md: "flex-end" }}
    justifyContent={{ base: "flex-end", md: "space-between" }}
  >
    <ImmovablesTopInfo />
    <Box w="100%" display={{ base: "none", md: "block" }}>
      <ClientComponent />
    </Box>

  </Stack>
);

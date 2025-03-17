import { HStack } from "@chakra-ui/react";
import { ClientComponent } from "../../Molecules/ClientComponent";
import ImmovablesTopBackground from "../../../assets/PageBackgrounds/ImmovablesTopBackground.png";

import { FC } from "react";
import { ImmovablesTopInfo } from "./ImmovablesTopInfo";

interface ImmovablesTopProps {
  CustomComponent?: React.ReactElement;
}

export const ImmovablesTop: FC<ImmovablesTopProps> = () => (
  <HStack
    alignItems="end"
    justifyContent="space-between"
    h="100vh"
    w="100vw"
    backgroundImage={`
      linear-gradient(26.67deg, rgba(0, 0, 0, 0.7) 11.94%, rgba(0, 0, 0, 0.56) 28.66%, rgba(0, 0, 0, 0.21) 41.89%, rgba(0, 0, 0, 0) 71.44%),
       url(${ImmovablesTopBackground})
     `}
    backgroundSize="cover"
    backgroundPosition="center"
    pb="64px"
    px={150}
  >
    <ImmovablesTopInfo />
    <ClientComponent />
  </HStack>
);

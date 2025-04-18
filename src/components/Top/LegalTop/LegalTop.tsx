import { Head } from "../../Organisms/Head";
import LegalTopBackground from "../../../assets/PageBackgrounds/LegalTop.png";
import { Box } from "@chakra-ui/react";

export const LegalTop = () => (
  <Head
    backgroundImage={LegalTopBackground}
    heightPercentage={72}
  >
    <Box />
  </Head>
);

import { Box } from "@chakra-ui/react";
import BankingTop from "../../../assets/PageBackgrounds/BankingPage.png";
import { Head } from "../../Organisms/Head";

export const BankingPageTop = () => (
  <Head backgroundImage={BankingTop} hasOverlay={false} heightPercentage={72}>
    <Box />
  </Head>
);

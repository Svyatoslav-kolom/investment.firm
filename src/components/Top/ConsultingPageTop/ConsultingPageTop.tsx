import { Box } from "@chakra-ui/react";
import ConsultingTop from "../../../assets/PageBackgrounds/Consulting.png";
import { Head } from "../../Organisms/Head";

export const ConsultingPageTop = () => (
  <Head backgroundImage={ConsultingTop} hasOverlay={false} heightPercentage={72}>
    <Box />
  </Head>
);

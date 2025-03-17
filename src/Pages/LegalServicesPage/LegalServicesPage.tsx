import { Box, Text } from "@chakra-ui/react";
import { Head } from "../../components/Organisms/Head";
import LegalServicesTop from "../../assets/PageBackgrounds/LegalServicesPage.png";
import { LegalServiceCatalog } from "../../components/Organisms/LegalServiceCatalog";
import { servicesData } from "./services";
import { fadeInFrom, withMotion } from "../../utils/animations";

const MotionText = withMotion(Text);

export const LegalServicesPage = () => (
  <Box mb="180px">
    <Head backgroundImage={LegalServicesTop} hasOverlay={false} heightPercentage={72}>
      <Box />
    </Head>

    <Box mt="60px" mx="158px">
      <MotionText
        {...fadeInFrom("right")}
        maxW="520px"
        fontSize={18}
        fontWeight={400}
        lineHeight="140%"
        justifySelf="end"
        mb="100px"
      >
        Наша команда профессиональных юристов предоставляет полный спектр юридических услуг в Турции — от регистрации бизнеса до получения гражданства. Мы поможем вам решить любые правовые вопросы, защитить ваши интересы и минимизировать риски на всех этапах.
      </MotionText>

      <LegalServiceCatalog services={servicesData} />
    </Box>
  </Box>
);

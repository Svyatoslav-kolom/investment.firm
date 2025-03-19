import { Box, Text } from "@chakra-ui/react";
import { LegalServiceCatalog } from "../../components/Organisms/LegalServiceCatalog";
import { servicesData } from "./services";
import { fadeInFrom, withMotion } from "../../utils/animations";
import useZoom from "../../zoom";

const MotionText = withMotion(Text);

export const LegalServicesPage = () => {
  const zoom = useZoom();
  return (
    <Box mb="180px" mt="60px" zoom={zoom}>
      <MotionText
        {...fadeInFrom("right")}
        maxW="520px"
        textStyle="t2"
        lineHeight="140%"
        justifySelf="end"
        mb="100px"
      >
        Наша команда профессиональных юристов предоставляет полный спектр юридических услуг в Турции — от регистрации бизнеса до получения гражданства. Мы поможем вам решить любые правовые вопросы, защитить ваши интересы и минимизировать риски на всех этапах.
      </MotionText>

      <LegalServiceCatalog services={servicesData} />
    </Box>
  );
}